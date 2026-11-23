// Server-safe: no "use client". The theme objects and stylesheet built here
// are plain values, usable in a server component (a <style> in a Next layout)
// as well as in the providers.
import type { Colors, Shadows, Theme } from "./theme";

export type ColorMode = "light" | "dark";

/**
 * A theme with real color values for one mode, and the mode it is for: what
 * `useResolvedTheme()` returns, for code that hands a theme color to something
 * CSS does not style (a canvas, a JS color library, an editor theme).
 */
export interface ResolvedTheme extends Theme {
  isDark: boolean;
}

export interface ThemeVariables {
  /**
   * The theme for both modes: every color and shadow is a CSS variable
   * (`var(--cherry-color-primary)`), so it never changes when the mode does.
   */
  theme: Theme;
  /** The light theme, with every mode token filled in. */
  light: ResolvedTheme;
  /** The dark theme, with every mode token filled in. The light one when no dark theme is given. */
  dark: ResolvedTheme;
  /**
   * The stylesheet behind the variables: light values on `:root`, dark ones on
   * `:root.dark`, and the `.theme-switching` rule that stops transitions for
   * the frame that paints a switch. Render it as a plain `<style>` (the
   * providers do), not through styled-components: its CSS preprocessor drops
   * the empty custom properties `modeValue()` relies on.
   */
  css: string;
}

const fade = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`;
const darken = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${100 - percent}%, black)`;

/**
 * One palette with every mode token set to the value Cherry's components fell
 * back to for that mode, so they look exactly as with a theme object per mode.
 * `optional` lists the optional fill tokens either palette sets: once one
 * mode has a value, the other needs one too, or it would inherit it.
 */
function resolve(
  source: Theme,
  isDark: boolean,
  optional: { onPrimary: boolean; primaryFill: boolean },
): ResolvedTheme {
  const c = source.colors;
  const colors: Colors = {
    ...c,
    accent: c.accent ?? (isDark ? c.primaryLight : c.primaryDark),
    link: c.link ?? (isDark ? c.dark : c.primary),
    onFilled: c.onFilled ?? (isDark ? c.dark : c.light),
    primaryTintHover: c.primaryTintHover ?? fade(c.primary, isDark ? 10 : 4),
    primaryTintDrop: c.primaryTintDrop ?? fade(c.primary, isDark ? 12 : 5),
    primaryTintActive: c.primaryTintActive ?? fade(c.primary, isDark ? 18 : 10),
  };
  if (optional.primaryFill) {
    colors.primaryFill = c.primaryFill ?? c.primary;
    colors.primaryFillHover =
      c.primaryFillHover ??
      (c.primaryFill ? darken(c.primaryFill, 10) : c.primaryDark);
  }
  if (optional.onPrimary) {
    colors.onPrimary = c.onPrimary ?? colors.onFilled;
  }
  const shadows: Shadows = {
    ...source.shadows,
    toast:
      source.shadows.toast ?? (isDark ? source.shadows.sm : source.shadows.xs),
  };
  return { ...source, colors, shadows, isDark };
}

function toVariables<T extends object>(prefix: string, ...records: T[]): T {
  const out: Record<string, string> = {};
  for (const record of records) {
    for (const key of Object.keys(record)) {
      out[key] = `var(--cherry-${prefix}-${key})`;
    }
  }
  return out as T;
}

function declare(prefix: string, record: object): string {
  const values = record as Record<string, unknown>;
  let out = "";
  for (const key of Object.keys(values)) {
    const value = values[key];
    if (typeof value === "string" && value !== "") {
      out += `--cherry-${prefix}-${key}:${value};`;
    }
  }
  return out;
}

/**
 * A value that differs by mode, as one CSS value: `light` under `:root`, `dark`
 * under `:root.dark`. It uses the "space toggle": `--cherry-light` and
 * `--cherry-dark` are one `initial` (so `var()` falls back) and one empty, so
 * exactly one fallback survives. Any value type works. In styled components,
 * `modes()` builds this for you.
 */
export function modeValue(light: string, dark: string): string {
  return `var(--cherry-light,${light})var(--cherry-dark,${dark})`;
}

/**
 * Builds the CSS-variable theme and its stylesheet from a light theme and an
 * optional dark one, the objects the providers take. The providers call it
 * for you; call it yourself to render the stylesheet in server code or to
 * read the resolved palettes.
 */
export function createThemeVariables(
  theme: Theme,
  themeDark?: Theme,
): ThemeVariables {
  const optional = {
    onPrimary: Boolean(theme.colors.onPrimary || themeDark?.colors.onPrimary),
    primaryFill: Boolean(
      theme.colors.primaryFill ||
      theme.colors.primaryFillHover ||
      themeDark?.colors.primaryFill ||
      themeDark?.colors.primaryFillHover,
    ),
  };
  const light = resolve(theme, false, optional);
  const dark = themeDark ? resolve(themeDark, true, optional) : light;

  const variableTheme: Theme = {
    ...theme,
    colors: toVariables("color", light.colors, dark.colors),
    shadows: toVariables("shadow", light.shadows, dark.shadows),
  };
  delete (variableTheme as Partial<ResolvedTheme>).isDark;

  const css = [
    `:root{--cherry-light:initial;--cherry-dark: ;${declare("color", light.colors)}${declare("shadow", light.shadows)}}`,
    themeDark
      ? `:root.dark{--cherry-light: ;--cherry-dark:initial;${declare("color", dark.colors)}${declare("shadow", dark.shadows)}}`
      : "",
    `.theme-switching,.theme-switching *,.theme-switching *::before,.theme-switching *::after{transition:none!important;}`,
  ]
    .filter(Boolean)
    .join("\n")
    // Theme values land inside a <style> tag: keep one from closing it.
    .replace(/</g, "\\3c ");

  return { theme: variableTheme, light, dark, css };
}
