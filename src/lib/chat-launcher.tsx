"use client";
import React, { forwardRef, useContext } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

import { ChatContext } from "./chat-provider";
import { Icon } from "./icon";
import { Theme, alpha, interactiveStyles } from "./utils";

export interface ChatLauncherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** The animated rainbow halo. Off by default. */
  $glow?: boolean;
  /** Overrides the glow palette. */
  $glowColors?: string[];
}

const GLOW_COLORS = [
  "#cc5555",
  "#d9a745",
  "#3ab0cc",
  "#cc7fc2",
  "#4380cc",
  "#4c1fa3",
];

// Same registration as ChatInput's: @property cannot be nested inside a
// styled block, and duplicating the at-rule globally is harmless.
const GradientAngleProperty = createGlobalStyle`
  @property --cherry-gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
`;

const rotateGradient = keyframes`
  0% {
    --cherry-gradient-angle: 0deg;
  }
  100% {
    --cherry-gradient-angle: 360deg;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.5;
    filter: blur(16px);
  }
  50% {
    opacity: 1;
    filter: blur(22px);
  }
`;

const conicStops = (colors: string[]) => [...colors, colors[0]].join(", ");

const StyledChatLauncher = styled.button<{
  theme: Theme;
  $glow?: boolean;
  $glowColors?: string[];
  $isActive: boolean;
}>`
  ${interactiveStyles};
  appearance: none;
  /* Focus is indicated by interactiveStyles' ring (or the rainbow ring in
     glow mode); without this the UA's default outline draws on top of it. */
  outline: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.light};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) =>
    theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  padding: 0;
  font-size: 12px;
  font-family: inherit;
  font-weight: 600;

  & .chat-launcher-inner {
    padding: 6px 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.spacing.radius.xs};
  }

  & svg {
    width: 16px;
    height: 16px;
    color: inherit;
  }

  ${({ $glow, $glowColors = GLOW_COLORS, $isActive, theme }) =>
    $glow &&
    css`
      position: relative;
      isolation: isolate;

      /* The rainbow accent bands hugging the outside of the button's own
         border, which stays solid 1px grayLight in every state. Three
         FIXED-geometry layers - 1px (hover, ::before), 2px (active,
         ::after), 4px (keyboard focus, .chat-launcher-ring) - that only
         cross-fade opacity. Never animate their inset/border-radius: geometry
         changes force the rotating gradient to repaint at a new size every
         frame and the band visibly shakes; opacity fades composite smoothly,
         which is exactly why the regular button's states feel smooth. All
         three share the same gradient and angle, so overlapping layers
         render identical pixels and fades read as the band growing. */
      &::before,
      &::after,
      & .chat-launcher-ring {
        content: "";
        position: absolute;
        background: conic-gradient(
          from var(--cherry-gradient-angle),
          ${conicStops($glowColors)}
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: ${rotateGradient} 3s linear infinite;
        z-index: -1;
        pointer-events: none;
      }

      &::before {
        inset: -1px;
        border-radius: calc(${theme.spacing.radius.xs} + 1px);
      }

      &::after {
        inset: -2px;
        border-radius: calc(${theme.spacing.radius.xs} + 2px);
      }

      & .chat-launcher-ring {
        inset: -4px;
        border-radius: calc(${theme.spacing.radius.xs} + 4px);
      }

      /* The radiating background glow: always softly on, stronger with
         interaction or while the panel is open. The animation lives on the
         inner layer because the pulse animates opacity, and a running
         animation would override the gate opacity that dims it. */
      & .chat-launcher-glow {
        position: absolute;
        inset: -8px;
        border-radius: 14px;
        pointer-events: none;
        z-index: -3;
        opacity: 0.6;
        transition: all 0.3s ease;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: conic-gradient(
            from var(--cherry-gradient-angle),
            ${conicStops($glowColors.map((color) => alpha(color, 40)))}
          );
          animation:
            ${rotateGradient} 3s linear infinite,
            ${pulseGlow} 2s ease-in-out infinite;
        }
      }

      /* State map, mirroring the Cherry ring scale in rainbow: 1px band on
         hover, 4px band on focus (any focus, like the regular button's
         :focus ring), 2px band while pressed. The button's own border stays
         solid 1px grayLight throughout. */
      &:hover,
      &:focus,
      &:active {
        border-color: ${theme.colors.grayLight};
        box-shadow: none;
      }

      /* The 1px base band underlies every interactive state so fades of the
         wider layers always read as growth from it. */
      &:hover::before,
      &:focus::before,
      &:active::before {
        opacity: 1;
      }

      &:active::after {
        opacity: 1;
      }

      &:focus .chat-launcher-ring {
        opacity: 1;
      }

      &:hover .chat-launcher-glow,
      &:focus .chat-launcher-glow,
      &:active .chat-launcher-glow {
        opacity: 1;
      }

      ${
        $isActive &&
        css`
          &::before,
          & .chat-launcher-glow {
            opacity: 1;
          }
        `
      }

      @media (prefers-reduced-motion: reduce) {
        &::before,
        &::after,
        & .chat-launcher-ring,
        & .chat-launcher-glow::before {
          animation: none;
        }
      }
    `}
`;

function LocalChatLauncher(
  {
    children,
    $glow = false,
    $glowColors,
    onClick,
    "aria-label": ariaLabel,
    ...props
  }: ChatLauncherProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { toggle, isOpen } = useContext(ChatContext);

  return (
    <>
      {$glow && <GradientAngleProperty />}
      <StyledChatLauncher
        type="button"
        $glow={$glow}
        $glowColors={$glowColors}
        $isActive={isOpen}
        aria-label={ariaLabel ?? "Ask AI Assistant"}
        aria-expanded={isOpen}
        onClick={onClick ?? toggle}
        {...props}
        ref={ref}
      >
        {$glow && <span className="chat-launcher-glow" aria-hidden="true" />}
        {$glow && <span className="chat-launcher-ring" aria-hidden="true" />}
        <span className="chat-launcher-inner">
          {children ?? (
            <>
              <Icon name="Sparkles" />
              Ask AI
            </>
          )}
        </span>
      </StyledChatLauncher>
    </>
  );
}

const ChatLauncher = forwardRef(LocalChatLauncher);

export { ChatLauncher };
