"use client";
import { css } from "styled-components";
import { Breakpoints, Theme, mq } from "./theme";

/**
 * Fades a color toward transparent. Native CSS rather than a JS color library
 * so the input can be any valid CSS color value, including a `var(--token)`
 * reference that only the browser can resolve.
 */
export const alpha = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`;

/** Darkens a color by mixing it toward black. See `alpha` for why it is CSS. */
export const shade = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${100 - percent}%, black)`;

/** Lightens a color by mixing it toward white. See `alpha` for why it is CSS. */
export const tint = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${100 - percent}%, white)`;

/** The solid primary fill: the theme's `primaryFill`, else `primary`. */
export const primaryFillColor = (theme: Theme) =>
  theme.colors.primaryFill ?? theme.colors.primary;

/**
 * The solid primary fill on hover: the theme's `primaryFillHover`, else a
 * shade of `primaryFill`, else `primaryDark`.
 */
export const primaryFillHoverColor = (theme: Theme) =>
  theme.colors.primaryFillHover ??
  (theme.colors.primaryFill
    ? shade(theme.colors.primaryFill, 10)
    : theme.colors.primaryDark);

// The mode tokens below are always set under Cherry's providers (filled per
// mode by createThemeVariables). The fallbacks only apply to a theme object
// used outside them, such as one passed straight to GlobalStyles(), and are
// the light-mode defaults.

/** Hover and emphasis text on a surface: the theme's `accent`. */
export const accentColor = (theme: Theme) =>
  theme.colors.accent ?? theme.colors.primaryDark;

/** The link color: the theme's `link`. */
export const linkColor = (theme: Theme) =>
  theme.colors.link ?? theme.colors.primary;

/** Which primary tint a surface takes: hovered, dragged over, or active. */
export type PrimaryTintKind = "hover" | "drop" | "active";

const primaryTintTokens = {
  hover: "primaryTintHover",
  drop: "primaryTintDrop",
  active: "primaryTintActive",
} as const;

/** The light-mode amounts of `primary`, in percent, outside the providers. */
const primaryTintAmounts: Record<PrimaryTintKind, number> = {
  hover: 4,
  drop: 5,
  active: 10,
};

/**
 * A primary tint behind a surface: the theme's `primaryTintHover`,
 * `primaryTintDrop` or `primaryTintActive`.
 */
export const primaryTintColor = (theme: Theme, kind: PrimaryTintKind) =>
  theme.colors[primaryTintTokens[kind]] ??
  alpha(theme.colors.primary, primaryTintAmounts[kind]);

/** Which fill a label sits on, so a theme's `onPrimary` can answer for its own. */
export type FilledTextFill = "primary" | "other";

/**
 * Text color for a label sitting on a brand-colored fill: the theme's
 * `onPrimary` on a primary fill when it sets one, else `onFilled`.
 */
export const filledTextColor = (
  theme: Theme,
  fill: FilledTextFill = "other",
) =>
  fill === "primary" && theme.colors.onPrimary
    ? theme.colors.onPrimary
    : (theme.colors.onFilled ?? theme.colors.light);

/**
 * Slim, theme-aware scrollbar for internal scroll areas (chat transcripts, code
 * blocks, tables) so the chunky native bar doesn't stand out, especially in
 * dark mode.
 */
export const thinScrollbar = css<{ theme: Theme }>`
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.grayLight} transparent;
`;

/**
 * Hover/focus/active affordance for interactive surfaces (cards, tiles,
 * links-as-blocks): a transparent 1px border that picks up the primary color
 * on hover, with a soft focus ring. Pair with resetButton for clickable
 * elements that aren't Buttons.
 */
export const interactiveStyles = css<{ theme: Theme }>`
  transition: all 0.3s ease;
  border: solid 1px transparent;
  box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primary};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }

  &:active {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

/**
 * The destructive-action sibling of interactiveStyles: identical
 * hover/focus/active border + ring behavior, but in the theme error red (the
 * same red the $error Button uses). Use for delete/remove affordances.
 */
export const errorInteractiveStyles = css<{ theme: Theme }>`
  transition: all 0.3s ease;
  border: solid 1px transparent;
  box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.error};

  &:hover {
    border-color: ${({ theme }) => theme.colors.error};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.error};
    box-shadow: 0 0 0 4px ${({ theme }) => alpha(theme.colors.error, 30)};
  }

  &:active {
    box-shadow: 0 0 0 2px ${({ theme }) => alpha(theme.colors.error, 30)};
  }
`;

export const resetButton = css`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`;

export const resetInput = css`
  cursor: text;
  min-width: 100px;
`;

export const fullWidthStyles = (fullWidth?: boolean) => {
  if (fullWidth) {
    return css`
      width: 100%;
    `;
  }
};

export const statusBorderStyles = (
  $error?: boolean,
  $success?: boolean,
  theme?: Theme,
) => {
  if ($error) {
    return css`
      border-color: ${theme?.colors.error};
    `;
  }

  if ($success) {
    return css`
      border-color: ${theme?.colors.success};
    `;
  }
};

export const formElementHeightStyles = (
  $size?: "default" | "big" | "small",
) => {
  if ($size === "big") {
    return css`
      height: 60px;
    `;
  }

  if ($size === "small") {
    return css`
      height: 40px;
    `;
  }

  return css`
    height: 50px;
  `;
};

export const generateGapStyles = (
  size: keyof Breakpoints<number>,
  gap: number | "none",
) => css`
  ${mq(size)} {
    gap: ${gap === "none" ? "0" : `${gap}px`};
  }
`;

export const generateColsStyles = (
  size: keyof Breakpoints<number>,
  cols: number,
) => css`
  ${mq(size)} {
    grid-template-columns: repeat(${cols || 3}, minmax(0, 1fr));
  }
`;

export const generateColSpanStyles = (
  size: keyof Breakpoints<number>,
  span: number,
) => css`
  ${mq(size)} {
    grid-column: span ${span};
  }
`;

export const generatePaddingStyles = (
  size: keyof Breakpoints<number>,
  padding: number | "none",
) => css`
  ${mq(size)} {
    padding: ${padding === "none" ? "0" : `${padding}px`};
  }
`;

export const generateJustifyContentStyles = (
  size: keyof Breakpoints<number>,
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly",
) => css`
  ${mq(size)} {
    justify-content: ${justifyContent && `${justifyContent}`};
  }
`;

export const generateAlignItemsStyles = (
  size: keyof Breakpoints<number>,
  alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline",
) => css`
  ${mq(size)} {
    align-items: ${alignItems && `${alignItems}`};
  }
`;

export const generateAlignContentStyles = (
  size: keyof Breakpoints<number>,
  alignContent?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly",
) => css`
  ${mq(size)} {
    align-content: ${alignContent && `${alignContent}`};
  }
`;

export const generateDirectionStyles = (
  size: keyof Breakpoints<number>,
  direction?: "row" | "column" | "row-reverse" | "column-reverse",
) => css`
  ${mq(size)} {
    flex-direction: ${direction && `${direction}`};
  }
`;
