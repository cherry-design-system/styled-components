"use client";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import styled from "styled-components";

import { ChatContext } from "./chat-provider";
import { Theme, thinScrollbar } from "./utils";

export interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * While true, auto-scroll jumps instead of smooth-scrolling so a streaming
   * reply does not fight the animation. Defaults to the provider's loading
   * state when inside a ChatProvider.
   */
  $streaming?: boolean;
}

const StyledChatMessageList = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  -webkit-overflow-scrolling: touch;
  ${thinScrollbar};
`;

// useLayoutEffect warns during SSR; the server branch never runs effects
// anyway, so fall back to useEffect there.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function LocalChatMessageList(
  { children, $streaming, ...props }: ChatMessageListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { isOpen, loading } = useContext(ChatContext);
  const streaming = $streaming ?? loading;

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const shouldAutoScrollRef = useRef(true);
  const streamingRef = useRef(streaming);

  useEffect(() => {
    streamingRef.current = streaming;
  }, [streaming]);

  // Re-arm auto-scroll each time the panel opens; cancel any queued scroll
  // when it closes so a hidden panel doesn't keep animating.
  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      shouldAutoScrollRef.current = true;
      return;
    }

    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }
  }, [isOpen]);

  // Follow new content, coalesced to one scroll per frame. Smooth for
  // discrete messages, instant while streaming or under reduced motion.
  useEffect(() => {
    if (!shouldAutoScrollRef.current) return;
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      const scrollContainer = scrollRef.current;
      if (!scrollContainer || !shouldAutoScrollRef.current) return;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: reduceMotion || streamingRef.current ? "auto" : "smooth",
      });
    });
  }, [children, isOpen, streaming]);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  // Scrolling up more than 15% of a viewport releases the follow; returning
  // near the bottom re-engages it.
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const distanceFromBottom =
      scrollContainer.scrollHeight -
      scrollContainer.scrollTop -
      scrollContainer.clientHeight;
    shouldAutoScrollRef.current =
      distanceFromBottom <= scrollContainer.clientHeight * 0.15;
    props.onScroll?.(event);
  };

  return (
    <StyledChatMessageList
      role="log"
      className="chat-body"
      {...props}
      onScroll={handleScroll}
      ref={(node: HTMLDivElement | null) => {
        scrollRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }}
    >
      {children}
    </StyledChatMessageList>
  );
}

const ChatMessageList = forwardRef(LocalChatMessageList);

export { ChatMessageList };
