# Cherry setup and theming

Cherry needs one thing to work: the app must be wrapped in a Cherry theme provider. The provider injects Cherry's `GlobalStyles`, supplies the theme object to every styled component (so `theme.colors.*` etc. resolve), and manages dark mode. Nothing renders correctly outside a provider.

Pick the provider that matches the app:

- **`CherryThemeProvider`**: client-only apps (Vite/CRA/SPA). Simplest. In a server-rendered app the first paint is always light, then it corrects on mount (a dark-mode flash).
- **`ClientThemeProvider`**: server-rendered apps (Next.js App Router). Flash-free dark mode via a `theme` cookie resolved on the server.

---

## Install

Cherry is ESM-only and ships React, React DOM, and styled-components as peer dependencies. Install all four:

```bash
npm install cherry-styled-components react react-dom styled-components
# or: pnpm add / yarn add
```

`lucide-react` and `next/navigation` are also externalized by the build; `lucide-react` comes in as a transitive dep. If your bundler complains about a missing peer, install `lucide-react` explicitly.

---

## Client-only app (Vite / CRA / SPA)

Wrap the root once. Pass both `theme` and `themeDark` to enable dark mode (the provider detects the OS preference and `localStorage.theme`, toggles a `dark` class on `<html>`, and persists the choice).

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

To avoid the initial dark-mode flash in a client-only app, you can instead use `ClientThemeProvider` and resolve the initial theme synchronously before rendering (from the cookie, `localStorage`, or `matchMedia`), passing it as `$initial`. See this repo's `src/main.tsx` for that pattern.

`CherryThemeProvider` props: `{ theme: Theme; themeDark?: Theme; children }`. Omit `themeDark` for a light-only app.

---

## Next.js App Router (SSR, flash-free)

Four pieces work together:

1. `themeInitScript` in `<head>`: a blocking script that seeds the `theme` cookie from the OS preference and, on a dark first paint, hides the body and rewrites `<meta name="theme-color">` so neither the page nor the browser chrome flashes the light server render.
2. `StyledComponentsRegistry`: collects styled-components styles during SSR (`useServerInsertedHTML`).
3. `ClientThemeProvider`: renders with the server-resolved theme first (no flash), then reconciles against the cookie and OS preference on mount.
4. The `theme` cookie, read in the server layout and passed as `$initial`.

```tsx
// app/layout.tsx  (server component)
import { cookies } from "next/headers";
import {
  ClientThemeProvider,
  StyledComponentsRegistry,
  themeInitScript,
} from "cherry-styled-components";
import { theme, themeDark } from "./theme"; // your own theme objects

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieTheme = (await cookies()).get("theme")?.value;

  return (
    <html lang="en">
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
| `themeDark`     | `Theme`                          | -         | dark theme object (omit for light-only)                                  |
| `$initial`      | `"light" \| "dark"`              | `"light"` | server-resolved first-paint theme (from the cookie)                      |
| `$themeColor`   | `keyof Theme["colors"] \| false` | `"light"` | keeps `<meta name="theme-color">` in sync with the active theme          |
| `$globalStyles` | `boolean`                        | `true`    | render Cherry's `GlobalStyles`; pass `false` if the app supplies its own |

Theme changes persist to the `theme` cookie (1 year) and `localStorage` automatically. No API route is needed.

### Optional: correct first paint in Chrome

For the best first-visit experience in Chrome, opt into color-scheme client hints in middleware so the very first server render already matches the OS preference:

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

`createThemeInitScript(darkBackground, darkThemeColor)` lets you customize the pre-hydration dark background color (defaults to `#000`) and the `<meta name="theme-color">` value the script writes on a dark first visit (defaults to `darkBackground`); `themeInitScript` is the default-configured version. When the provider uses a non-default `$themeColor`, pass that token's dark value as `darkThemeColor` so the pre-hydration tint matches — e.g. `createThemeInitScript(themeDark.colors.light, themeDark.colors.primary)` for `$themeColor="primary"`.

---

## Dark mode toggle

Both providers expose `setTheme` and `toggleTheme` through `ThemeContext`, and the `ThemeToggle` component works under either. Drop it anywhere inside the provider:

```tsx
import { ThemeToggle } from "cherry-styled-components";

<ThemeToggle />;
```

To drive the theme from your own control, read the context:

```tsx
import { useContext } from "react";
import { ThemeContext } from "cherry-styled-components";

const { toggleTheme, setTheme } = useContext(ThemeContext);
```

---

## Global styles

The provider renders `GlobalStyles` for you (HTML/body resets, box-sizing, Inter font-family, heading/link/list resets, an `hr` style). You do not need to add your own reset. If your app already has a global reset and you want Cherry to skip its own, pass `$globalStyles={false}` to `ClientThemeProvider`.

Load the Inter webfont in your app (e.g. `next/font/google` or a stylesheet) if you want the actual Inter typeface; Cherry only sets the font-family, it does not bundle the font.
