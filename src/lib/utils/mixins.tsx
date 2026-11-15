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

/** The solid primary fill on hover: a shade of `primaryFill`, else `primaryDark`. */
export const primaryFillHoverColor = (theme: Theme) =>
  theme.colors.primaryFill
    ? shade(theme.colors.primaryFill, 10)
    : theme.colors.primaryDark;

/**
 * Hover and emphasis text on a surface: the theme's `accent` when it sets
 * one, else the end of the primary ramp that contrasts with the mode,
 * `primaryDark` in light mode and `primaryLight` in dark mode.
 */
export const accentColor = (theme: Theme) =>
  theme.colors.accent ??
  (theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark);

/**
 * The link color: the theme's `link` when it sets one, else `primary` in
 * light mode and `dark` in dark mode.
 */
export const linkColor = (theme: Theme) =>
  theme.colors.link ??
  (theme.isDark ? theme.colors.dark : theme.colors.primary);

/** Which primary tint a surface takes: hovered, dragged over, or active. */
export type PrimaryTintKind = "hover" | "drop" | "active";

const primaryTintTokens = {
  hover: "primaryTintHover",
  drop: "primaryTintDrop",
  active: "primaryTintActive",
} as const;

/** The fallback amounts of `primary`, in percent: [light mode, dark mode]. */
const primaryTintAmounts: Record<PrimaryTintKind, [number, number]> = {
  hover: [4, 10],
  drop: [5, 12],
  active: [10, 18],
};

/**
 * A primary tint behind a surface: the theme's `primaryTintHover`,
 * `primaryTintDrop` or `primaryTintActive` when it sets one, else `primary`
 * faded to the mode's amount.
 */
export const primaryTintColor = (theme: Theme, kind: PrimaryTintKind) => {
  const [light, dark] = primaryTintAmounts[kind];
  return (
    theme.colors[primaryTintTokens[kind]] ??
    alpha(theme.colors.primary, theme.isDark ? dark : light)
  );
};

/**
 * The dark-mode tint restated as a rule scoped to a `dark` class on <html>,
 * for apps that resolve the mode in CSS before hydration can swap the theme
 * object. Empty when the theme sets the token: a token already follows the
 * mode, and the rule would override it inside a light-mode island.
 */
export const darkPrimaryTintRule = (theme: Theme, kind: PrimaryTintKind) =>
  theme.colors[primaryTintTokens[kind]]
    ? ""
    : `:root.dark & { background: ${alpha(
        theme.colors.primary,
        primaryTintAmounts[kind][1],
      )}; }`;

/** Which fill a label sits on, so a theme's `onPrimary` can answer for its own. */
export type FilledTextFill = "primary" | "other";

/**
 * Text color for a label sitting on a brand-colored fill: the theme's
 * `onPrimary` on a primary fill when it sets one, else the theme's
 * `onFilled`, else the palette's contrasting end, `light` in light mode and
 * `dark` in dark mode.
 */
export const filledTextColor = (
  theme: Theme,
  fill: FilledTextFill = "other",
) =>
  fill === "primary" && theme.colors.onPrimary
    ? theme.colors.onPrimary
    : (theme.colors.onFilled ??
      (theme.isDark ? theme.colors.dark : theme.colors.light));

/**
 * The same choice restated as a rule scoped to a `dark` class on <html>, which
 * is what apps resolving the mode in CSS key off before hydration can swap the
 * theme object. Additive: with an already-dark theme object both paths resolve
 * to the same color. A dark theme object's `onPrimary` answers for a primary
 * fill; a light one under the class cannot know the dark value, so it keeps
 * the palette's `dark`. Empty when the theme sets `onFilled`: its tokens
 * already follow the mode. Interpolate alongside `filledTextColor`.
 */
export const darkFilledTextRule = (
  theme: Theme,
  fill: FilledTextFill = "other",
) =>
  theme.colors.onFilled
    ? ""
    : `:root.dark & { color: ${
        fill === "primary" && theme.isDark && theme.colors.onPrimary
          ? theme.colors.onPrimary
          : theme.colors.dark
      }; }`;

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
