"use client";
export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920,
};

export function mq(minWidth: keyof Breakpoints) {
  return `@media screen and (min-width: ${breakpoints[minWidth]}px)`;
}

export const spacing: Spacing = {
  maxWidth: { xs: "1280px", xxxl: "1440px" },
  padding: { xs: "20px", lg: "40px" },
  radius: { xs: "6px", lg: "12px", xl: "30px" },
  gridGap: { xs: "20px", lg: "40px" },
};

export const colors: Colors = {
  primaryLight: "#91aec4",
  primary: "#4d6f8b",
  primaryDark: "#194569",

  secondaryLight: "#a4b17b",
  secondary: "#5c6e46",
  secondaryDark: "#354c2b",

  tertiaryLight: "#ebccb9",
  tertiary: "#816b5a",
  tertiaryDark: "#675445",

  grayLight: "#e5e7eb",
  gray: "#9ca3af",
  grayDark: "#4b5563",

  success: "#84cc16",
  error: "#ef4444",
  warning: "#eab308",
  info: "#06b6d4",

  dark: "#000000",
  light: "#ffffff",
};

export const colorsDark: Colors = {
  primaryLight: "#79C5FF",
  primary: "#6198C6",
  primaryDark: "#339DF4",

  secondaryLight: "#a4b17b",
  secondary: "#5c6e46",
  secondaryDark: "#354c2b",

  tertiaryLight: "#ebccb9",
  tertiary: "#816b5a",
  tertiaryDark: "#675445",

  grayLight: "#1a1a1a",
  gray: "#454444",
  grayDark: "#808080",

  success: "#84cc16",
  error: "#ef4444",
  warning: "#eab308",
  info: "#06b6d4",

  dark: "#ffffff",
  light: "#000000",
};

export const shadows: Shadows = {
  xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
  sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
  md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
  lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
  xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)",
};

export const shadowsDark: Shadows = {
  xs: "0px 4px 4px 0px rgba(255, 255, 255, 0.04), 0px 1px 3px 0px rgba(255, 255, 255, 0.02)",
  sm: "0px 4px 4px 0px rgba(255, 255, 255, 0.08), 0px 1px 3px 0px rgba(255, 255, 255, 0.04)",
  md: "0px 8px 8px 0px rgba(255, 255, 255, 0.16), 0px 2px 3px 0px rgba(255, 255, 255, 0.06)",
  lg: "0px 16px 24px 0px rgba(255, 255, 255, 0.20), 0px 2px 3px 0px rgba(255, 255, 255, 0.08)",
  xl: "0px 24px 32px 0px rgba(255, 255, 255, 0.24), 0px 2px 3px 0px rgba(255, 255, 255, 0.12)",
};

export const fonts: Fonts = {
  text: "Inter",
  head: "Inter",
  mono: "monospace",
};

export const fontSizes: FontSizes = {
  hero1: { xs: "72px", lg: "128px" },
  hero2: { xs: "60px", lg: "96px" },
  hero3: { xs: "36px", lg: "72px" },

  h1: { xs: "40px", lg: "60px" },
  h2: { xs: "30px", lg: "36px" },
  h3: { xs: "28px", lg: "30px" },
  h4: { xs: "26px", lg: "24px" },
  h5: { xs: "18px", lg: "20px" },
  h6: { xs: "16px", lg: "18px" },

  text: { xs: "14px", lg: "16px" },
  strong: { xs: "14px", lg: "16px" },
  small: { xs: "12px", lg: "14px" },

  blockquote: { xs: "16px", lg: "18px" },
  code: { xs: "14px", lg: "16px" },

  button: { xs: "16px", lg: "16px" },
  buttonBig: { xs: "18px", lg: "18px" },
  buttonSmall: { xs: "14px", lg: "14px" },

  input: { xs: "16px", lg: "16px" },
  inputBig: { xs: "18px", lg: "18px" },
  inputSmall: { xs: "14px", lg: "14px" },
};

export const lineHeights: LineHeights = {
  hero1: { xs: "1.10", lg: "1.10" },
  hero2: { xs: "1.10", lg: "1.10" },
  hero3: { xs: "1.20", lg: "1.10" },

  h1: { xs: "1.50", lg: "1.40" },
  h2: { xs: "1.50", lg: "1.50" },
  h3: { xs: "1.30", lg: "1.50" },
  h4: { xs: "1.30", lg: "1.50" },
  h5: { xs: "1.60", lg: "1.50" },
  h6: { xs: "1.60", lg: "1.60" },

  text: { xs: "1.70", lg: "1.70" },
  strong: { xs: "1.70", lg: "1.70" },
  small: { xs: "1.70", lg: "1.70" },

  blockquote: { xs: "1.70", lg: "1.70" },
  code: { xs: "1.70", lg: "1.70" },

  button: { xs: "1.00", lg: "1.00" },
  buttonBig: { xs: "1.00", lg: "1.00" },
  buttonSmall: { xs: "1.00", lg: "1.00" },

  input: { xs: "1.00", lg: "1.00" },
  inputBig: { xs: "1.00", lg: "1.00" },
  inputSmall: { xs: "1.00", lg: "1.00" },
};

export const theme: Theme = {
  breakpoints,
  spacing,
  colors,
  shadows,
  fonts,
  fontSizes,
  lineHeights,
  isDark: false,
};

export const themeDark: Theme = {
  breakpoints,
  spacing,
  colors: colorsDark,
  shadows: shadowsDark,
  fonts,
  fontSizes,
  lineHeights,
  isDark: true,
};

export interface Breakpoints<TNumber = number> {
  xs: TNumber;
  sm: TNumber;
  md: TNumber;
  lg: TNumber;
  xl: TNumber;
  xxl: TNumber;
  xxxl: TNumber;
}

export interface Spacing<TString = string> {
  maxWidth: { xs: TString; xxxl: TString };
  padding: { xs: TString; lg: TString };
  radius: { xs: TString; lg: TString; xl: TString };
  gridGap: { xs: TString; lg: TString };
}

export interface Colors<TString = string> {
  primaryLight: TString;
  primary: TString;
  primaryDark: TString;

  secondaryLight: TString;
  secondary: TString;
  secondaryDark: TString;

  tertiaryLight: TString;
  tertiary: TString;
  tertiaryDark: TString;

  grayLight: TString;
  gray: TString;
  grayDark: TString;

  success: TString;
  error: TString;
  warning: TString;
  info: TString;

  dark: TString;
  light: TString;

  /**
   * Optional label color for text on a `primary` fill (a primary button, a
   * sent chat bubble, a primary avatar). Set it when neither `light` nor
   * `dark` reads on the theme's primary, e.g. a bright dark-mode primary
   * that a light label cannot sit on. Without it the fill takes the palette's
   * contrasting end, as `filledTextColor` describes.
   */
  onPrimary?: TString;
  /**
   * Optional fill for the solid primary surfaces (the primary button, the
   * sent chat bubble, the primary avatar), whose label is `onPrimary`. Set it
   * when the theme's `primary` is too bright to carry a label but still right
   * for accents (links, rings, outlines): the fills take this deeper shade
   * and the accents keep `primary`. Without it the fills use `primary`.
   */
  primaryFill?: TString;

  /*
   * Optional mode tokens. A theme whose colors are CSS variables (one theme
   * object for both modes, the mode switched by a class or attribute) cannot
   * answer `isDark`, so it states the colors that differ by mode here. Each
   * one falls back to the `isDark` choice it replaces when absent, so a pair
   * of light and dark theme objects renders exactly as before.
   */
  /**
   * Hover and emphasis text on a surface (Prose links on hover, the
   * ChatSources and ChatLauncher text, the ThemeToggle glyph on hover).
   * Without it: `primaryDark` in light mode, `primaryLight` in dark mode.
   */
  accent?: TString;
  /**
   * The color of links in `GlobalStyles`. Without it: `primary` in light
   * mode, `dark` in dark mode.
   */
  link?: TString;
  /**
   * The label on a filled control that is not primary (a secondary,
   * tertiary or error Button, a colored Avatar), and on a primary fill when
   * the theme sets no `onPrimary`. Without it: `light` in light mode,
   * `dark` in dark mode.
   */
  onFilled?: TString;
  /**
   * The primary tint behind a hovered Dropzone or AvatarDropzone. Without
   * it: `primary` at 4% in light mode, 10% in dark mode.
   */
  primaryTintHover?: TString;
  /**
   * The primary tint behind a Dropzone or AvatarDropzone while a file is
   * dragged over it. Without it: `primary` at 5% in light mode, 12% in dark
   * mode.
   */
  primaryTintDrop?: TString;
  /**
   * The primary tint behind an active (`$active`) IconButton. Without it:
   * `primary` at 10% in light mode, 18% in dark mode.
   */
  primaryTintActive?: TString;
}

export interface Shadows<TString = string> {
  xs: TString;
  sm: TString;
  md: TString;
  lg: TString;
  xl: TString;
  /**
   * Optional: the Toast's shadow. Without it: `xs` in light mode, `sm` in
   * dark mode (see the mode tokens on `Colors`).
   */
  toast?: TString;
}

export interface Fonts<TString = string> {
  head: TString;
  text: TString;
  mono: TString;
}

export interface FontSizes<TString = string> {
  hero1: { xs: TString; lg: TString };
  hero2: { xs: TString; lg: TString };
  hero3: { xs: TString; lg: TString };

  h1: { xs: TString; lg: TString };
  h2: { xs: TString; lg: TString };
  h3: { xs: TString; lg: TString };
  h4: { xs: TString; lg: TString };
  h5: { xs: TString; lg: TString };
  h6: { xs: TString; lg: TString };

  text: { xs: TString; lg: TString };
  strong: { xs: TString; lg: TString };
  small: { xs: TString; lg: TString };

  blockquote: { xs: TString; lg: TString };
  code: { xs: TString; lg: TString };

  button: { xs: TString; lg: TString };
  buttonBig: { xs: TString; lg: TString };
  buttonSmall: { xs: TString; lg: TString };

  input: { xs: TString; lg: TString };
  inputBig: { xs: TString; lg: TString };
  inputSmall: { xs: TString; lg: TString };
}

export interface LineHeights<TString = string> {
  hero1: { xs: TString; lg: TString };
  hero2: { xs: TString; lg: TString };
  hero3: { xs: TString; lg: TString };

  h1: { xs: TString; lg: TString };
  h2: { xs: TString; lg: TString };
  h3: { xs: TString; lg: TString };
  h4: { xs: TString; lg: TString };
  h5: { xs: TString; lg: TString };
  h6: { xs: TString; lg: TString };

  text: { xs: TString; lg: TString };
  strong: { xs: TString; lg: TString };
  small: { xs: TString; lg: TString };

  blockquote: { xs: TString; lg: TString };
  code: { xs: TString; lg: TString };

  button: { xs: TString; lg: TString };
  buttonBig: { xs: TString; lg: TString };
  buttonSmall: { xs: TString; lg: TString };

  input: { xs: TString; lg: TString };
  inputBig: { xs: TString; lg: TString };
  inputSmall: { xs: TString; lg: TString };
}

export interface Theme {
  breakpoints: Breakpoints;
  spacing: Spacing;
  colors: Colors;
  shadows: Shadows;
  fonts: Fonts;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
  /**
   * Whether this theme object holds the dark palette. Optional: a theme
   * whose colors are CSS variables serves both modes and leaves it out,
   * setting the mode tokens (`colors.accent`, `colors.onFilled`, ...)
   * instead. Absent reads as light.
   */
  isDark?: boolean;
}
