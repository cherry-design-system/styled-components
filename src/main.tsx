import React from "react";
import ReactDOM from "react-dom/client";
import {
  CherryThemeProvider,
  StyledComponentsRegistry,
  theme,
  themeDark,
} from "./lib/index.js";
import App from "./App";
import { Preview } from "./preview";

// Component preview route for screenshots: /preview lists all components,
// /preview/<name> renders one centered. Append ?theme=dark|light to force a
// theme (persisted to localStorage, which CherryThemeProvider reads).
const previewMatch = window.location.pathname.match(
  /^\/preview(?:\/([\w-]*))?\/?$/,
);
const forcedTheme = new URLSearchParams(window.location.search).get("theme");
if (forcedTheme === "dark" || forcedTheme === "light") {
  localStorage.theme = forcedTheme;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledComponentsRegistry>
      <CherryThemeProvider theme={theme} themeDark={themeDark}>
        {previewMatch ? <Preview name={previewMatch[1] ?? ""} /> : <App />}
      </CherryThemeProvider>
    </StyledComponentsRegistry>
  </React.StrictMode>,
);
