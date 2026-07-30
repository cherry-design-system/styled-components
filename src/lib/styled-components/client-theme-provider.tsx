"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "../utils";
import { ThemeContext } from "./theme-provider";

const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readThemeCookie(): "light" | "dark" | undefined {
  const cookie = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("theme="));
  const value = cookie ? cookie.split("=")[1] : undefined;
  return value === "dark" ? "dark" : value === "light" ? "light" : undefined;
}

function persistTheme(value: "light" | "dark") {
  document.cookie = `theme=${value};path=/;max-age=${THEME_COOKIE_MAX_AGE};SameSite=Lax`;
  try {
    if (typeof localStorage !== "undefined") localStorage.theme = value;
  } catch {
    // storage unavailable (private mode); the cookie still holds the choice
  }
}

// Removes the flash-prevention style injected by themeInitScript, which hides
// the body until the correct theme is applied.
function removeThemeInitStyle() {
  const el = document.getElementById("__theme-init");
  if (el) el.remove();
}

// Resolves a theme color for the `theme-color` meta tag. Apps that theme
// through CSS custom properties store `var(--token)` in the theme object, and
// a meta tag cannot resolve that itself, so read the computed value instead.
function resolveColor(value: string): string {
  const match = /^var\(\s*(--[^,)\s]+)\s*(?:,([^)]*))?\)$/.exec(value.trim());
  if (!match) return value;
  const computed = getComputedStyle(document.documentElement)
    .getPropertyValue(match[1])
    .trim();
  return computed || match[2]?.trim() || value;
}

export interface ClientThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
  themeDark?: Theme;
  /**
   * The theme the server resolved from the `theme` cookie for the first
   * render. Omit in client-only apps and resolve it before mounting instead.
   */
  $initial?: "light" | "dark";
  /**
   * Keeps a `theme-color` meta tag in sync with the active theme so browser
   * chrome (e.g. the iOS Safari status bar) matches the page. Pass the name
   * of the theme color to track, or false to disable. A key (not a function)
   * so it stays serializable across the server/client component boundary.
   * Defaults to "light".
   */
  $themeColor?: keyof Theme["colors"] | false;
  /**
   * Renders Cherry's GlobalStyles for the active theme. Pass false when the
   * app provides its own global styles.
   */
  $globalStyles?: boolean;
}

/**
 * SSR-aware theme provider. Renders with the server-resolved theme on the
 * first paint (no dark-mode flash), reconciles it against the `theme` cookie
 * and OS preference on mount (Safari/Firefox don't send client hints, so
 * their first server render can guess wrong), and exposes setTheme /
 * toggleTheme through ThemeContext. Theme changes persist to the `theme`
 * cookie and localStorage; no API route is needed.
 */
function ClientThemeProvider({
  children,
  theme,
  themeDark,
  $initial = "light",
  $themeColor = "light",
  $globalStyles = true,
}: ClientThemeProviderProps) {
  const initialTheme = $initial === "dark" && themeDark ? themeDark : theme;
  const [overrideTheme, setOverrideTheme] = useState<Theme | null>(null);
  // False until the mount reconciliation below has decided the real mode. The
  // html `dark` class is not touched before then: themeInitScript may already
  // have set it from the cookie for the first paint, and syncing it against the
  // not-yet-reconciled server theme would strip it for a frame.
  const [reconciled, setReconciled] = useState(false);

  const effectiveTheme = useMemo(
    () => overrideTheme ?? initialTheme,
    [overrideTheme, initialTheme],
  );

  // Reconcile the server-rendered theme with the user's actual preference.
  // The swap happens IN PLACE rather than via a server round-trip: the
  // blocking themeInitScript hides the body on a dark first visit, and if the
  // reveal depended on a refresh that stalled, the page would stay blank. A
  // client-side swap always reveals.
  useEffect(() => {
    if (!themeDark) {
      setReconciled(true);
      removeThemeInitStyle();
      return;
    }
    try {
      let cookieValue = readThemeCookie();

      // Migrate a legacy localStorage preference into the cookie so users of
      // the previous localStorage-based system keep their choice.
      if (!cookieValue && typeof localStorage !== "undefined") {
        const stored = localStorage.theme;
        if (stored === "dark" || stored === "light") {
          persistTheme(stored);
          cookieValue = stored;
        }
      }

      if (!cookieValue) {
        // Fallback: themeInitScript should have set this; derive from the OS.
        const prefersDark =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        cookieValue = prefersDark ? "dark" : "light";
        persistTheme(cookieValue);
      }

      // If the server guessed the wrong theme, swap it on the client
      // instantly. The body is revealed by the effect below once that swap
      // has committed, so the corrected theme paints first.
      const wantDark = cookieValue === "dark";
      if (initialTheme.isDark !== wantDark) {
        setOverrideTheme(wantDark ? themeDark : theme);
        setReconciled(true);
        return;
      }
    } catch {
      // ignore; the page is revealed below
    }

    // Theme already correct (or detection failed): reveal the page now.
    setReconciled(true);
    removeThemeInitStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reveal the page once a corrected theme has committed, so the right theme
  // paints before the body becomes visible (no flash of the wrong theme).
  useEffect(() => {
    if (overrideTheme) removeThemeInitStyle();
  }, [overrideTheme]);

  // Keep the html `dark` class in sync for CSS that keys off it. Waits for
  // reconciliation so the class themeInitScript set for the first paint is not
  // stripped and re-added while the server's theme is still the active one.
  useEffect(() => {
    if (!reconciled) return;
    document.documentElement.classList.toggle("dark", effectiveTheme.isDark);
  }, [effectiveTheme.isDark, reconciled]);

  // Keep the browser chrome / iOS Safari status bar in sync when the user
  // toggles the theme without a navigation. Drops any media-scoped fallbacks
  // so a single, unconditional value wins.
  useEffect(() => {
    if (!$themeColor) return;
    const background = resolveColor(effectiveTheme.colors[$themeColor]);
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.removeAttribute("media");
    meta.content = background;
    document
      .querySelectorAll('meta[name="theme-color"][media]')
      .forEach((m) => m.remove());
  }, [effectiveTheme, $themeColor]);

  const setTheme: React.Dispatch<React.SetStateAction<Theme>> = (action) => {
    const next = typeof action === "function" ? action(effectiveTheme) : action;
    setOverrideTheme(next);
    persistTheme(next.isDark ? "dark" : "light");
  };

  const toggleTheme = () => {
    if (!themeDark) return;
    setTheme(effectiveTheme.isDark ? theme : themeDark);
  };

  const GlobalStylesComponent = $globalStyles
    ? GlobalStyles(effectiveTheme)
    : null;

  return (
    <StyledThemeProvider theme={effectiveTheme}>
      <ThemeContext.Provider value={{ setTheme, toggleTheme }}>
        {GlobalStylesComponent && <GlobalStylesComponent />}
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
}

export { ClientThemeProvider };
