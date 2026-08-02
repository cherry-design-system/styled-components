# Cherry React Library

[![npm version](https://img.shields.io/npm/v/cherry-styled-components.svg?style=flat)](https://www.npmjs.com/package/cherry-styled-components)
[![license](https://img.shields.io/npm/l/cherry-styled-components.svg?style=flat)](https://github.com/cherry-design-system/styled-components/blob/main/LICENSE)

Cherry Design System is a versatile foundation for projects. It offers a white label base, ready-to-use Figma designs, open-source React components, built-in support for theming and dark mode. Explore the [docs](https://cherry.al/) to create delightful user interfaces.

## Installation

Install the package along with its peer dependencies:

```bash
npm install cherry-styled-components react react-dom styled-components
```

## Quick Start

Wrap your app in `CherryThemeProvider` and start using components. The provider injects the global styles and, when you pass `themeDark`, handles dark mode automatically:

```tsx
import {
  Button,
  CherryThemeProvider,
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

The built-in `theme` and `themeDark` objects are a starting point; both are plain objects you can extend or replace to white-label the system. Styled props use a `$` prefix (`$variant`, `$size`, `$fullWidth`) so they never leak into the DOM.

The library ships form components (Button, Input, Select, Textarea, Toggle, Range, Password, Checkbox, Radio, Dropzone, AvatarDropzone), layout primitives (Container, Grid, Col, Flex, Box, MaxWidth, Space), interactive components (Accordion, Modal, Toast, ThemeToggle, Icon, IconButton), content components (Prose, Callout, Avatar), and a chat kit (see below). See the [component docs](https://cherry.al/) for the full API.

## Chat kit

Cherry ships everything needed to build an AI-assistant chat UI, split into a headless provider and presentational components. The provider owns panel state, focus management, the transcript, and streaming bookkeeping; **the app owns the transport** — Cherry never fetches, parses SSE, or assumes an endpoint.

```tsx
import {
  ChatInput,
  ChatLauncher,
  ChatMessage,
  ChatMessageList,
  ChatPanel,
  ChatProvider,
  Prose,
  useChat,
} from "cherry-styled-components";

<ChatProvider
  onSend={async (question, { signal, history, setAssistant }) => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ question, history }),
      signal,
    });
    for await (const text of readMyStream(res)) {
      setAssistant(text); // patches the same assistant bubble on each call
    }
    setAssistant(<Prose $compact>{renderMarkdown(text)}</Prose>, {
      text, // plain-text mirror used for the next request's history
      sources: [{ id: "1", label: "Docs", href: "/docs" }],
    });
  }}
>
  <ChatLauncher $glow />
  <ChatPanel>
    <MyTranscript /> {/* map useChat().messages into ChatMessageList */}
    <ChatInput $glow />
  </ChatPanel>
</ChatProvider>;
```

- `ChatProvider` — headless state: `useChat()` returns `{ isOpen, open, close, toggle, messages, input, setInput, loading, error, send, ask, reset, inputRef }`. Props: `onSend`, `greeting`, `historyLimit`, `shortcut` (Cmd/Ctrl+I by default, `null` to disable), and `$showcase`.
- `$showcase` — demo mode. Chat input matching a showcase command is answered locally with a live rendering of that element; everything else still goes to `onSend` (which becomes optional). `help` lists the commands: `list` (the component catalog), `callout`, `avatar`, `prose`, `sources`, and `typing`. Off by default — without `$showcase` every message goes to the transport.
- `ChatPanel` — the shell. `$variant="drawer"` (fixed side panel, full-screen modal below `lg`), `"inline"` (flows with the page), or `"fullscreen"`. Handles dialog semantics, focus trapping, `inert` siblings, and body scroll locking while modal.
- `ChatMessageList` — scroll container with stick-to-bottom behavior that releases when the reader scrolls up.
- `ChatMessage` — `$role="user"` (filled bubble) or `"assistant"` (full-width, pair with `Prose` for markdown), plus an `$avatar` slot.
- `ChatInput` — auto-growing composer; Enter submits, Shift+Enter breaks the line. `$glow` opts into the animated rainbow border and sparkles.
- `ChatLauncher`, `ChatTyping`, `ChatSources`/`ChatSource` — the "Ask AI" pill, the typing indicator, and the source-chip row.

## Theming

Cherry ships two theme providers:

- `CherryThemeProvider` - the original client-only provider. It resolves the theme from `localStorage` and the OS preference after mount. Simple, but in a server-rendered app the first paint is always the light theme.
- `ClientThemeProvider` - the SSR-aware provider for flash-free dark mode. The server resolves the `theme` cookie and passes `$initial`, so the first paint is already correct. On mount it reconciles against the cookie and OS preference (Safari and Firefox don't send color-scheme client hints, so their first server render can guess wrong) and swaps in place. Theme changes persist to the `theme` cookie and `localStorage` directly; no API route is needed.

Both providers expose `setTheme` and `toggleTheme` through `ThemeContext`, and the `ThemeToggle` component works under either.

A Next.js App Router setup looks like this:

```tsx
// app/layout.tsx (server component)
import { cookies } from "next/headers";
import {
  ClientThemeProvider,
  StyledComponentsRegistry,
  themeInitScript,
} from "cherry-styled-components";
import { theme, themeDark } from "./theme";

export default async function RootLayout({ children }) {
  const cookieTheme = (await cookies()).get("theme")?.value;

  return (
    <html lang="en">
      <head>
        {/* Seeds the theme cookie and prevents the dark-mode flash in
            browsers without color-scheme client hints. */}
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

For the best first-visit experience in Chrome, also opt into color-scheme client hints in your middleware so the very first server render matches the OS preference:

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

`resolveTheme(cookieValue, theme, themeDark)` is exported for other server code that needs the active theme object, e.g. `generateViewport` for the initial `theme-color`.

In a client-only app (like this repo's demo, see `src/main.tsx`), resolve the initial theme synchronously from the cookie, `localStorage`, or `matchMedia` before rendering and pass it as `$initial`.

## AI assistant skill

Cherry ships a guide that teaches Claude and other LLMs to build with the library correctly: use Cherry components for every button and form control, read design values from the theme instead of hardcoding them, and wire up the provider. It lives in [`skills/cherry-design-system`](./skills/cherry-design-system) and is documentation only (it is not part of the published npm package).

Install it with the [`skills` CLI](https://github.com/vercel-labs/skills), a cross-agent installer that supports Claude Code, Cursor, Codex, and many others and detects your agent automatically:

```bash
# add to the current project
npx -y skills add cherry-design-system/styled-components

# preview what would be installed
npx -y skills add cherry-design-system/styled-components --list

# install globally for Claude Code, no prompts
npx -y skills add cherry-design-system/styled-components --skill cherry-design-system -g -a claude-code -y
```

Update later with `npx skills update cherry-design-system`. `skills` is a third-party CLI; if you would rather not use it, an Agent Skill is just a folder, so copy `skills/cherry-design-system` into `.claude/skills/` (per project) or `~/.claude/skills/` (personal). For other agents, put the folder's `AGENTS.md` at your repo root. The `references/` files load on demand. See the [skill README](./skills/cherry-design-system/README.md) for per-tool setup.

## Development

To work on the library itself, clone the repo and use pnpm. Node.js v20+ is required for the dev tooling.

```bash
pnpm install       # Install dependencies
pnpm run dev       # Start the Vite dev server (demo app + previews)
pnpm run build     # Build the library to dist/
pnpm run format    # Format with Prettier
```

## Component Previews

The dev server ships with a preview route that renders a single component in isolation, centered on the page. It is meant for visual inspection and for taking automated screenshots (e.g. with Playwright).

With `pnpm run dev` running:

- `/preview` shows an index page linking to every available preview.
- `/preview/<name>` renders one component centered inside a wrapper with the stable selector `#preview-box`.

The route is handled in `src/main.tsx` and the previews live in `src/preview.tsx`. Both are part of the demo app only and are not included in the library build.

### Available previews

| Name               | Renders                                                |
| ------------------ | ------------------------------------------------------ |
| `accordion`        | Card accordion, open by default                        |
| `accordion-inline` | Inline accordion variant, open by default              |
| `avatar`           | Avatar with initials and icon fallbacks, three sizes   |
| `avatar-dropzone`  | Empty avatar dropzone, default size                    |
| `box`              | Box surface with a placeholder block                   |
| `button`           | Primary filled button                                  |
| `button-secondary` | Secondary filled button                                |
| `button-tertiary`  | Tertiary filled button                                 |
| `button-outline`   | Primary outline button                                 |
| `callout`          | The five callout intents stacked                       |
| `chat`             | Chat drawer with launcher and fake streaming transport |
| `chat-fullscreen`  | Fullscreen chat variant behind a launcher              |
| `chat-glow`        | Chat drawer with the rainbow glow treatment            |
| `chat-inline`      | Inline chat panel embedded in the page                 |
| `chat-input`       | Standalone chat composer                               |
| `chat-input-glow`  | Chat composer with the rainbow glow treatment          |
| `chat-launcher`    | "Ask AI" launcher pill with glow                       |
| `chat-message`     | Static user and assistant messages                     |
| `chat-typing`      | Three-dot typing indicator                             |
| `checkbox`         | Checked checkbox                                       |
| `dropzone`         | Block dropzone with prompt, browse, and hint text      |
| `dropzone-inline`  | Inline dropzone variant                                |
| `flex`             | Flex row with three placeholder blocks                 |
| `grid`             | Three-column grid with a full-width row                |
| `icon`             | Cherry icon at 48px                                    |
| `icon-button`      | Icon button with a settings icon                       |
| `input`            | Text input with label and placeholder                  |
| `modal`            | Modal, already open on a backdrop                      |
| `password`         | Password field with label and placeholder              |
| `prose`            | Markdown-style content with Cherry typography          |
| `radio`            | Checked radio button                                   |
| `range`            | Range slider                                           |
| `select`           | Select with label                                      |
| `textarea`         | Textarea with label and value                          |
| `theme-toggle`     | Pill-shaped sun/moon theme switch                      |
| `toast`            | Success, error, and info toasts, fired on mount        |
| `toggle`           | Checked toggle                                         |

Pure layout primitives with no visual output of their own (Container, Col, MaxWidth, Space) have no preview entry.

### Forcing a theme

Append `?theme=dark` or `?theme=light` to any preview URL to force a theme:

```
/preview/button?theme=dark
```

The value is persisted to the `theme` cookie and `localStorage`, exactly like a `ThemeToggle` click, and the demo resolves it synchronously before the first render. It persists for subsequent navigations in the same browser context, so always pass the parameter explicitly when comparing themes to avoid leakage from a previous visit.

### Custom theme colors

Append `?colors=<URI-encoded JSON>` to any preview URL to override theme colors. The JSON has the shape `{ "default": { "primary": "#BE123C", ... }, "dark": { ... } }` where `default` patches the light theme's colors and `dark` patches the dark theme's. Unknown keys and values that are not valid CSS colors are ignored, and the parameter only applies to preview routes.

### Taking screenshots

`scripts/screenshot-previews.cjs` captures every preview in both themes and writes the framed images used by the documentation site. With the dev server running in another terminal:

```bash
pnpm run dev
pnpm run screenshots
```

For each component it produces `<name>-light.png` and `<name>-dark.png` at 2x resolution (`deviceScaleFactor: 2`), then post-processes every image with sharp:

- Corners are rounded with the theme's `radius.lg` (12px, so 24px at 2x) and made transparent outside the radius.
- A 1px solid border is drawn in the theme's `grayLight` color: `#e5e7eb` for light, `#1a1a1a` for dark.

The border and radius are baked into the PNG rather than applied in CSS so that all images get the identical frame, including the two special captures:

- `modal` overlays the whole viewport, so it is captured as a full-page screenshot to include the backdrop. It is shot on a desktop-size viewport (1100px wide) so the modal's built-in `max-width: 500px` (active from the `lg` breakpoint) applies.
- `toast` renders in a corner outside `#preview-box`, so the toast list element is captured instead, with 40px of padding injected at capture time for breathing room.

Everything else is cropped to the `#preview-box` element. Animated previews (accordion, modal, toast) get a one-second settle delay before capture.

The script drives your installed Chrome through `playwright-core` (no browser download needed) and defaults can be overridden with env vars:

| Variable      | Default                                                        |
| ------------- | -------------------------------------------------------------- |
| `PREVIEW_URL` | `http://localhost:5173/preview`                                |
| `OUT_DIR`     | `../cherry-documentation/public/components`                    |
| `CHROME_PATH` | `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` |
| `THEME_JSON`  | none (path to a JSON file with `default`/`dark` color maps)    |

`THEME_JSON` points at a file like the documentation site's `theme.json`; its colors are passed to the preview via `?colors=` and also drive the baked-in border color (`grayLight`). Example:

```bash
THEME_JSON=../cherry-documentation/theme.json pnpm run screenshots
```

For one-off manual screenshots, target the `#preview-box` selector:

```js
await page.goto("http://localhost:5173/preview/button?theme=light");
await page.locator("#preview-box").screenshot({ path: "button-light.png" });
```

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss Cherry on GitHub](https://github.com/cherry-design-system/styled-components/discussions)

For casual chit-chat with others using Cherry:

[Join the Discord Server](https://discord.gg/6JvcWU5bke)

## License

[MIT](https://github.com/cherry-design-system/styled-components/blob/main/LICENSE)
