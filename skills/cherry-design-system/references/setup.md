# Cherry setup and theming

Cherry needs one thing to work: the app must be wrapped in a Cherry theme provider. The provider injects Cherry's `GlobalStyles`, supplies the theme to every styled component (so `theme.colors.*` etc. resolve), and manages dark mode. Nothing renders correctly outside a provider.

Both providers take a light `theme` and an optional `themeDark` (plain objects with real values) and share one implementation. They turn the pair into one theme whose colors and shadows are CSS variables, render the values as a `<style data-cherry-theme>` (light on `:root`, dark on `:root.dark`), and switch the mode with the `dark` class on `<html>`, so a switch re-renders no styled component. Without `themeDark` the page stays light.

- **`ClientThemeProvider`**: the full provider, for any app. Also keeps `<meta name="theme-color">` in sync (`$themeColor`) and can skip the global styles (`$globalStyles`).
- **`CherryThemeProvider`**: the same provider without the `theme-color` sync. Props: `theme`, `themeDark`, `$mode`.

In both, render `themeInitScript` before the first paint (see below) so the page starts in the visitor's mode.

---

## Install

Cherry is ESM-only and ships React, React DOM, and styled-components as peer dependencies. Install all four:

```bash
npm install cherry-styled-components react react-dom styled-components
# or: pnpm add / yarn add
```

`lucide-react` is also externalized by the build and comes in as a transitive dep. If your bundler complains about a missing peer, install `lucide-react` explicitly.

Nothing under the `cherry-styled-components` root import touches Next, so Vite, CRA, Remix, and plain Rollup consumers need no Next install and no bundler externals. The single Next-dependent export, `StyledComponentsRegistry`, lives behind the `cherry-styled-components/next` subpath and is the only thing that resolves `next/navigation`.

---

## Client-only app (Vite / CRA / SPA)

Wrap the root once. Pass both `theme` and `themeDark` to enable dark mode: the provider follows the OS preference until the visitor picks a mode, stores that choice in `localStorage` (`themePreference`), and sets the `dark` class on `<html>`.

```tsx
import {
  CherryThemeProvider,
  Button,
  theme,
  themeDark,
} from "cherry-styled-components";

export default function App() {
  return (
    <CherryThemeProvider theme={theme} themeDark={themeDark}>
      <Button $variant="primary">Hello Cherry</Button>
    </CherryThemeProvider>
  );
}
```

The provider sets the class after mount. To have the first paint in the right mode, run `themeInitScript` before rendering (this repo's `src/main.tsx` does this):

```ts
import { themeInitScript } from "cherry-styled-components";

const init = document.createElement("script");
init.textContent = themeInitScript;
document.head.appendChild(init); // an inline script runs as soon as it is inserted
```

`CherryThemeProvider` props: `{ theme: Theme; themeDark?: Theme; $mode?: "light" | "dark"; children }`. Omit `themeDark` for a light-only app.

---

## Next.js App Router (SSR)

Four pieces work together:

1. `themeInitScript` in `<head>`: a blocking script that, on every load, decides the mode the same way the provider does (stored preference, else the OS) and sets the `dark` class on `<html>` before the first paint. It also keeps the `theme` cookie and `<meta name="theme-color">` in step. Nothing is hidden: the server render's colors are CSS variables, so they are right as soon as the class is.
2. `StyledComponentsRegistry`: collects styled-components styles during SSR (`useServerInsertedHTML`). Imported from `cherry-styled-components/next`, not the package root, because it is the only export that depends on Next.
3. `ClientThemeProvider`: renders the theme variables and keeps the class, cookie and meta in sync after hydration.
4. Optionally, the `theme` cookie read in the server layout and passed as `$initial`. It only sets the mode `useColorMode()` reports during the server render; the colors never depend on it.

```tsx
// app/layout.tsx  (server component)
import { cookies } from "next/headers";
import { StyledComponentsRegistry } from "cherry-styled-components/next";
import { ClientThemeProvider, themeInitScript } from "cherry-styled-components";
import { theme, themeDark } from "./theme"; // your own theme objects

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieTheme = (await cookies()).get("theme")?.value;

  return (
    // The init script sets the `dark` class before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientThemeProvider
            theme={theme}
            themeDark={themeDark}
            $initial={cookieTheme === "dark" ? "dark" : "light"}
          >
            {children}
          </ClientThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
```

`ClientThemeProvider` props:

| prop            | type                             | default   | purpose                                                                  |
| --------------- | -------------------------------- | --------- | ------------------------------------------------------------------------ |
| `theme`         | `Theme` (**required**)           |           | light theme object                                                       |
| `themeDark`     | `Theme`                          | -         | dark theme object (omit for light-only: the page stays light)            |
| `$initial`      | `"light" \| "dark"`              | `"light"` | the mode `useColorMode()` reports during the server render only          |
| `$mode`         | `"light" \| "dark"`              | -         | pins the mode; nothing is stored and toggling does nothing               |
| `$themeColor`   | `keyof Theme["colors"] \| false` | `"light"` | keeps `<meta name="theme-color">` on this theme color for the mode       |
| `$globalStyles` | `boolean`                        | `true`    | render Cherry's `GlobalStyles`; pass `false` if the app supplies its own |

The visitor's preference is `"light"`, `"dark"` or `"system"`. An explicit choice is stored in `localStorage` as `themePreference` (a `theme` entry from Cherry before 0.3 also counts as explicit); without one the page follows the OS, live. The mode in force is mirrored to the `theme` cookie (1 year), which only decides the mode when storage is blocked. No API route is needed.

The theme objects you pass from a server component must be your own: Cherry's default `theme` / `themeDark` exports come from a `"use client"` module, so server code cannot read their values. `createThemeVariables`, `modeValue`, `createThemeInitScript`, `themeInitScript` and `resolveTheme` are server-safe.

### Optional: the mode on a first visit in Chrome

The init script gets the colors right on every visit. If components read `useColorMode()` during the server render, opt into color-scheme client hints in middleware so the `theme` cookie (and so `$initial`) is set on a first visit in Chrome too:

```ts
// middleware.ts
res.headers.set("Accept-CH", "Sec-CH-Prefers-Color-Scheme");
res.headers.set("Vary", "Sec-CH-Prefers-Color-Scheme");
res.headers.set("Critical-CH", "Sec-CH-Prefers-Color-Scheme");

const hint = req.headers.get("Sec-CH-Prefers-Color-Scheme");
if (!req.cookies.get("theme")?.value && hint) {
  res.cookies.set("theme", hint === "dark" ? "dark" : "light", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
```

### `resolveTheme` for server-resolved theme color

`resolveTheme(cookieValue, theme, themeDark?)` returns the active theme object in server code (returns `themeDark` when the cookie is `"dark"` and a dark theme is given, else `theme`). Use it in `generateViewport` to set the initial `theme-color`:

```ts
import { cookies } from "next/headers";
import { resolveTheme } from "cherry-styled-components";
import { theme, themeDark } from "./theme";

export async function generateViewport() {
  const cookieTheme = (await cookies()).get("theme")?.value;
  const active = resolveTheme(cookieTheme, theme, themeDark);
  return { themeColor: active.colors.light };
}
```

`createThemeInitScript(options?)` builds a custom init script; `themeInitScript` is `createThemeInitScript()`. Its one option, `themeColor`, is the `<meta name="theme-color">` value per mode: `{ light, dark }`, defaulting to Cherry's `light` token (`#ffffff` / `#000000`), or `false` to leave the meta alone. When the provider uses a non-default `$themeColor`, pass that token's values so the first paint matches:

```ts
import { createThemeInitScript } from "cherry-styled-components";
import { theme, themeDark } from "./theme";

// for <ClientThemeProvider $themeColor="primary" ...>
export const initScript = createThemeInitScript({
  themeColor: { light: theme.colors.primary, dark: themeDark.colors.primary },
});
```

The old positional form, `createThemeInitScript(darkBackground, darkThemeColor)`, is gone since 0.3.

---

## Dark mode toggle

Both providers expose `toggleTheme` and `setPreference` through `ThemeContext`, and the `ThemeToggle` component works under either. Drop it anywhere inside the provider:

```tsx
import { ThemeToggle } from "cherry-styled-components";

<ThemeToggle />;
```

To drive the mode from your own control, read the context. `setPreference("light" | "dark" | "system")` picks a mode or hands it back to the OS; there is no `setTheme`. The context value never changes, so reading it does not re-render on a switch:

```tsx
import { useContext } from "react";
import { ThemeContext } from "cherry-styled-components";

const { toggleTheme, setPreference } = useContext(ThemeContext);
```

To show the current mode or preference (a selected state, a label), use `useColorMode()`, which returns `{ mode, preference, setPreference, toggleTheme }` and re-renders on a switch:

```tsx
import {
  Select,
  useColorMode,
  type ColorModePreference,
} from "cherry-styled-components";

function ModePicker() {
  const { preference, setPreference } = useColorMode();
  return (
    <Select
      value={preference}
      onChange={(e) => setPreference(e.target.value as ColorModePreference)}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </Select>
  );
}
```

Pass `$mode="light"` or `$mode="dark"` to a provider to pin the mode (a preview, a forced-theme page): nothing is stored and toggling does nothing.

---

## Global styles

The provider renders `GlobalStyles` for you (HTML/body resets, box-sizing, Inter font-family, heading/link/list resets, an `hr` style). You do not need to add your own reset. If your app already has a global reset and you want Cherry to skip its own, pass `$globalStyles={false}` to `ClientThemeProvider`.

Load the Inter webfont in your app (e.g. `next/font/google` or a stylesheet) if you want the actual Inter typeface; Cherry only sets the font-family, it does not bundle the font.
