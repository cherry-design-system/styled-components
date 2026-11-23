"use client";
import type { ColorMode } from "../utils/theme-variables";

// ---------------------------------------------------------------------------
// The light/dark mode, outside React
// ---------------------------------------------------------------------------
//
// The mode is the `dark` class on <html>: the theme's colors are CSS variables
// that follow it, so switching renders no styled component again. What the
// visitor picked lives here, in a small store the providers read with
// useSyncExternalStore. createThemeInitScript makes the same decision before
// the first paint, so mounting never flips the mode:
//
//   1. an explicit `themePreference` in localStorage: light, dark or system;
//   2. else a `theme` entry in localStorage, which Cherry before 0.3 wrote
//      when the visitor toggled, so it counts as their choice;
//   3. else the OS ("system"), followed live.
//
// Where storage is blocked, the `theme` cookie is the only thing that keeps a
// choice, so it decides. The cookie always mirrors the mode in force, for
// server code that wants it (resolveTheme).

export type ColorModePreference = ColorMode | "system";

export interface ColorModeState {
  /** The mode in force. */
  mode: ColorMode;
  /** What the visitor picked: a fixed mode, or whatever the OS is set to. */
  preference: ColorModePreference;
}

const PREFERENCE_KEY = "themePreference";
const DARK_QUERY = "(prefers-color-scheme: dark)";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function systemMode(): ColorMode {
  return typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia(DARK_QUERY).matches
    ? "dark"
    : "light";
}

function resolveMode(preference: ColorModePreference): ColorMode {
  return preference === "system" ? systemMode() : preference;
}

function readCookieMode(): ColorMode | undefined {
  const entry = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.indexOf("theme=") === 0);
  const value = entry ? entry.slice("theme=".length) : undefined;
  return value === "dark" || value === "light" ? value : undefined;
}

function readPreference(): ColorModePreference {
  try {
    const stored = window.localStorage.getItem(PREFERENCE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
    const legacy = window.localStorage.getItem("theme");
    return legacy === "light" || legacy === "dark" ? legacy : "system";
  } catch {
    return readCookieMode() ?? "system";
  }
}

function storePreference(preference: ColorModePreference) {
  try {
    window.localStorage.setItem(PREFERENCE_KEY, preference);
  } catch {
    // Storage is blocked: the cookie applyColorMode writes keeps the choice.
  }
}

let state: ColorModeState | null = null;
const listeners = new Set<() => void>();

/** The visitor's mode and preference (client only). */
export function getColorModeState(): ColorModeState {
  if (!state) {
    const preference = readPreference();
    state = { mode: resolveMode(preference), preference };
  }
  return state;
}

export function subscribeColorMode(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function update(next: ColorModeState) {
  const current = getColorModeState();
  if (current.mode === next.mode && current.preference === next.preference) {
    return;
  }
  state = next;
  listeners.forEach((listener) => listener());
}

/** Picks a mode, or "system" to follow the OS, and remembers it. */
export function setColorModePreference(preference: ColorModePreference) {
  storePreference(preference);
  update({ mode: resolveMode(preference), preference });
}

/** Switches to the other mode and remembers it. */
export function toggleColorMode() {
  setColorModePreference(
    getColorModeState().mode === "dark" ? "light" : "dark",
  );
}

/** Re-reads the OS mode, when the preference is "system". */
export function followSystemMode() {
  const current = getColorModeState();
  if (current.preference !== "system") return;
  update({ mode: systemMode(), preference: "system" });
}

export const DARK_MODE_QUERY = DARK_QUERY;

let switchId = 0;

/**
 * Puts the page in `mode`: the `dark` class on <html> (painted with
 * transitions off for that frame, `.theme-switching`, so the page changes at
 * once instead of control by control), the `theme` cookie when `persist`, and
 * the theme-color meta from the `themeColor` token's CSS variable. Writes only
 * what differs.
 */
export function applyColorMode(
  mode: ColorMode,
  { persist, themeColor }: { persist: boolean; themeColor: string | false },
) {
  const root = document.documentElement;
  const dark = mode === "dark";
  if (root.classList.contains("dark") !== dark) {
    const id = ++switchId;
    root.classList.add("theme-switching");
    root.classList.toggle("dark", dark);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (id === switchId) root.classList.remove("theme-switching");
      }),
    );
  }
  if (persist && readCookieMode() !== mode) {
    document.cookie = `theme=${mode};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
  }
  if (themeColor) {
    const color = getComputedStyle(root)
      .getPropertyValue(`--cherry-color-${themeColor}`)
      .trim();
    if (!color) return;
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]:not([media])',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    if (meta.content !== color) meta.content = color;
    document
      .querySelectorAll('meta[name="theme-color"][media]')
      .forEach((node) => node.remove());
  }
}
