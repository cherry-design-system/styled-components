// Server-safe theming helpers. Deliberately NOT a "use client" module: these
// are plain values consumed in server components (layout head script, cookie
// resolution), where client-reference proxies would break them.
import { Theme } from "../utils";

/**
 * Blocking script for the document <head>. On a first visit from a browser
 * that doesn't send Sec-CH-Prefers-Color-Scheme (Safari, Firefox), it seeds
 * the `theme` cookie from the OS preference and, when dark, hides the body
 * behind a `#__theme-init` style so the light server render never flashes,
 * and rewrites `<meta name="theme-color">` to `darkThemeColor` so the browser
 * chrome (Safari tab bar, Android toolbar) doesn't hold the light tint until
 * hydration — the server had no cookie to resolve, and the provider's own
 * meta sync runs too late by definition. The meta rewrite mirrors
 * ClientThemeProvider's sync (single canonical tag, media-scoped ones
 * removed), which takes over from here after hydration.
 * ClientThemeProvider removes the `#__theme-init` style once the corrected
 * theme has committed on the client. Pass your dark theme's page background
 * so the brief pre-hydration frame matches it; pass `darkThemeColor` when
 * your provider uses a non-default `$themeColor` (e.g. "primary") so the
 * pre-hydration tint matches that token's dark value instead.
 */
export function createThemeInitScript(
  darkBackground = "#000",
  darkThemeColor = darkBackground,
): string {
  return `(function(){try{var c=document.cookie.split(";").find(function(s){return s.trim().startsWith("theme=")});if(!c){var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;document.cookie="theme="+(d?"dark":"light")+";path=/;max-age=31536000;SameSite=Lax";if(d){var s=document.createElement("style");s.id="__theme-init";s.textContent="html{background:${darkBackground}!important;color-scheme:dark}body{visibility:hidden}";document.head.appendChild(s);var m=document.querySelector('meta[name="theme-color"]');if(!m){m=document.createElement("meta");m.name="theme-color";document.head.appendChild(m)}m.removeAttribute("media");m.content="${darkThemeColor}";document.querySelectorAll('meta[name="theme-color"][media]').forEach(function(n){n.remove()})}}}catch(e){}})();`;
}

/** createThemeInitScript() with the default dark background and theme-color (#000). */
export const themeInitScript = createThemeInitScript();

/**
 * Resolves a `theme` cookie value ("light" | "dark") to a theme object.
 * Meant for server code: read the cookie, resolve, pass the result to
 * ClientThemeProvider via $initial (or use it for viewport theme-color).
 */
export function resolveTheme(
  cookieValue: string | undefined,
  theme: Theme,
  themeDark?: Theme,
): Theme {
  return cookieValue === "dark" && themeDark ? themeDark : theme;
}
