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

// Component preview route for screenshots: /preview lists all components,
// /preview/<name> renders one centered. Append ?theme=dark|light to force a
// theme (persisted the same way ClientThemeProvider persists a toggle).
const previewMatch = window.location.pathname.match(
  /^\/preview(?:\/([\w-]*))?\/?$/,
);
const forcedTheme = new URLSearchParams(window.location.search).get("theme");
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledComponentsRegistry>
      <ClientThemeProvider
        theme={theme}
        themeDark={themeDark}
        $initial={initialTheme}
      >
        {previewMatch ? <Preview name={previewMatch[1] ?? ""} /> : <App />}
      </ClientThemeProvider>
    </StyledComponentsRegistry>
  </React.StrictMode>,
);
