"use client";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { ChatContext } from "./chat-provider";
import { Icon, IconProps } from "./icon";
import { IconButton } from "./icon-button";
import { Theme, mq, useBelowBreakpoint, useLockBodyScroll } from "./utils";

export type ChatPanelVariant = "drawer" | "inline" | "fullscreen";

export interface ChatPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * drawer: fixed side panel, full-screen modal below the lg breakpoint.
   * inline: a normal flow-sized container, always visible, no dialog
   * semantics; the app controls its size and presence.
   * fullscreen: fills the viewport, always modal.
   */
  $variant?: ChatPanelVariant;
  $side?: "left" | "right";
  /** Drawer width from the lg breakpoint up. */
  $width?: number;
  /** Header title. Pass null to render no header text. */
  $title?: React.ReactNode;
  $titleIcon?: IconProps | null;
  /** Extra header controls (reset button, …), placed before the close button. */
  $actions?: React.ReactNode;
  $hideCloseButton?: boolean;
  "aria-label"?: string;
}

const DEFAULT_WIDTH = 420;

// Matches everything Tab can land on inside the panel; mirrors the modal
// focus-wrap in the source, extended with textarea/select for the composer.
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const StyledChatPanel = styled.div<{
  theme: Theme;
  $variant: ChatPanelVariant;
  $side: "left" | "right";
  $width: number;
  $isVisible: boolean;
}>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};

  & .chat-header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    min-height: 62px;
    padding: 12px 20px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.grayLight};
    flex-shrink: 0;
  }

  & .chat-header-title {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.colors.dark};

    & h3 {
      margin: 0;
      font-size: ${({ theme }) => theme.fontSizes.h6.xs};
      line-height: 1.2;
    }

    & svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }

  & .chat-header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  ${({ $variant, $side, $width, $isVisible, theme }) => {
    if ($variant === "inline") {
      return css`
        position: relative;
        width: 100%;
        height: 100%;
        border: solid 1px ${theme.colors.grayLight};
        border-radius: ${theme.spacing.radius.lg};
        overflow: hidden;
      `;
    }

    if ($variant === "fullscreen") {
      return css`
        position: fixed;
        inset: 0;
        z-index: 1000;
        /* visibility is animatable: snap visible on open so focus can land
           immediately, delay on close so the fade-out stays visible. */
        transition:
          opacity 0.3s ease,
          visibility 0s linear 0s;
        opacity: 1;
        visibility: visible;

        ${
          !$isVisible &&
          css`
            opacity: 0;
            visibility: hidden;
            transition-delay: 0s, 0.3s;
          `
        }

        @media (prefers-reduced-motion: reduce) {
          transition: none;
        }
      `;
    }

    return css`
      position: fixed;
      top: 0;
      bottom: 0;
      ${$side}: 0;
      width: 100%;
      height: 100dvh;
      z-index: 1000;
      /* Same asymmetric visibility transition as fullscreen, plus the slide:
         the panel must be focusable the instant it opens, but keep sliding
         out visibly while it closes. */
      transition:
        transform 0.3s ease,
        opacity 0.3s ease,
        visibility 0s linear 0s;
      transform: translateX(0);
      opacity: 1;
      visibility: visible;

      ${
        !$isVisible &&
        css`
          transform: translateX(${$side === "left" ? "-100%" : "100%"});
          opacity: 0;
          visibility: hidden;
          transition-delay: 0s, 0s, 0.3s;
        `
      }

      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }

      ${mq("lg")} {
        width: ${$width}px;
        border-${$side === "left" ? "right" : "left"}: solid 1px
          ${theme.colors.grayLight};
      }
    `;
  }}
`;

function LocalChatPanel(
  {
    children,
    $variant = "drawer",
    $side = "right",
    $width = DEFAULT_WIDTH,
    $title = "AI Assistant",
    $titleIcon = "Sparkles",
    $actions,
    $hideCloseButton,
    "aria-label": ariaLabel,
    ...props
  }: ChatPanelProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { isOpen, close, inputRef } = useContext(ChatContext);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const isBelowLg = useBelowBreakpoint("lg");

  const isOverlay = $variant !== "inline";
  const isVisible = !isOverlay || isOpen;
  // Below lg the drawer covers the page, so it must behave as a dialog;
  // fullscreen always does. The desktop drawer is a complementary panel that
  // leaves the page interactive.
  const isModal =
    ($variant === "fullscreen" && isOpen) ||
    ($variant === "drawer" && isOpen && isBelowLg);

  useLockBodyScroll(isModal);

  // While modal, everything around the panel goes inert and focus that
  // escapes is pulled back to the composer.
  useEffect(() => {
    if (!isModal || !panelRef.current) return;

    const panel = panelRef.current;
    const inertSiblings: Array<{ element: HTMLElement; wasInert: boolean }> =
      [];
    let current: HTMLElement = panel;

    while (current.parentElement) {
      const parent = current.parentElement;
      for (const sibling of Array.from(parent.children)) {
        if (sibling === current || !(sibling instanceof HTMLElement)) continue;
        inertSiblings.push({ element: sibling, wasInert: sibling.inert });
        sibling.inert = true;
      }
      if (parent === document.body) break;
      current = parent;
    }

    const containFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !panel.contains(event.target)) {
        inputRef.current?.focus();
      }
    };

    document.addEventListener("focusin", containFocus);

    return () => {
      document.removeEventListener("focusin", containFocus);
      for (const { element, wasInert } of inertSiblings) {
        element.inert = wasInert;
      }
    };
  }, [isModal, inputRef]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isModal) return;

    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close();
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
    ).filter(
      (element) =>
        element.offsetParent !== null &&
        element.getAttribute("aria-hidden") !== "true",
    );
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const showHeader =
    $title !== null || $actions || (isOverlay && !$hideCloseButton);

  return (
    <StyledChatPanel
      $variant={$variant}
      $side={$side}
      $width={$width}
      $isVisible={isVisible}
      inert={isOverlay ? !isOpen : undefined}
      aria-hidden={isOverlay ? !isOpen : undefined}
      role={isModal ? "dialog" : isOverlay ? "complementary" : undefined}
      aria-modal={isModal ? "true" : undefined}
      aria-label={
        ariaLabel ?? (typeof $title === "string" ? $title : undefined)
      }
      data-chat-panel
      onKeyDownCapture={handleKeyDown}
      {...props}
      ref={(node: HTMLDivElement | null) => {
        panelRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }}
    >
      {showHeader && (
        <div className="chat-header">
          <span className="chat-header-title">
            {$titleIcon && <Icon name={$titleIcon} />}
            {$title !== null && <h3>{$title}</h3>}
          </span>
          <span className="chat-header-actions">
            {$actions}
            {isOverlay && !$hideCloseButton && (
              <IconButton
                onClick={() => close()}
                aria-label="Close chat"
                title="Close chat"
              >
                <Icon name="X" />
              </IconButton>
            )}
          </span>
        </div>
      )}
      {children}
    </StyledChatPanel>
  );
}

const ChatPanel = forwardRef(LocalChatPanel);

export { ChatPanel };
