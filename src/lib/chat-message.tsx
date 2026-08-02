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

  /* Exactly one chat text line tall, with the avatar centered inside: the
     row's flex-end alignment pins this box to the message's last line, so a
     one-liner shows the avatar dead-centered on the text and a multi-line
     message centers it on the closing line, whatever the avatar's size. */
  & .chat-message-avatar {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: calc(
      ${({ theme }) => theme.fontSizes.text.xs} *
        ${({ theme }) => theme.lineHeights.text.xs}
    );

    ${mq("lg")} {
      height: calc(
        ${({ theme }) => theme.fontSizes.small.lg} *
          ${({ theme }) => theme.lineHeights.small.lg}
      );
    }
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

          /* The bubble's bottom padding sits between its last text line and
             the row's bottom edge; lift the avatar by the same amount so it
             still centers on the line, not on the padding. */
          & .chat-message-avatar {
            margin-bottom: 9px;
          }

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

          /* While a reply is taller than the scrollport, the avatar rides
             the visible bottom edge instead of hiding below with the last
             line, so the reply stays attributed while you read; once the end
             scrolls into view it settles onto the closing line as before.
             bottom: 0 on purpose: the offset resolves against the content
             edge, inside the list's 20px padding, so any positive value
             leaves the avatar hovering short of its resting spot at the
             end while the padding already provides the visual gap. */
          & .chat-message-avatar {
            position: sticky;
            bottom: 0;
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
