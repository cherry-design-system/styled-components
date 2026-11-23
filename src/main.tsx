import React from "react";
import ReactDOM from "react-dom/client";
// No StyledComponentsRegistry here: it exists to flush styles during a Next
// server render, and this demo is a client-only SPA with no server pass to
// insert into. It now lives behind `cherry-styled-components/next`.
import {
  ClientThemeProvider,
  theme,
  themeDark,
  themeInitScript,
} from "./lib/index.js";
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

// Put the page in its mode before the first render, as an SSR app does with
// themeInitScript in its <head>: an inline script runs as soon as it is
// inserted. A pinned preview just takes its mode.
if (forcedTheme) {
  document.documentElement.classList.toggle("dark", forcedTheme === "dark");
} else {
  const init = document.createElement("script");
  init.textContent = themeInitScript;
  document.head.appendChild(init);
}

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
    {/* $mode pins a forced theme: nothing is stored, so another tab or
        iframe can never flip it. */}
    <ClientThemeProvider
      theme={previewTheme}
      themeDark={previewThemeDark}
      $mode={forcedTheme}
    >
      {previewMatch ? <Preview name={previewMatch[1] ?? ""} /> : <App />}
    </ClientThemeProvider>
  </React.StrictMode>,
);
