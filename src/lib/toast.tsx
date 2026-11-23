"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { css, keyframes } from "styled-components";

import { X } from "lucide-react";
import { Button } from "./button";
import { Icon } from "./icon";
import { Spinner } from "./spinner";
import { Theme, filledTextColor, resetButton } from "./utils";

export type ToastColor =
  "default" | "info" | "success" | "error" | "warning" | "loading";
export type ToastAlign = "center" | "left" | "right";

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastConfig {
  /** Status color and icon tile. `default` has no tile. Defaults to `info`. */
  color?: ToastColor;
  /** Milliseconds before the toast hides itself; `0` (default) is sticky. */
  autoHide?: number;
  /** Optional second line under the title. */
  description?: React.ReactNode;
  /** Optional button; runs `onClick`, then dismisses the toast. */
  action?: ToastAction;
  /** Close badge and swipe to dismiss. Defaults to `true`. */
  dismissible?: boolean;
  /** Reuse an existing toast's id to replace that toast in place. */
  id?: number;
}

export interface ToastUpdate extends Omit<ToastConfig, "id"> {
  text?: React.ReactNode;
}

export interface ToastPromiseMessages<T> {
  loading: React.ReactNode;
  success: React.ReactNode | ((data: T) => React.ReactNode);
  error: React.ReactNode | ((error: unknown) => React.ReactNode);
}

export type ToastNotification = {
  id: number;
  text: React.ReactNode;
  color: ToastColor;
  autoHide: number;
  description?: React.ReactNode;
  action?: ToastAction;
  dismissible: boolean;
  exiting: boolean;
};

// Shared motion timing for the deck: placement, height and fades.
const DURATION_MS = 400;
const EASE = "cubic-bezier(0.21, 1.02, 0.73, 1)";
// The exiting toast is dropped from state once its fade has finished.
const EXIT_DURATION_MS = DURATION_MS;
// Settled promise toasts hide after this unless the caller sets autoHide.
const PROMISE_AUTO_HIDE_MS = 4000;
// Deck geometry: gap between fanned-out toasts, how far each back toast
// peeks out from under the one in front, and how much smaller it gets.
const GAP = 10;
const PEEK = 14;
const SCALE_STEP = 0.05;
// Swipe distance (px) or speed (px/ms) past which a drag dismisses.
const SWIPE_DISTANCE = 45;
const SWIPE_VELOCITY = 0.11;

function resolve<V>(
  value: React.ReactNode | ((input: V) => React.ReactNode),
  input: V,
) {
  return typeof value === "function" ? value(input) : value;
}

const ToastNotificationsContext = createContext<{
  notifications: ToastNotification[];
  addNotification: (text: React.ReactNode, config?: ToastConfig) => number;
  updateNotification: (id: number, update: ToastUpdate) => void;
  dismissNotification: (id: number) => void;
  removeNotification: (id: number) => void;
  promiseNotification: <T>(
    task: Promise<T> | (() => Promise<T>),
    messages: ToastPromiseMessages<T>,
    config?: ToastConfig,
  ) => Promise<T>;
}>({
  notifications: [],
  addNotification: () => -1,
  updateNotification: () => null,
  dismissNotification: () => null,
  removeNotification: () => null,
  promiseNotification: (task) => (typeof task === "function" ? task() : task),
});

function useToastNotifications() {
  return useContext(ToastNotificationsContext);
}

interface ToastNotificationsProviderProps {
  children: React.ReactNode;
}

function ToastNotificationsProvider({
  children,
}: ToastNotificationsProviderProps) {
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);
  const nextId = useRef(0);
  const exitTimers = useRef(new Map<number, number>());

  const clearExitTimer = useCallback((id: number) => {
    const timer = exitTimers.current.get(id);
    if (timer === undefined) return;
    window.clearTimeout(timer);
    exitTimers.current.delete(id);
  }, []);

  useEffect(() => {
    const timers = exitTimers.current;
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const addNotification = useCallback(
    (text: React.ReactNode, config: ToastConfig = {}) => {
      const id = config.id ?? nextId.current++;
      if (id >= nextId.current) nextId.current = id + 1;
      const color = config.color ?? "info";
      const toast: ToastNotification = {
        id,
        text,
        color,
        // A spinner never hides itself; it waits for an update or dismissal.
        autoHide: color === "loading" ? 0 : (config.autoHide ?? 0),
        description: config.description,
        action: config.action,
        dismissible: config.dismissible ?? true,
        exiting: false,
      };
      clearExitTimer(id);
      setNotifications((prev) => {
        const index = prev.findIndex((item) => item.id === id);
        if (index === -1) return [...prev, toast];
        const next = prev.slice();
        next[index] = toast;
        return next;
      });
      return id;
    },
    [clearExitTimer],
  );

  const updateNotification = useCallback(
    (id: number, { text, ...update }: ToastUpdate) => {
      setNotifications((prev) =>
        prev.map((item) => {
          if (item.id !== id || item.exiting) return item;
          const next = {
            ...item,
            ...update,
            text: text === undefined ? item.text : text,
          };
          if (next.color === "loading") next.autoHide = 0;
          return next;
        }),
      );
    },
    [],
  );

  const removeNotification = useCallback(
    (id: number) => {
      clearExitTimer(id);
      setNotifications((prev) => prev.filter((item) => item.id !== id));
    },
    [clearExitTimer],
  );

  // Animated removal: flag the toast as exiting so it fades out in place,
  // then drop it from state once the exit transition has finished.
  const dismissNotification = useCallback((id: number) => {
    if (exitTimers.current.has(id)) return;
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, exiting: true } : item)),
    );
    exitTimers.current.set(
      id,
      window.setTimeout(() => {
        exitTimers.current.delete(id);
        setNotifications((prev) => prev.filter((item) => item.id !== id));
      }, EXIT_DURATION_MS),
    );
  }, []);

  const promiseNotification = useCallback(
    <T,>(
      task: Promise<T> | (() => Promise<T>),
      messages: ToastPromiseMessages<T>,
      config: ToastConfig = {},
    ) => {
      const id = addNotification(messages.loading, {
        ...config,
        color: "loading",
      });
      const autoHide = config.autoHide ?? PROMISE_AUTO_HIDE_MS;
      const pending = typeof task === "function" ? task() : task;
      // Swap the same toast in place. A toast dismissed while loading stays
      // gone: updateNotification skips ids that are exiting or removed.
      pending
        .then((data) =>
          updateNotification(id, {
            text: resolve(messages.success, data),
            color: "success",
            autoHide,
          }),
        )
        // After .then, so a throwing success message still clears the spinner.
        .catch((error) =>
          updateNotification(id, {
            text: resolve(messages.error, error),
            color: "error",
            autoHide,
          }),
        );
      return pending;
    },
    [addNotification, updateNotification],
  );

  const value = useMemo(
    () => ({
      notifications,
      addNotification,
      updateNotification,
      dismissNotification,
      removeNotification,
      promiseNotification,
    }),
    [
      notifications,
      addNotification,
      updateNotification,
      dismissNotification,
      removeNotification,
      promiseNotification,
    ],
  );

  return (
    <ToastNotificationsContext.Provider value={value}>
      {children}
    </ToastNotificationsContext.Provider>
  );
}

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`;

export const StyledNotifications = styled.ol<{
  theme: Theme;
  $align?: ToastAlign;
  $bottom?: boolean;
  $empty?: boolean;
}>`
  position: fixed;
  z-index: 99999;
  margin: 0;
  padding: 0;
  list-style: none;
  width: min(380px, calc(100vw - 40px));
  /* The list is the hover target: its height (set inline) covers the deck,
     collapsed or fanned out, so the pointer crossing a gap keeps it open. */
  pointer-events: ${({ $empty }) => ($empty ? "none" : "auto")};

  ${({ $bottom }) =>
    $bottom
      ? css`
          bottom: 20px;
        `
      : css`
          top: 20px;
        `}

  ${({ $align }) =>
    $align === "left"
      ? css`
          left: 20px;
        `
      : $align === "right"
        ? css`
            right: 20px;
          `
        : css`
            left: 50%;
            transform: translateX(-50%);
          `}
`;

export const StyledNotificationItem = styled.li<{
  theme: Theme;
  $bottom?: boolean;
  $dragging?: boolean;
  $concealed?: boolean;
}>`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  touch-action: none;
  ${({ $bottom }) =>
    $bottom
      ? css`
          bottom: 0;
          transform-origin: center bottom;
        `
      : css`
          top: 0;
          transform-origin: center top;
        `}
  transition:
    transform ${DURATION_MS}ms ${EASE},
    opacity ${DURATION_MS}ms ${EASE},
    height ${DURATION_MS}ms ${EASE};

  ${({ $dragging }) =>
    $dragging &&
    css`
      transition:
        opacity ${DURATION_MS}ms ${EASE},
        height ${DURATION_MS}ms ${EASE};
      user-select: none;
    `}

  ${reducedMotion}

  & .card {
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    border-radius: calc(${({ theme }) => theme.spacing.radius.lg} + 10px);
    background: ${({ theme }) => theme.colors.light};
    border: solid 1px ${({ theme }) => theme.colors.grayLight};
    box-shadow: ${({ theme }) => theme.shadows.toast ?? theme.shadows.xs};
  }

  /* Natural-height content, measured to lay out the deck. Back toasts in a
     collapsed deck take the front toast's height and hide their content. */
  & .content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    transition: opacity 300ms ease;
    ${({ $concealed }) =>
      $concealed &&
      css`
        opacity: 0;
      `}
    ${reducedMotion}
  }

  & .text {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    min-height: 36px;
    overflow-wrap: anywhere;
  }

  & .text-plain {
    padding-left: 6px;
  }

  & .title {
    margin: 0;
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.fontSizes.small.lg};
    line-height: 1.4;
    font-weight: 600;
  }

  & .description {
    margin: 0;
    color: ${({ theme }) => theme.colors.grayDark};
    font-size: ${({ theme }) => theme.fontSizes.small.xs};
    line-height: 1.45;
    font-weight: 500;
  }
`;

const tileIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const tileBump = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

const glyphPop = keyframes`
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const strokeDraw = keyframes`
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const StyledTile = styled.span<{
  theme: Theme;
  $color: Exclude<ToastColor, "default">;
  $settled: boolean;
}>`
  position: relative;
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  transition: background-color 200ms ease;
  /* First arrival waits for the card to land; an in-place swap (a settled
     promise) bumps instead. */
  animation: ${({ $settled }) =>
    $settled
      ? css`
          ${tileBump} 400ms ease-out
        `
      : css`
          ${tileIn} 350ms cubic-bezier(0.2, 0.8, 0.2, 1) 240ms both
        `};

  ${({ theme, $color }) =>
    $color === "loading"
      ? css`
          background: ${theme.colors.grayLight};
          color: ${theme.colors.grayDark};
        `
      : css`
          background: ${theme.colors[$color]};
          color: ${filledTextColor(theme)};
        `}

  ${reducedMotion}

  & .glyph {
    display: grid;
    place-items: center;
    animation: ${glyphPop} 450ms cubic-bezier(0.34, 1.56, 0.64, 1)
      ${({ $settled }) => ($settled ? "60ms" : "320ms")} both;
    ${reducedMotion}
  }

  & .glyph svg {
    width: 18px;
    height: 18px;
    color: inherit;
  }

  & .stroke {
    stroke-dasharray: 1;
    animation: ${strokeDraw} 300ms ease-out
      ${({ $settled }) => ($settled ? "160ms" : "420ms")} both;
    ${reducedMotion}
  }

  & .stroke + .stroke {
    animation-delay: ${({ $settled }) => ($settled ? "240ms" : "500ms")};
  }
`;

const StyledActionButton = styled(Button)`
  flex-shrink: 0;
  height: 36px;
  padding: 0 16px;
`;

const StyledClose = styled.button<{
  theme: Theme;
  $align?: ToastAlign;
  $hidden?: boolean;
}>`
  ${resetButton};
  position: absolute;
  top: -6px;
  ${({ $align }) => ($align === "right" ? "right: -6px;" : "left: -6px;")}
  z-index: 1;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.grayDark};
  opacity: 0;
  transition:
    opacity 200ms ease,
    color 200ms ease,
    box-shadow 200ms ease;

  & svg {
    width: 12px;
    height: 12px;
    stroke-width: 3;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }

  &:focus-visible {
    opacity: 1;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  ${StyledNotificationItem}:hover & {
    opacity: 1;
  }

  /* No hover on touch screens: keep the badge visible there. */
  @media (hover: none) {
    opacity: 1;
  }

  ${({ $hidden }) =>
    $hidden &&
    css`
      visibility: hidden;
    `}

  ${reducedMotion}
`;

function ToastGlyph({ color }: { color: ToastColor }) {
  if (color === "loading") return <Spinner size={18} />;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {color === "success" && (
        <path className="stroke" pathLength={1} d="M5.5 12.5 10 17l8.5-9.5" />
      )}
      {color === "error" && (
        <>
          <path className="stroke" pathLength={1} d="M7 7l10 10" />
          <path className="stroke" pathLength={1} d="M17 7 7 17" />
        </>
      )}
      {color === "warning" && (
        <>
          <path className="stroke" pathLength={1} d="M12 5.5v8" />
          <circle
            cx="12"
            cy="18.25"
            r="1.6"
            fill="currentColor"
            stroke="none"
          />
        </>
      )}
      {color === "info" && (
        <>
          <circle cx="12" cy="5.75" r="1.6" fill="currentColor" stroke="none" />
          <path className="stroke" pathLength={1} d="M12 10.5v8" />
        </>
      )}
    </svg>
  );
}

function ToastTile({ color }: { color: Exclude<ToastColor, "default"> }) {
  // Only the first color arrives with the card; a later swap (a settled
  // promise) re-runs the glyph right away and bumps the tile instead.
  const [initialColor] = useState(color);

  return (
    <StyledTile
      $color={color}
      $settled={color !== initialColor}
      aria-hidden="true"
    >
      <span className="glyph" key={color}>
        <ToastGlyph color={color} />
      </span>
    </StyledTile>
  );
}

export interface ToastNotificationsProps {
  $align?: ToastAlign;
  $bottom?: boolean;
  /** Keep every toast fanned out instead of collapsing them into a deck. */
  $expand?: boolean;
  /** How many toasts show at once; older ones wait behind. Defaults to 3. */
  $visibleToasts?: number;
}

type Placement = { index: number; offset: number };

function ToastNotifications({
  $align = "center",
  $bottom = false,
  $expand = false,
  $visibleToasts = 3,
}: ToastNotificationsProps) {
  const { notifications, dismissNotification } = useToastNotifications();
  const listRef = useRef<HTMLOListElement>(null);
  const [heights, setHeights] = useState<Record<number, number>>({});
  const [pointerInside, setPointerInside] = useState(false);
  const [focusInside, setFocusInside] = useState(false);
  const [touchOpen, setTouchOpen] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  // Where each toast last sat, so an exiting toast fades out in place while
  // the rest close the gap.
  const lastPlacement = useRef(new Map<number, Placement>());

  const interacting = pointerInside || focusInside || touchOpen;
  const expanded = $expand || interacting;
  const paused = interacting || pageHidden;

  const setHeight = useCallback((id: number, height: number) => {
    setHeights((prev) =>
      prev[id] === height ? prev : { ...prev, [id]: height },
    );
  }, []);

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // A tap opens the deck on touch screens; a tap anywhere else closes it.
  useEffect(() => {
    if (!touchOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!listRef.current?.contains(event.target as Node)) setTouchOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [touchOpen]);

  // Prune measurements of removed toasts, and drop interaction state when
  // focus went away with a removed toast (no blur fires for that) or the
  // deck emptied under the pointer.
  useEffect(() => {
    const ids = new Set(notifications.map((item) => item.id));
    setHeights((prev) => {
      const stale = Object.keys(prev).filter((id) => !ids.has(Number(id)));
      if (stale.length === 0) return prev;
      const next = { ...prev };
      stale.forEach((id) => delete next[Number(id)]);
      return next;
    });
    lastPlacement.current.forEach((_, id) => {
      if (!ids.has(id)) lastPlacement.current.delete(id);
    });
    if (!listRef.current?.contains(document.activeElement)) {
      setFocusInside(false);
    }
    if (notifications.length === 0) {
      setPointerInside(false);
      setTouchOpen(false);
    }
  }, [notifications]);

  // Newest first. Exiting toasts drop out of the layout so the others move.
  const live = notifications.filter((item) => !item.exiting).reverse();
  const placements = new Map<number, Placement>();
  let offset = 0;
  live.forEach((item, index) => {
    placements.set(item.id, { index, offset });
    offset += (heights[item.id] ?? 0) + GAP;
  });
  placements.forEach((placement, id) =>
    lastPlacement.current.set(id, placement),
  );

  const frontHeight = live.length > 0 ? (heights[live[0].id] ?? 0) : 0;
  const shown = live.slice(0, $visibleToasts);
  const stackHeight =
    shown.length === 0
      ? 0
      : expanded
        ? shown.reduce((sum, item) => sum + (heights[item.id] ?? 0), 0) +
          GAP * (shown.length - 1)
        : frontHeight + PEEK * (shown.length - 1);

  return (
    <StyledNotifications
      ref={listRef}
      $align={$align}
      $bottom={$bottom}
      $empty={notifications.length === 0}
      style={{ height: stackHeight }}
      aria-live="polite"
      aria-label="Notifications"
      onMouseEnter={() => setPointerInside(true)}
      onMouseLeave={() => setPointerInside(false)}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") setTouchOpen(true);
      }}
      onFocus={() => setFocusInside(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocusInside(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        const item = (event.target as HTMLElement).closest<HTMLElement>(
          "[data-toast-id]",
        );
        if (item) dismissNotification(Number(item.dataset.toastId));
      }}
    >
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          placement={
            placements.get(notification.id) ??
            lastPlacement.current.get(notification.id) ?? {
              index: 0,
              offset: 0,
            }
          }
          frontHeight={frontHeight}
          height={heights[notification.id]}
          expanded={expanded}
          paused={paused}
          visibleToasts={$visibleToasts}
          $align={$align}
          $bottom={$bottom}
          onHeight={setHeight}
        />
      ))}
    </StyledNotifications>
  );
}

interface NotificationItemProps {
  notification: ToastNotification;
  placement: Placement;
  frontHeight: number;
  height?: number;
  expanded: boolean;
  paused: boolean;
  visibleToasts: number;
  $align: ToastAlign;
  $bottom: boolean;
  onHeight: (id: number, height: number) => void;
}

function NotificationItem({
  notification,
  placement,
  frontHeight,
  height,
  expanded,
  paused,
  visibleToasts,
  $align,
  $bottom,
  onHeight,
}: NotificationItemProps) {
  const { dismissNotification } = useToastNotifications();
  const { id, text, color, autoHide, description, action, dismissible } =
    notification;
  const { exiting } = notification;
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [swipe, setSwipe] = useState({ x: 0, y: 0, dragging: false });
  const drag = useRef<{
    x: number;
    y: number;
    time: number;
    axis: "x" | "y" | null;
  } | null>(null);
  const remaining = useRef(autoHide);
  const remainingFor = useRef(autoHide);

  const dismiss = useCallback(
    () => dismissNotification(id),
    [dismissNotification, id],
  );

  // Mount off-screen, then flip to placed after the first frame has painted
  // (hence the double rAF) so the enter transition actually plays.
  useEffect(() => {
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setMounted(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, []);

  // Report the natural height (border included) for the deck layout.
  // offsetHeight, not getBoundingClientRect: the deck scales back toasts.
  useLayoutEffect(() => {
    const element = contentRef.current;
    if (!element) return;
    const measure = () => onHeight(id, element.offsetHeight + 2);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [id, onHeight]);

  // Auto-hide that pauses while the deck is in use or the tab is hidden, and
  // starts over when autoHide changes (a settled promise).
  useEffect(() => {
    if (remainingFor.current !== autoHide) {
      remainingFor.current = autoHide;
      remaining.current = autoHide;
    }
    if (!autoHide || exiting || paused) return;
    const start = Date.now();
    const timer = window.setTimeout(dismiss, Math.max(remaining.current, 0));
    return () => {
      window.clearTimeout(timer);
      remaining.current -= Date.now() - start;
    };
  }, [autoHide, exiting, paused, dismiss]);

  const onPointerDown = (event: React.PointerEvent<HTMLLIElement>) => {
    if (!dismissible || exiting || event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button, a, input")) return;
    drag.current = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now(),
      axis: null,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLLIElement>) => {
    const start = drag.current;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!start.axis) {
      if (Math.hypot(dx, dy) < 4) return;
      start.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    if (start.axis === "x") {
      setSwipe({ x: dx, y: 0, dragging: true });
    } else {
      // Vertical swipes only dismiss toward the anchored edge; dragging the
      // other way gives a little, then resists.
      const towardEdge = $bottom ? dy > 0 : dy < 0;
      setSwipe({ x: 0, y: towardEdge ? dy : dy * 0.15, dragging: true });
    }
  };

  const onPointerUp = () => {
    const start = drag.current;
    drag.current = null;
    if (!start) return;
    const distance =
      start.axis === "x"
        ? Math.abs(swipe.x)
        : $bottom
          ? Math.max(swipe.y, 0)
          : Math.max(-swipe.y, 0);
    const velocity = distance / Math.max(Date.now() - start.time, 1);
    if (
      start.axis &&
      (distance > SWIPE_DISTANCE || velocity > SWIPE_VELOCITY)
    ) {
      // Carry on in the swipe direction while it fades out.
      setSwipe((prev) => ({ x: prev.x * 2, y: prev.y * 2, dragging: false }));
      dismiss();
    } else {
      setSwipe({ x: 0, y: 0, dragging: false });
    }
  };

  const { index, offset } = placement;
  const direction = $bottom ? -1 : 1;
  const hiddenInDeck = index >= visibleToasts;
  const concealed = !expanded && index > 0;
  const restY = direction * (expanded ? offset : index * PEEK);
  const restScale = expanded ? 1 : Math.max(1 - index * SCALE_STEP, 0);

  let transform: string;
  let opacity = hiddenInDeck ? 0 : 1;
  if (!mounted) {
    transform = `translateY(${$bottom ? "calc(100% + 20px)" : "calc(-100% - 20px)"})`;
    opacity = 0;
  } else if (exiting) {
    const swiped = swipe.x !== 0 || swipe.y !== 0;
    const lift = swiped ? 0 : -direction * 12;
    transform = `translate(${swipe.x}px, ${restY + swipe.y + lift}px) scale(${restScale * 0.95})`;
    opacity = 0;
  } else {
    transform = `translate(${swipe.x}px, ${restY + swipe.y}px) scale(${restScale})`;
  }

  const ownHeight = concealed && frontHeight ? frontHeight : height;

  return (
    <StyledNotificationItem
      data-toast-id={id}
      $bottom={$bottom}
      $dragging={swipe.dragging}
      $concealed={concealed}
      style={{
        transform,
        opacity,
        height: ownHeight,
        zIndex: 1000 - index,
        pointerEvents: hiddenInDeck || exiting ? "none" : undefined,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        drag.current = null;
        setSwipe({ x: 0, y: 0, dragging: false });
      }}
    >
      <div className="card">
        <div className="content" ref={contentRef}>
          {color !== "default" && <ToastTile color={color} />}
          <div className={color === "default" ? "text text-plain" : "text"}>
            <p className="title">{text}</p>
            {description && <p className="description">{description}</p>}
          </div>
          {action && (
            <StyledActionButton
              type="button"
              $size="small"
              tabIndex={concealed ? -1 : undefined}
              onClick={() => {
                action.onClick();
                dismiss();
              }}
            >
              {action.label}
            </StyledActionButton>
          )}
        </div>
      </div>
      {dismissible && (
        <StyledClose
          type="button"
          aria-label="Dismiss notification"
          $align={$align}
          $hidden={concealed || hiddenInDeck}
          onClick={dismiss}
        >
          <Icon icon={X} aria-hidden="true" />
        </StyledClose>
      )}
    </StyledNotificationItem>
  );
}

export {
  ToastNotifications,
  ToastNotificationsContext,
  ToastNotificationsProvider,
  useToastNotifications,
};
