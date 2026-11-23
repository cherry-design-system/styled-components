// Server-safe theming helpers. Deliberately NOT a "use client" module: these
// are plain values consumed in server components (layout head script, cookie
// resolution), where client-reference proxies would break them.
import type { Theme } from "../utils/theme";

export interface ThemeInitScriptOptions {
  /**
   * The `theme-color` meta value for each mode, so browser chrome (the
   * Safari tab bar, the Android toolbar) matches the page from the first
   * paint. Use the values of the token the provider's `$themeColor` tracks.
   * Pass false to leave the meta alone. Defaults to Cherry's `light` token:
   * white in light mode, black in dark mode.
   */
  themeColor?: { light: string; dark: string } | false;
}

// A value inlined into the script: JSON keeps it a string literal, and
// escaping "<" keeps "</script>" from closing the tag.
const literal = (value: string) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

/**
 * Blocking script for the document <head>. It puts the page in the visitor's
 * mode before the first paint, by setting the `dark` class on <html> that the
 * theme's CSS variables follow, so a server-rendered page arrives in the right
 * mode with nothing hidden. The decision matches the providers': a stored
 * `themePreference` (light, dark or system), else a `theme` entry in
 * localStorage from Cherry before 0.3, else the OS; the `theme` cookie where
 * storage is blocked. The cookie is kept in step with the result, and the
 * `theme-color` meta is set for it (one unconditional tag; media-scoped ones
 * are removed). The provider keeps both in sync after hydration.
 */
export function createThemeInitScript(
  options: ThemeInitScriptOptions = {},
): string {
  const themeColor =
    options.themeColor === undefined
      ? { light: "#ffffff", dark: "#000000" }
      : options.themeColor;
  const meta = themeColor
    ? `var g=document.querySelector('meta[name="theme-color"]:not([media])');if(!g){g=document.createElement("meta");g.name="theme-color";document.head.appendChild(g)}g.content=m==="dark"?${literal(themeColor.dark)}:${literal(themeColor.light)};document.querySelectorAll('meta[name="theme-color"][media]').forEach(function(n){n.remove()});`
    : "";
  return `(function(){try{var r=document.documentElement,o=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",k=document.cookie.split(";").map(function(s){return s.trim()}).find(function(s){return s.indexOf("theme=")===0}),c=k?k.slice(6):null,m;try{var p=localStorage.getItem("themePreference"),t=localStorage.getItem("theme");m=p==="light"||p==="dark"?p:p!=="system"&&(t==="light"||t==="dark")?t:o}catch(e){m=c==="light"||c==="dark"?c:o}if(c!==m)document.cookie="theme="+m+";path=/;max-age=31536000;SameSite=Lax";r.classList.toggle("dark",m==="dark");${meta}}catch(e){}})();`;
}

/** createThemeInitScript() with Cherry's default theme-color (the `light` token). */
export const themeInitScript = createThemeInitScript();

/**
 * Resolves a `theme` cookie value ("light" | "dark") to a theme object.
 * Meant for server code, such as a viewport `themeColor` that should match
 * the visitor's last mode.
 */
export function resolveTheme(
  cookieValue: string | undefined,
  theme: Theme,
  themeDark?: Theme,
): Theme {
  return cookieValue === "dark" && themeDark ? themeDark : theme;
}
