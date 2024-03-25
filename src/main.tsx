import React from "react";
import ReactDOM from "react-dom/client";
import { CherryThemeProvider, StyledComponentsRegistry, theme, themeDark } from "./lib/index.js";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledComponentsRegistry>
      <CherryThemeProvider theme={theme} themeDark={themeDark}>
        <App />
      </CherryThemeProvider>
    </StyledComponentsRegistry>
  </React.StrictMode>,
);
