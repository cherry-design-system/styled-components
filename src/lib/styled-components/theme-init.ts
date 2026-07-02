// Server-safe theming helpers. Deliberately NOT a "use client" module: these
// are plain values consumed in server components (layout head script, cookie
// resolution), where client-reference proxies would break them.
import { Theme } from "../utils";

/**
 * Blocking script for the document <head>. On a first visit from a browser
 * that doesn't send Sec-CH-Prefers-Color-Scheme (Safari, Firefox), it seeds
 * the `theme` cookie from the OS preference and, when dark, hides the body
 * behind a `#__theme-init` style so the light server render never flashes.
 * ClientThemeProvider removes that style once the corrected theme has
 * committed on the client. Pass your dark theme's page background so the
 * brief pre-hydration frame matches it.
 */
export function createThemeInitScript(darkBackground = "#000"): string {
  return `(function(){try{var c=document.cookie.split(";").find(function(s){return s.trim().startsWith("theme=")});if(!c){var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;document.cookie="theme="+(d?"dark":"light")+";path=/;max-age=31536000;SameSite=Lax";if(d){var s=document.createElement("style");s.id="__theme-init";s.textContent="html{background:${darkBackground}!important;color-scheme:dark}body{visibility:hidden}";document.head.appendChild(s)}}}catch(e){}})();`;
}

/** createThemeInitScript() with the default dark background (#000). */
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
