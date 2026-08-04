"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

import { resolveShowcaseCommand } from "./chat-showcase";

export type ChatRole = "user" | "assistant";

export interface ChatSourceData {
  id: string;
  label: string;
  href: string;
}

export interface ChatMessageData {
  id: string;
  role: ChatRole;
  /** Rendered as-is: plain text while streaming, rich markup when done. */
  content: React.ReactNode;
  /** Plain-text mirror of `content`, used to build the history for onSend. */
  text?: string;
  sources?: ChatSourceData[];
}

export interface ChatHistoryEntry {
  role: ChatRole;
  content: string;
}

export interface ChatSendContext {
  /** Aborted by reset() and on unmount; pass it to fetch. */
  signal: AbortSignal;
  /** The conversation before this question, oldest first. */
  history: ChatHistoryEntry[];
  /**
   * Creates the assistant reply on the first call and patches the same
   * message on every later call, so streaming updates one bubble and the
   * typing indicator stays put until real content arrives.
   */
  setAssistant: (
    content: React.ReactNode,
    options?: { text?: string; sources?: ChatSourceData[] },
  ) => void;
}

/**
 * The transport, supplied by the app: take the question, talk to a server
 * however you like, and stream the reply through `setAssistant`. A thrown
 * error lands in `error`; an abort is swallowed.
 */
export type ChatSendHandler = (
  question: string,
  context: ChatSendContext,
) => void | Promise<void>;

interface ChatContextValue {
  isOpen: boolean;
  open: (returnFocusTo?: HTMLElement | null) => void;
  close: (restoreFocus?: boolean) => HTMLElement | null;
  toggle: () => void;
  messages: ChatMessageData[];
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  error: string | null;
  /** Sends `text`, or the current input when omitted. No-op while loading. */
  send: (text?: string) => void;
  /**
   * Opens the panel and hands `question` to the assistant. While a reply is
   * still streaming the question is pre-filled instead, ready to send.
   */
  ask: (question: string, returnFocusTo?: HTMLElement | null) => void;
  /** Aborts any in-flight reply and restores the initial greeting. */
  reset: () => void;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
}

const ChatContext = createContext<ChatContextValue>({
  isOpen: false,
  open: () => {},
  close: () => null,
  toggle: () => {},
  messages: [],
  input: "",
  setInput: () => {},
  loading: false,
  error: null,
  send: () => {},
  ask: () => {},
  reset: () => {},
  inputRef: { current: null },
});

function useChat() {
  return useContext(ChatContext);
}

export interface ChatProviderProps {
  children: React.ReactNode;
  /**
   * The transport. Optional when $showcase is on, where the commands can
   * carry a demo by themselves; required for real answers.
   */
  onSend?: ChatSendHandler;
  /** Assistant message seeded on first open and after reset. Pass null for none. */
  greeting?: React.ReactNode;
  /** How many prior messages the history handed to onSend may contain. */
  historyLimit?: number;
  /** Cmd/Ctrl + this key toggles the panel. Pass null to disable. */
  shortcut?: string | null;
  /**
   * Demo mode: chat input matching a showcase command ("help", "list",
   * "callout", …) is answered locally with a live rendering of that element
   * instead of going to onSend. Anything else still goes to the transport.
   */
  $showcase?: boolean;
}

const DEFAULT_GREETING = "Hey there, how can I assist you?";
const SHOWCASE_GREETING =
  'Hey there! Type "help" to see everything I can render.';
const GREETING_ID = "chat-greeting";
// Cap on each history entry so one giant pasted message cannot blow up the
// request the app builds from it.
const HISTORY_ENTRY_MAX_CHARS = 4000;

function ChatProvider({
  children,
  onSend,
  greeting,
  historyLimit = 20,
  shortcut = "i",
  $showcase = false,
}: ChatProviderProps) {
  // In showcase mode the default greeting points at the command list; an
  // explicit greeting prop (including null) always wins.
  const resolvedGreeting =
    greeting !== undefined
      ? greeting
      : $showcase
        ? SHOWCASE_GREETING
        : DEFAULT_GREETING;

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Seeded with the greeting from the start so inline panels (which are always
  // visible and never call open()) greet too, not just the drawer.
  const [messages, setMessages] = useState<ChatMessageData[]>(() =>
    resolvedGreeting === null
      ? []
      : [
          {
            id: GREETING_ID,
            role: "assistant",
            content: resolvedGreeting,
            text:
              typeof resolvedGreeting === "string"
                ? resolvedGreeting
                : undefined,
          },
        ],
  );

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const idCounter = useRef(0);

  // Effect callbacks and timeouts read these refs instead of state so they
  // always see the latest values without re-subscribing.
  const isOpenRef = useRef(isOpen);
  const loadingRef = useRef(loading);
  const messagesRef = useRef(messages);
  const onSendRef = useRef(onSend);
  const greetingRef = useRef(resolvedGreeting);

  const inputValueRef = useRef(input);

  useEffect(() => {
    isOpenRef.current = isOpen;
    loadingRef.current = loading;
    messagesRef.current = messages;
    inputValueRef.current = input;
    onSendRef.current = onSend;
    greetingRef.current = resolvedGreeting;
  });

  // Focus bookkeeping: the element that opened the panel gets focus back when
  // the panel closes, via a timeout so the close can finish hiding first.
  const openerRef = useRef<HTMLElement | null>(null);
  const pendingRestoreFocusRef = useRef<HTMLElement | null>(null);
  const focusTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restoreFocusTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const nextId = useCallback(() => `chat-msg-${idCounter.current++}`, []);

  const greetingMessages = useCallback((): ChatMessageData[] => {
    const currentGreeting = greetingRef.current;
    if (currentGreeting === null || currentGreeting === undefined) return [];
    return [
      {
        id: GREETING_ID,
        role: "assistant",
        content: currentGreeting,
        text: typeof currentGreeting === "string" ? currentGreeting : undefined,
      },
    ];
  }, []);

  const showPanel = useCallback((returnFocusTo?: HTMLElement | null) => {
    const pendingOpener = pendingRestoreFocusRef.current;
    if (restoreFocusTimeoutRef.current) {
      clearTimeout(restoreFocusTimeoutRef.current);
      restoreFocusTimeoutRef.current = null;
    }
    pendingRestoreFocusRef.current = null;
    if (!isOpenRef.current) {
      // Capture where focus should return: an explicit target first, then the
      // opener of a close that has not restored focus yet (reopened before its
      // timeout fired), then whatever is focused now.
      const activeElement = document.activeElement;
      openerRef.current =
        returnFocusTo?.isConnected === true
          ? returnFocusTo
          : pendingOpener?.isConnected === true
            ? pendingOpener
            : activeElement instanceof HTMLElement &&
                activeElement !== document.body
              ? activeElement
              : null;
    }
    isOpenRef.current = true;
    // Committed synchronously so the composer can be focused while the
    // triggering tap/click gesture is still active: iOS Safari ignores
    // focus() (and never opens the keyboard) once the gesture has passed,
    // which is exactly where a deferred focus would run. Flushing also
    // unmounts anything the same gesture closed (the search modal), so its
    // focus containment cannot steal this focus back.
    flushSync(() => setIsOpen(true));
    inputRef.current?.focus();
    if (focusTimeoutRef.current) clearTimeout(focusTimeoutRef.current);
    // Deferred fallback for composers that mount asynchronously (lazy-loaded
    // panels) and are not in the DOM yet during the flush above.
    focusTimeoutRef.current = setTimeout(() => {
      focusTimeoutRef.current = null;
      inputRef.current?.focus();
    }, 0);
  }, []);

  const open = useCallback(
    (returnFocusTo?: HTMLElement | null) => {
      showPanel(returnFocusTo);
      setMessages((prev) => (prev.length === 0 ? greetingMessages() : prev));
    },
    [showPanel, greetingMessages],
  );

  const close = useCallback((restoreFocus = true) => {
    const pendingOpener = pendingRestoreFocusRef.current;
    if (!restoreFocus && restoreFocusTimeoutRef.current) {
      clearTimeout(restoreFocusTimeoutRef.current);
      restoreFocusTimeoutRef.current = null;
      pendingRestoreFocusRef.current = null;
    }
    if (!isOpenRef.current) return pendingOpener;
    if (focusTimeoutRef.current) {
      clearTimeout(focusTimeoutRef.current);
      focusTimeoutRef.current = null;
    }
    // Blur anything inside the panel before it goes inert, so focus is not
    // trapped on a hidden element.
    const activeElement = document.activeElement;
    if (
      activeElement instanceof HTMLElement &&
      activeElement.closest("[data-chat-panel]")
    ) {
      activeElement.blur();
    }
    const opener = openerRef.current;
    openerRef.current = null;
    isOpenRef.current = false;
    setIsOpen(false);
    if (restoreFocusTimeoutRef.current) {
      clearTimeout(restoreFocusTimeoutRef.current);
    }
    if (restoreFocus) {
      pendingRestoreFocusRef.current = opener;
      restoreFocusTimeoutRef.current = setTimeout(() => {
        const focusTarget = pendingRestoreFocusRef.current;
        restoreFocusTimeoutRef.current = null;
        pendingRestoreFocusRef.current = null;
        if (focusTarget?.isConnected) focusTarget.focus();
      }, 0);
    } else {
      pendingRestoreFocusRef.current = null;
    }
    return opener;
  }, []);

  const toggle = useCallback(() => {
    if (isOpenRef.current) {
      close();
    } else {
      open();
    }
  }, [close, open]);

  const runSend = useCallback(
    async (question: string, returnFocusTo?: HTMLElement | null) => {
      setInput("");
      showPanel(returnFocusTo);

      const base =
        messagesRef.current.length > 0
          ? messagesRef.current
          : greetingMessages();

      // Showcase commands are answered locally and instantly: the demo is
      // the reply, the transport never hears about it.
      if ($showcase) {
        const demo = resolveShowcaseCommand(question);
        if (demo) {
          const withDemo: ChatMessageData[] = [
            ...base,
            { id: nextId(), role: "user", content: question, text: question },
            { id: nextId(), role: "assistant", content: demo },
          ];
          messagesRef.current = withDemo;
          setMessages(withDemo);
          setError(null);
          return;
        }
      }

      // Without a transport, non-command input gets a pointer instead of a
      // silent drop: at the command list in showcase mode, at the missing
      // handler otherwise.
      const handler = onSendRef.current;
      if (!handler) {
        const hint = $showcase
          ? 'I can only render showcase demos here. Type "help" to see the available commands.'
          : "No transport is wired up. Pass onSend to ChatProvider to get answers.";
        const withHint: ChatMessageData[] = [
          ...base,
          { id: nextId(), role: "user", content: question, text: question },
          { id: nextId(), role: "assistant", content: hint, text: hint },
        ];
        messagesRef.current = withHint;
        setMessages(withHint);
        setError(null);
        return;
      }

      setLoading(true);
      loadingRef.current = true;
      setError(null);
      const history: ChatHistoryEntry[] = base
        .filter((message) => (message.text ?? "").trim() !== "")
        .slice(-historyLimit)
        .map((message) => ({
          role: message.role,
          content: (message.text as string).slice(0, HISTORY_ENTRY_MAX_CHARS),
        }));

      const withQuestion: ChatMessageData[] = [
        ...base,
        { id: nextId(), role: "user", content: question, text: question },
      ];
      messagesRef.current = withQuestion;
      setMessages(withQuestion);

      const controller = new AbortController();
      abortRef.current = controller;

      // Assigned outside the state updater (updaters must stay pure and can
      // be replayed); the first setAssistant call creates the message, later
      // ones patch it in place.
      let assistantId: string | null = null;
      const setAssistant: ChatSendContext["setAssistant"] = (
        content,
        options,
      ) => {
        if (assistantId === null) assistantId = nextId();
        const patch: ChatMessageData = {
          id: assistantId,
          role: "assistant",
          content,
          text:
            options?.text ??
            (typeof content === "string" ? content : undefined),
          sources: options?.sources,
        };
        setMessages((prev) => {
          const index = prev.findIndex((message) => message.id === assistantId);
          if (index === -1) return [...prev, patch];
          const next = [...prev];
          next[index] = patch;
          return next;
        });
      };

      try {
        await handler(question, {
          signal: controller.signal,
          history,
          setAssistant,
        });
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (abortRef.current === controller) abortRef.current = null;
        setLoading(false);
        loadingRef.current = false;
      }
    },
    [showPanel, greetingMessages, historyLimit, nextId, $showcase],
  );

  const send = useCallback(
    (text?: string) => {
      const question = (text ?? inputValueRef.current).trim();
      if (question === "" || loadingRef.current) return;
      void runSend(question);
    },
    [runSend],
  );

  // Bridge for launchers and search modals: hand a question straight to the
  // assistant. While a reply is streaming we cannot submit, so the panel opens
  // with the question pre-filled instead, ready to send when it finishes.
  const ask = useCallback(
    (question: string, returnFocusTo?: HTMLElement | null) => {
      const trimmed = question.trim();
      if (trimmed === "") return;
      if (loadingRef.current) {
        showPanel(returnFocusTo);
        setInput(trimmed);
      } else {
        void runSend(trimmed, returnFocusTo);
      }
    },
    [showPanel, runSend],
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setLoading(false);
    loadingRef.current = false;
    setError(null);
    setMessages(greetingMessages());
  }, [greetingMessages]);

  // Global Cmd/Ctrl+<shortcut> toggles the panel.
  useEffect(() => {
    if (!shortcut) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === shortcut
      ) {
        event.preventDefault();
        toggle();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcut, toggle]);

  useEffect(() => {
    return () => {
      if (focusTimeoutRef.current) clearTimeout(focusTimeoutRef.current);
      if (restoreFocusTimeoutRef.current) {
        clearTimeout(restoreFocusTimeoutRef.current);
      }
      abortRef.current?.abort();
    };
  }, []);

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
        messages,
        input,
        setInput,
        loading,
        error,
        send,
        ask,
        reset,
        inputRef,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider, useChat };
