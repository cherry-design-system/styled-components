"use client";
import { createContext, useContext } from "react";
import {
  createThemeVariables,
  theme as defaultTheme,
  themeDark as defaultThemeDark,
  type ColorMode,
  type ResolvedTheme,
  type ThemeVariables,
} from "../utils";
import type { ColorModePreference } from "./color-mode";

export type { ColorModePreference, ColorModeState } from "./color-mode";

export interface ThemeContextProps {
  /** Switches to the other mode and remembers it. */
  toggleTheme: () => void;
  /** Picks a mode, or "system" to follow the OS, and remembers it. */
  setPreference: (preference: ColorModePreference) => void;
}

/**
 * The mode setters, for controls like ThemeToggle. Its value never changes, so
 * reading it does not re-render a component when the mode switches; read
 * `useColorMode()` for the mode itself.
 */
export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  setPreference: () => {},
});

export interface ColorModeContextValue extends ThemeContextProps {
  /** The mode in force. */
  mode: ColorMode;
  /** What the visitor picked: a fixed mode, or whatever the OS is set to. */
  preference: ColorModePreference;
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  mode: "light",
  preference: "system",
  toggleTheme: () => {},
  setPreference: () => {},
});

/** The provider's theme variables and resolved palettes. */
export const ThemeVariablesContext = createContext<ThemeVariables | null>(null);

/**
 * The mode in force, the visitor's preference, and the setters. Components
 * reading it render again when the mode switches, so read it only for what CSS
 * cannot do (a canvas, an image per mode); a color that differs by mode is a
 * theme token, a `:root.dark &` rule or `modes()`.
 */
export function useColorMode(): ColorModeContextValue {
  return useContext(ColorModeContext);
}

let fallbackVariables: ThemeVariables | null = null;

/**
 * The theme with real values (not CSS variables) for the mode in force, plus
 * `isDark`: for code that hands a theme color to something CSS does not style,
 * such as a canvas, a JS color library or an editor theme. Components using
 * it render again when the mode switches.
 */
export function useResolvedTheme(): ResolvedTheme {
  const { mode } = useColorMode();
  let variables = useContext(ThemeVariablesContext);
  if (!variables) {
    fallbackVariables ??= createThemeVariables(defaultTheme, defaultThemeDark);
    variables = fallbackVariables;
  }
  return mode === "dark" ? variables.dark : variables.light;
}
