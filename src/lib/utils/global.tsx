"use client";
import { createGlobalStyle, css } from "styled-components";
import { Theme } from "./theme";
import { linkColor } from "./mixins";

const globalStyles = (theme: Theme) => css`
  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    scroll-behavior: smooth;
    background-color: ${theme.colors.light};
  }

  body {
    font-family: "Inter", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
    min-width: 0;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
  }

  pre,
  code,
  kbd,
  samp,
  blockquote,
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul li,
  ol li {
    margin: 0;
    padding: 0;
    color: ${theme.colors.dark};
  }

  a {
    color: ${linkColor(theme)};
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  figure {
    margin: 0;
  }

  fieldset {
    appearance: none;
    border: none;
  }

  button,
  input,
  a,
  img,
  svg,
  svg * {
    transition: all 0.3s ease;
  }

  strong,
  b {
    font-weight: 700;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid ${theme.colors.grayLight};
  }
`;

/**
 * Builds a global style component for one fixed theme. Call it once at module
 * level: under styled-components' dev build, creating a styled component
 * during render (including inside useMemo) calls a hook and breaks React.
 */
const GlobalStyles = (theme: Theme) => createGlobalStyle`
  ${globalStyles(theme)}
`;

/**
 * The same global styles, reading the active theme from the ThemeProvider.
 * Created once, so providers can swap themes without building a new
 * component (see GlobalStyles above).
 */
const ThemedGlobalStyles = createGlobalStyle`
  ${({ theme }) => globalStyles(theme as Theme)}
`;

export { GlobalStyles, ThemedGlobalStyles };
