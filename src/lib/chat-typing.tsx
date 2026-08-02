"use client";
import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

import { chatTextStyles } from "./chat-message";
import { Theme } from "./utils";

export interface ChatTypingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The label before the dots. */
  children?: React.ReactNode;
}

const dotFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledChatTyping = styled.div<{ theme: Theme }>`
  width: 100%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => chatTextStyles(theme)};

  & .chat-typing-dot {
    animation: ${dotFade} 1s ease infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    & .chat-typing-dot {
      animation: none;
    }
  }
`;

function LocalChatTyping(
  { children = "Answering", ...props }: ChatTypingProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <StyledChatTyping role="status" {...props} ref={ref}>
      {children}
      {/* Decorative; the label alone is the announcement. */}
      <span aria-hidden="true">
        <span className="chat-typing-dot">.</span>
        <span className="chat-typing-dot">.</span>
        <span className="chat-typing-dot">.</span>
      </span>
    </StyledChatTyping>
  );
}

const ChatTyping = forwardRef(LocalChatTyping);

export { ChatTyping };
