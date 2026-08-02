"use client";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { Theme, darkFilledTextRule, filledTextColor, mq } from "./utils";

export type ChatMessageRole = "user" | "assistant";

export interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  $role?: ChatMessageRole;
  /** Rendered beside the message, typically an <Avatar>. */
  $avatar?: React.ReactNode;
}

/**
 * The chat type scale: one step tighter than body text so a transcript stays
 * dense. Shared by the message bubbles and the typing indicator.
 */
export const chatTextStyles = (theme: Theme) => css`
  font-size: ${theme.fontSizes.text.xs};
  line-height: ${theme.lineHeights.text.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.small.lg};
    line-height: ${theme.lineHeights.small.lg};
  }
`;

const StyledChatMessage = styled.div<{
  theme: Theme;
  $role: ChatMessageRole;
}>`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  width: 100%;

  & .chat-message-avatar {
    flex-shrink: 0;
  }

  & .chat-message-content {
    min-width: 0;
    ${({ theme }) => chatTextStyles(theme)};

    & p {
      ${({ theme }) => chatTextStyles(theme)};
    }

    & ul li,
    & ol li {
      ${({ theme }) => chatTextStyles(theme)};
    }
  }

  ${({ $role, theme }) =>
    $role === "user"
      ? css`
          /* The question pill: right-aligned, filled with the primary color,
             flat corner pointing at the composer. Long unbroken strings wrap
             instead of stretching the bubble. */
          flex-direction: row-reverse;

          & .chat-message-content {
            background: ${theme.colors.primary};
            color: ${filledTextColor(theme)};
            ${darkFilledTextRule(theme)};
            padding: 9px 14px;
            border-radius: 16px 16px 4px 16px;
            margin-left: auto;
            width: fit-content;
            max-width: min(560px, 88%);
            font-weight: 500;
            white-space: pre-wrap;
            overflow-wrap: anywhere;
          }
        `
      : css`
          /* The reply reads as a document, not a bubble: full width, on the
             panel background. Markdown styling comes from a <Prose> child. */
          & .chat-message-content {
            color: ${theme.colors.dark};
            width: 100%;
          }
        `}
`;

function LocalChatMessage(
  { children, $role = "assistant", $avatar, ...props }: ChatMessageProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <StyledChatMessage $role={$role} {...props} ref={ref}>
      {$avatar && <span className="chat-message-avatar">{$avatar}</span>}
      <div className="chat-message-content">{children}</div>
    </StyledChatMessage>
  );
}

const ChatMessage = forwardRef(LocalChatMessage);

export { ChatMessage };
