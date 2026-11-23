"use client";
import React, { useEffect, useMemo, useSyncExternalStore } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  ThemedGlobalStyles,
  createThemeVariables,
  type ColorMode,
  type Theme,
} from "../utils";
import {
  DARK_MODE_QUERY,
  followSystemMode,
  applyColorMode,
  getColorModeState,
  setColorModePreference,
  subscribeColorMode,
  toggleColorMode,
  type ColorModeState,
} from "./color-mode";
import {
  ColorModeContext,
  ThemeContext,
  ThemeVariablesContext,
  type ThemeContextProps,
} from "./theme-provider";

export interface ClientThemeProviderProps {
  children: React.ReactNode;
  /** The light theme, with real color values. */
  theme: Theme;
  /** The dark theme, with real color values. Without it the page stays light. */
  themeDark?: Theme;
  /**
   * The mode of the server render, for `useColorMode()` only: the colors do
   * not depend on it, since createThemeInitScript sets the mode before the
   * first paint. Pass the `theme` cookie's value when the server reads it.
   */
  $initial?: ColorMode;
  /**
   * Pins the mode: the page shows it whatever the visitor's preference, and
   * nothing is stored. Toggling does nothing while it is set.
   */
  $mode?: ColorMode;
  /**
   * Keeps a `theme-color` meta tag on this theme color, so browser chrome
   * (e.g. the iOS Safari status bar) matches the page. Pass the name of the
   * theme color to track, or false to disable. Defaults to "light".
   */
  $themeColor?: keyof Theme["colors"] | false;
  /**
   * Renders Cherry's GlobalStyles. Pass false when the app provides its own
   * global styles.
   */
  $globalStyles?: boolean;
}

const SERVER_STATE: Record<ColorMode, ColorModeState> = {
  light: { mode: "light", preference: "system" },
  dark: { mode: "dark", preference: "system" },
};

const LIVE_CONTEXT: ThemeContextProps = {
  toggleTheme: toggleColorMode,
  setPreference: setColorModePreference,
};

const PINNED_CONTEXT: ThemeContextProps = {
  toggleTheme: () => {},
  setPreference: () => {},
};

/**
 * Cherry's theme provider. It hands styled-components one theme for both
 * modes, whose colors and shadows are CSS variables (createThemeVariables),
 * and declares the light values on `:root` and the dark ones on `:root.dark`.
 * The mode is that `dark` class on <html>: switching flips it and the browser
 * repaints, without any styled component rendering again. Only components
 * reading `useColorMode()` or `useResolvedTheme()` do.
 *
 * The visitor's choice (light, dark or system) persists to localStorage, and
 * the mode in force to the `theme` cookie. Render createThemeInitScript in the
 * document head so the first paint is already in the right mode.
 */
function ClientThemeProvider({
  children,
  theme,
  themeDark,
  $initial = "light",
  $mode,
  $themeColor = "light",
  $globalStyles = true,
}: ClientThemeProviderProps) {
  const variables = useMemo(
    () => createThemeVariables(theme, themeDark),
    [theme, themeDark],
  );
  const pinned: ColorMode | null = $mode ?? (themeDark ? null : "light");

  const stored = useSyncExternalStore(
    subscribeColorMode,
    getColorModeState,
    () => SERVER_STATE[$initial],
  );
  const mode = pinned ?? stored.mode;
  const preference = pinned ?? stored.preference;

  useEffect(() => {
    applyColorMode(mode, { persist: !pinned, themeColor: $themeColor });
  }, [mode, pinned, $themeColor]);

  // "system" follows the OS live.
  useEffect(() => {
    if (pinned || preference !== "system" || !window.matchMedia) return;
    const media = window.matchMedia(DARK_MODE_QUERY);
    media.addEventListener("change", followSystemMode);
    return () => media.removeEventListener("change", followSystemMode);
  }, [pinned, preference]);

  const setters = pinned ? PINNED_CONTEXT : LIVE_CONTEXT;
  const modeValue = useMemo(
    () => ({ mode, preference, ...setters }),
    [mode, preference, setters],
  );

  // Built once per theme, so a mode switch re-renders none of it.
  const content = useMemo(
    () => (
      <StyledThemeProvider theme={variables.theme}>
        {/* A plain <style>, not a styled-components global style: stylis
            drops the empty custom properties modeValue() relies on. */}
        <style
          data-cherry-theme=""
          dangerouslySetInnerHTML={{ __html: variables.css }}
        />
        {$globalStyles && <ThemedGlobalStyles />}
        {children}
      </StyledThemeProvider>
    ),
    [variables, $globalStyles, children],
  );

  return (
    <ThemeContext.Provider value={setters}>
      <ThemeVariablesContext.Provider value={variables}>
        <ColorModeContext.Provider value={modeValue}>
          {content}
        </ColorModeContext.Provider>
      </ThemeVariablesContext.Provider>
    </ThemeContext.Provider>
  );
}

/**
 * ClientThemeProvider without the theme-color meta sync. Kept as the name
 * apps without server rendering have used.
 */
function CherryThemeProvider({
  children,
  theme,
  themeDark,
  $mode,
}: Pick<
  ClientThemeProviderProps,
  "children" | "theme" | "themeDark" | "$mode"
>) {
  return (
    <ClientThemeProvider
      theme={theme}
      themeDark={themeDark}
      $mode={$mode}
      $themeColor={false}
    >
      {children}
    </ClientThemeProvider>
  );
}

export { ClientThemeProvider, CherryThemeProvider };
