# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cherry Design System is a React component library built with TypeScript and styled-components v6. White-label design system with built-in theming, dark mode, and responsive breakpoints. Published as ESM only. Requires Node.js v20+ for development.

## Commands

```bash
pnpm install         # Install dependencies (project uses pnpm)
pnpm run dev         # Start Vite dev server
pnpm run build       # Production build (ESM with preserved module structure, entry dist/index.js)
pnpm run format      # Format with Prettier
pnpm run screenshots # Capture component preview screenshots (dev server must be running)
```

No test framework or lint script is configured. ESLint config exists (`.eslintrc.cjs`) but has no `pnpm run lint` script.

## Architecture

### Entry Point & Build

- **Library entry:** `src/lib/index.ts` is the barrel export of all components and utilities
- **Vite** config is `vite.config.js` (JS, not TS). Uses `@vitejs/plugin-react-swc` (with `@swc/plugin-styled-components` for displayName/SSR) and `vite-plugin-dts` for declaration generation
- Build is ESM-only with `preserveModules` (one output file per source module under `dist/`); `rollup-plugin-preserve-directives` keeps the `"use client"` directives in the output
- React, React DOM, and styled-components are peer dependencies; they plus `polished`, `lucide-react`, and `next/navigation` are externalized, not bundled
- `src/main.tsx` / `src/App.tsx` is the demo app, not part of the library output. It also serves `/preview/<name>` routes that render single components in isolation for visual inspection and screenshots (see README for details)
- Path alias: `@/*` maps to `./src/*` (configured in tsconfig.json)

### Component Pattern

Each component is a single file directly under `src/lib/` (flat structure, no subfolders per component). Every component follows this structure:

1. `"use client"` directive at the top (Next.js App Router compatibility)
2. Props interface extending native HTML element attributes (e.g., `ButtonProps extends React.ButtonHTMLAttributes`)
3. Styled component with theme-aware CSS
4. `forwardRef` wrapper with a `Local*` function name (e.g., `LocalButton`)
5. Named export

**Styled props use `$` prefix** (e.g., `$variant`, `$fullWidth`) to prevent DOM attribute pollution. This is a styled-components v6 convention.

### Theming System (`src/lib/utils/theme.ts`)

Two complete theme objects (light and dark) defining: breakpoints (xs to xxxl), colors (primary/secondary/tertiary + status), spacing, shadows, and typography (font sizes, line heights, all responsive).

- `mq()` helper generates `@media screen and (min-width: ...)` queries from breakpoint names
- `CherryThemeProvider` (`src/lib/styled-components/theme-provider.tsx`) wraps styled-components' ThemeProvider, handles system dark mode detection, persists preference to localStorage, and toggles a `"dark"` class on `document.documentElement`. Client-only: first SSR paint is always light
- `ClientThemeProvider` (`src/lib/styled-components/client-theme-provider.tsx`) is the SSR-aware provider for flash-free dark mode: the server resolves the `theme` cookie and passes `$initial`; on mount it reconciles against cookie and OS preference. Persists to the `theme` cookie and localStorage
- `themeInitScript` (`src/lib/styled-components/theme-init.ts`) is an inline `<head>` script that seeds the cookie and prevents the dark-mode flash; `resolveTheme(cookieValue, theme, themeDark)` resolves the active theme object in server code
- Both providers expose `setTheme`/`toggleTheme` via `ThemeContext`; `ThemeToggle` works under either

### Component Categories

- **Form:** Button, Input (also Checkbox/Radio via `type`), Select, Textarea, Toggle, Range, Password, Dropzone, AvatarDropzone. All support `$size`, `$fullWidth`; form inputs also support `$label`, `$error`/`$success`
- **Layout:** Container, Grid, Col, Flex, Box, MaxWidth, Space. All support responsive props per breakpoint (e.g., `$xsCols`, `$lgCols`)
- **Interactive:** Accordion, Modal, Toast (`ToastNotificationsProvider` + `useToastNotifications`), ThemeToggle, IconButton
- **Icon:** Wrapper around `lucide-react` icons accessed by name string

### Shared Utilities (`src/lib/utils/`)

- **`mixins.tsx`**: CSS helper functions (`resetButton`, `resetInput`, `fullWidthStyles`, `statusBorderStyles`, `formElementHeightStyles`) and responsive style generators (`generateGapStyles`, `generateColsStyles`, etc.)
- **`typography.tsx`**: Pre-built typography CSS mixins (`styledHero1`, `styledH1`, `styledBody`, etc.) using responsive font sizes from the theme
- **`global.tsx`**: `GlobalStyles` factory for base HTML/body resets
- **`icons.tsx`**: Icon name mapping for lucide-react
- Color manipulation uses `polished` library (`lighten`, `darken`)

### SSR Support

`StyledComponentsRegistry` (`src/lib/styled-components/registry.tsx`) uses Next.js `useServerInsertedHTML` for server-side style extraction.

## Code Style

- TypeScript strict mode
- Prettier (`.prettierrc`): double quotes, trailing commas, 2-space indent, semicolons, 80 char line width
- ESLint with TypeScript parser + react-hooks + react-refresh plugins

## Git Commits

When asked to commit, always follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Do not add a Co-Authored-By line.
When asked to commit and push, use the `mr-deployer` agent.
