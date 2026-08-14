import React from "react";
import ReactDOM from "react-dom/client";
// No StyledComponentsRegistry here: it exists to flush styles during a Next
// server render, and this demo is a client-only SPA with no server pass to
// insert into. It now lives behind `cherry-styled-components/next`.
import { ClientThemeProvider, theme, themeDark } from "./lib/index.js";
import App from "./App";
import { Preview } from "./preview";
import defaultPreviewColors from "./theme.json";

// Component preview route for screenshots and embeds: /preview lists all
// components, /preview/<name> renders one centered. Append ?theme=dark|light
// to pin a theme for this document only. Pinning writes nothing to the cookie
// or localStorage: docs embed a light and a dark iframe of the same origin
// side by side, and a shared cookie would let the last loader flip the other.
const previewMatch = window.location.pathname.match(
  /^\/preview(?:\/([\w-]*))?\/?$/,
);
const searchParams = new URLSearchParams(window.location.search);
const themeParam = searchParams.get("theme");
const forcedTheme =
  themeParam === "dark" || themeParam === "light" ? themeParam : undefined;

// Resolve the initial theme synchronously (forced param, then cookie, then
// localStorage, then the OS preference) so the first render already has the
// right theme. This is the client-only equivalent of the cookie read a server
// does in an SSR app.
const cookieTheme = document.cookie
  .split(";")
  .map((c) => c.trim())
  .find((c) => c.startsWith("theme="))
  ?.split("=")[1];
const storedTheme = forcedTheme ?? cookieTheme ?? localStorage.theme;
const initialTheme =
  storedTheme === "dark" ||
  (storedTheme !== "light" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "light";

// Optional color overrides for previews: ?colors=<URI-encoded JSON> shaped
// like { default: { primary: "#..." }, dark: { ... } }. Only valid CSS color
// strings are accepted (values land in generated CSS).
function mergeColors(base: typeof theme, overrides: unknown): typeof theme {
  if (!overrides || typeof overrides !== "object") return base;
  const safe = Object.fromEntries(
    Object.entries(overrides).filter(
      ([key, value]) =>
        key in base.colors &&
        typeof value === "string" &&
        CSS.supports("color", value),
    ),
  );
  return { ...base, colors: { ...base.colors, ...safe } };
}

// src/theme.json provides the default colors for both the demo app and the
// previews; ?colors= overrides apply on top of it (previews only).
let previewTheme = mergeColors(theme, defaultPreviewColors.default);
let previewThemeDark = mergeColors(themeDark, defaultPreviewColors.dark);
if (previewMatch) {
  const colorsParam = searchParams.get("colors");
  if (colorsParam) {
    try {
      const parsed = JSON.parse(colorsParam);
      previewTheme = mergeColors(previewTheme, parsed.default);
      previewThemeDark = mergeColors(previewThemeDark, parsed.dark);
    } catch {
      console.warn("Ignoring invalid ?colors= JSON");
    }
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* When a theme is forced, pass only that theme and omit themeDark so
        ClientThemeProvider skips its cookie/OS reconciliation on mount and
        the pinned theme can never be flipped by another tab or iframe. */}
    <ClientThemeProvider
      theme={forcedTheme === "dark" ? previewThemeDark : previewTheme}
      themeDark={forcedTheme ? undefined : previewThemeDark}
      $initial={initialTheme}
    >
      {previewMatch ? <Preview name={previewMatch[1] ?? ""} /> : <App />}
    </ClientThemeProvider>
  </React.StrictMode>,
);
