import React from "react";
import ReactDOM from "react-dom/client";
import {
  ClientThemeProvider,
  StyledComponentsRegistry,
  theme,
  themeDark,
} from "./lib/index.js";
import App from "./App";
import { Preview } from "./preview";
import defaultPreviewColors from "./theme.json";

// Component preview route for screenshots: /preview lists all components,
// /preview/<name> renders one centered. Append ?theme=dark|light to force a
// theme (persisted the same way ClientThemeProvider persists a toggle).
const previewMatch = window.location.pathname.match(
  /^\/preview(?:\/([\w-]*))?\/?$/,
);
const searchParams = new URLSearchParams(window.location.search);
const forcedTheme = searchParams.get("theme");
if (forcedTheme === "dark" || forcedTheme === "light") {
  document.cookie = `theme=${forcedTheme};path=/;max-age=31536000;SameSite=Lax`;
  localStorage.theme = forcedTheme;
}

// Resolve the initial theme synchronously (cookie, then localStorage, then the
// OS preference) so the first render already has the right theme. This is the
// client-only equivalent of the cookie read a server does in an SSR app.
const cookieTheme = document.cookie
  .split(";")
  .map((c) => c.trim())
  .find((c) => c.startsWith("theme="))
  ?.split("=")[1];
const storedTheme = cookieTheme ?? localStorage.theme;
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

let previewTheme = theme;
let previewThemeDark = themeDark;
if (previewMatch) {
  // src/theme.json provides the default preview colors; ?colors= overrides
  // apply on top of it.
  previewTheme = mergeColors(theme, defaultPreviewColors.default);
  previewThemeDark = mergeColors(themeDark, defaultPreviewColors.dark);
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
    <StyledComponentsRegistry>
      <ClientThemeProvider
        theme={previewTheme}
        themeDark={previewThemeDark}
        $initial={initialTheme}
      >
        {previewMatch ? <Preview name={previewMatch[1] ?? ""} /> : <App />}
      </ClientThemeProvider>
    </StyledComponentsRegistry>
  </React.StrictMode>,
);
