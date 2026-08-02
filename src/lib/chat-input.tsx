"use client";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

import { Button } from "./button";
import { ChatContext } from "./chat-provider";
import { Icon } from "./icon";
import { Theme, alpha, formElementHeightStyles } from "./utils";

export interface ChatInputProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange" | "onSubmit"
> {
  /** Controlled value. Defaults to the provider's input state. */
  value?: string;
  onValueChange?: (value: string) => void;
  /** Submit handler. Defaults to the provider's send(). */
  onSend?: (value: string) => void;
  /** Overrides the provider's loading state. */
  $loading?: boolean;
  /** The animated rainbow border + sparkle treatment. Off by default. */
  $glow?: boolean;
  /** Overrides the glow palette. */
  $glowColors?: string[];
  /** Max height in px the textarea may grow to before it scrolls. */
  $maxRows?: number;
}

const GLOW_COLORS = [
  "#cc5555",
  "#d9a745",
  "#3ab0cc",
  "#cc7fc2",
  "#4380cc",
  "#4c1fa3",
];

const SPARKLE_COLORS = [
  "#ff6b6b",
  "#feca57",
  "#48dbfb",
  "#ff9ff3",
  "#54a0ff",
  "#5f27cd",
];

// Deterministic sparkle positions to avoid a hydration mismatch.
const SPARKLE_POSITIONS = [
  { left: 8, top: 35 },
  { left: 17, top: 55 },
  { left: 26, top: 28 },
  { left: 35, top: 68 },
  { left: 44, top: 42 },
  { left: 53, top: 75 },
  { left: 62, top: 32 },
  { left: 71, top: 58 },
  { left: 80, top: 45 },
  { left: 89, top: 65 },
];

const MAX_TEXTAREA_HEIGHT = 160;

// Registered globally: @property cannot live inside a styled block (invalid
// nesting, the rule is dropped), and without registration the conic-gradient
// angle cannot interpolate, so the border would not actually rotate.
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

const sparkleFloat = keyframes`
  0%, 100% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  50% {
    opacity: 0.9;
    transform: translateY(-20px) scale(1);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const conicStops = (colors: string[]) => [...colors, colors[0]].join(", ");

const StyledChatForm = styled.form<{ theme: Theme }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.light};
  padding: 20px;
  width: 100%;
  flex-shrink: 0;
  border-top: solid 1px ${({ theme }) => theme.colors.grayLight};

  & .chat-send-loading {
    animation: ${spin} 1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

const StyledInputWrapper = styled.div<{
  theme: Theme;
  $glow?: boolean;
  $glowColors?: string[];
  $isActive: boolean;
}>`
  position: relative;
  flex: 1;
  min-width: 0;

  ${({ $glow, $glowColors = GLOW_COLORS, theme }) =>
    $glow &&
    css`
      /* The halo (::after, z -1) and the sparkle field (z -2) sit on negative
         z-index. Without a stacking context here they would paint behind the
         composer form's background and never show; the doccupine original got
         one for free from its position: fixed form. */
      isolation: isolate;

      /* The rainbow border layer. It sits exactly under the textarea (whose
         background is clipped to the padding box), so it only shows through
         the 2px border strip once a state turns the border transparent -
         the rainbow plays the role the primary color has on the regular
         Cherry input. */
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: ${theme.spacing.radius.xs};
        background: conic-gradient(
          from var(--cherry-gradient-angle),
          ${conicStops($glowColors)}
        );
        opacity: 0;
        transition: all 0.3s ease;
        animation: ${rotateGradient} 3s linear infinite;
        z-index: 0;
      }

      /* The focus ring: the exact geometry of the Cherry input's
         primaryLight box-shadow ring - a crisp 4px band outside the border,
         tightening to 2px on :active - drawn with the softened rainbow.
         The textarea and the border layer cover everything inside, so only
         the band shows. */
      &::after {
        content: "";
        position: absolute;
        /* Collapsed at the input's edge at rest so the ring grows from the
           inside out, like the Cherry ring's box-shadow spread (0 -> 4px). */
        inset: 0;
        border-radius: ${theme.spacing.radius.xs};
        background: conic-gradient(
          from var(--cherry-gradient-angle),
          ${conicStops($glowColors.map((color) => alpha(color, 40)))}
        );
        opacity: 0;
        transition: all 0.3s ease;
        animation: ${rotateGradient} 3s linear infinite;
        z-index: -1;
        pointer-events: none;
      }

      /* Same state map as the Cherry input: border accent on hover and
         focus, ring growing out to 4px on focus, held at 2px while
         pressed. */
      &:hover::before,
      &:focus-within::before {
        opacity: 1;
      }

      &:focus-within::after {
        opacity: 1;
        inset: -4px;
        border-radius: calc(${theme.spacing.radius.xs} + 4px);
      }

      &:active::after {
        inset: -2px;
        border-radius: calc(${theme.spacing.radius.xs} + 2px);
      }

      @media (prefers-reduced-motion: reduce) {
        &::before,
        &::after {
          animation: none;
        }
      }
    `}
`;

/* The radiating background glow from the original: a rotating, pulsing,
   blurred rainbow behind the whole composer stack. The outer div only gates
   visibility - the animation lives on the inner layer because the pulse
   animates opacity, and a running animation would override the opacity: 0
   that hides it at rest. */
const StyledRadiantGlow = styled.div<{
  $glowColors?: string[];
  $isActive: boolean;
}>`
  position: absolute;
  inset: -10px;
  border-radius: 20px;
  pointer-events: none;
  z-index: -2;
  /* Always radiating, softly, even at rest; hover/focus turn it up. */
  opacity: 0.6;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: conic-gradient(
      from var(--cherry-gradient-angle),
      ${({ $glowColors = GLOW_COLORS }) =>
        conicStops($glowColors.map((color) => alpha(color, 40)))}
    );
    animation:
      ${rotateGradient} 3s linear infinite,
      ${pulseGlow} 2s ease-in-out infinite;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
    `}

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

const StyledSparkleContainer = styled.div<{ $isActive: boolean }>`
  position: absolute;
  inset: -30px;
  pointer-events: none;
  overflow: hidden;
  border-radius: 30px;
  z-index: -3;
  opacity: 0;
  transition: all 0.3s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
    `}

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const StyledSparkle = styled.div<{
  $color: string;
  $left: number;
  $top: number;
  $delay: number;
}>`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  box-shadow: 0 0 6px ${({ $color }) => $color};
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  animation: ${sparkleFloat} 2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const StyledTextarea = styled.textarea<{ theme: Theme; $glow?: boolean }>`
  position: relative;
  z-index: 1;
  display: block;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  font-family: inherit;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.light};
  outline: none;
  max-height: ${MAX_TEXTAREA_HEIGHT}px;
  overflow-y: auto;
  /* The Cherry input base, shared by both variants. The transition is scoped
     (not "all"): inside the drawer the panel animates visibility, and a
     transition on "all" would catch the inherited visibility flip and leave
     the textarea unfocusable for the frame the provider hands it focus. */
  border: solid 2px ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  /* 24px line + 22px padding + 4px borders = 50px at one row, the same
     height tier formElementHeightStyles gives Input and Select. */
  padding: 11px 15px;
  font-size: ${({ theme }) => theme.fontSizes.input.lg};
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.grayLight};
    border-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ $glow, theme }) =>
    $glow
      ? // Same states as the regular Cherry input, with the rainbow standing
        // in for the primary color: on hover and focus the border goes
        // transparent so the wrapper's rotating gradient shows through the
        // 2px strip (the background is clipped to the padding box), and the
        // wrapper's halo plays the focus ring.
        css`
          background-clip: padding-box;

          &:hover:not([disabled]),
          &:focus:not([disabled]) {
            border-color: transparent;
          }
        `
      : // The regular composer: the Cherry input's primary accents.
        css`
          box-shadow: 0 0 0 0px ${theme.colors.primaryLight};

          &:hover:not([disabled]) {
            border-color: ${theme.colors.primary};
          }

          &:focus:not([disabled]) {
            box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
            border-color: ${theme.colors.primary};
          }

          &:active:not([disabled]) {
            box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
          }
        `}
`;

const StyledSendButton = styled(Button)`
  flex-shrink: 0;
  ${formElementHeightStyles()};
  min-height: 0;
  position: relative;

  & svg {
    transition: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function LocalChatInput(
  {
    value,
    onValueChange,
    onSend,
    $loading,
    $glow = false,
    $glowColors,
    $maxRows,
    placeholder = "Ask AI Assistant...",
    "aria-label": ariaLabel = "Ask a question",
    ...props
  }: ChatInputProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  const chat = useContext(ChatContext);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Controlled props win; otherwise the provider drives the composer.
  const currentValue = value ?? chat.input;
  const setValue = onValueChange ?? chat.setInput;
  const loading = $loading ?? chat.loading;
  const hasContent = currentValue.trim().length > 0;
  const isActive = isFocused || isHovered;

  const maxHeight = $maxRows
    ? // Approximate: row height tracks the 1.5 line-height on a 16px font,
      // plus the vertical padding.
      $maxRows * 24 + 24
    : MAX_TEXTAREA_HEIGHT;

  // Auto-grow: collapse, then take the scroll height up to the cap.
  useIsomorphicLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    // scrollHeight is content + padding only; with border-box sizing the 2px
    // borders must be added back or the box comes out 4px short.
    const borders = textarea.offsetHeight - textarea.clientHeight;
    textarea.style.height = `${Math.min(
      textarea.scrollHeight + borders,
      maxHeight,
    )}px`;
  }, [currentValue, maxHeight]);

  const submit = () => {
    if (loading || !hasContent) return;
    if (onSend) {
      onSend(currentValue);
    } else {
      chat.send(currentValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    props.onKeyDown?.(event);
    if (event.defaultPrevented) return;
    // Enter submits; Shift+Enter inserts a newline. A composition session
    // (IME) owns Enter until it commits.
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      submit();
    }
  };

  const sparkles = SPARKLE_POSITIONS.map((position, index) => ({
    color: ($glowColors ?? SPARKLE_COLORS)[
      index % ($glowColors ?? SPARKLE_COLORS).length
    ],
    left: position.left,
    top: position.top,
    delay: index * 0.12,
  }));

  return (
    <StyledChatForm
      className="chat-composer"
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
      data-chat-composer
    >
      {$glow && <GradientAngleProperty />}
      <StyledInputWrapper
        $glow={$glow}
        $glowColors={$glowColors}
        $isActive={isActive}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {$glow && (
          <StyledRadiantGlow $glowColors={$glowColors} $isActive={isActive} />
        )}
        {$glow && (
          <StyledSparkleContainer $isActive={isActive}>
            {sparkles.map((sparkle, index) => (
              <StyledSparkle
                key={index}
                $color={sparkle.color}
                $left={sparkle.left}
                $top={sparkle.top}
                $delay={sparkle.delay}
              />
            ))}
          </StyledSparkleContainer>
        )}
        <StyledTextarea
          $glow={$glow}
          rows={1}
          autoComplete="off"
          placeholder={placeholder}
          aria-label={ariaLabel}
          {...props}
          value={currentValue}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={(event) => {
            setIsFocused(true);
            props.onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            props.onBlur?.(event);
          }}
          ref={(node: HTMLTextAreaElement | null) => {
            textareaRef.current = node;
            chat.inputRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              (
                ref as React.MutableRefObject<HTMLTextAreaElement | null>
              ).current = node;
            }
          }}
        />
      </StyledInputWrapper>
      <StyledSendButton
        type="submit"
        disabled={loading || !hasContent}
        aria-label={loading ? "Loading response" : "Submit question"}
      >
        {loading ? (
          <Icon name="LoaderCircle" className="chat-send-loading" />
        ) : (
          <Icon name="ArrowUp" />
        )}
      </StyledSendButton>
    </StyledChatForm>
  );
}

const ChatInput = forwardRef(LocalChatInput);

export { ChatInput };
