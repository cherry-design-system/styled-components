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
- **Subpath entries:** modules the barrel does not re-export get their own Vite lib entry, each backing a `package.json` export: `cherry-styled-components/next` (`src/lib/styled-components/registry.tsx`) and `cherry-styled-components/dynamic` (`src/lib/icon-dynamic.tsx`)
- **Vite** config is `vite.config.js` (JS, not TS). Uses `@vitejs/plugin-react-swc` (with `@swc/plugin-styled-components` for displayName/SSR) and `vite-plugin-dts` for declaration generation
- Build is ESM-only with `preserveModules` (one output file per source module under `dist/`); `rollup-plugin-preserve-directives` keeps the `"use client"` directives in the output
- React, React DOM, styled-components and lucide-react are peer dependencies; they (including the `lucide-react/dynamic` subpath) and `next/navigation` are externalized, not bundled
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

### Theming System (`src/lib/utils/theme.ts`, `theme-variables.ts`)

Apps pass two theme objects with real values (light and dark) defining: breakpoints (xs to xxxl), colors (primary/secondary/tertiary + status + optional mode tokens), spacing, shadows, and typography (font sizes, line heights, all responsive). Styled components see one theme for both modes: `createThemeVariables(theme, themeDark)` turns every color and shadow into `var(--cherry-color-<key>)` / `var(--cherry-shadow-<key>)`, fills the mode tokens (`accent`, `link`, `onFilled`, `primaryTint*`, `shadows.toast`) per mode, and builds the stylesheet (light values on `:root`, dark on `:root.dark`).

- `mq()` helper generates `@media screen and (min-width: ...)` queries from breakpoint names
- The mode is the `dark` class on `<html>`; a switch re-renders no styled component, and `.theme-switching` turns transitions off for that frame. `Theme` has no `isDark`: style a mode difference with a mode token, a `:root.dark &` rule, or `modes()` (`src/lib/utils/modes.ts`, which runs an `isDark` interpolation for both modes; `modeValue(light, dark)` is the plain-CSS form). Never do JS color math on theme colors; use `alpha`/`shade`/`tint`
- `ClientThemeProvider` (`src/lib/styled-components/client-theme-provider.tsx`) is the one implementation: renders the variables as a plain `<style data-cherry-theme>` (stylis drops the empty custom properties `modeValue` needs), takes `$initial` (what `useColorMode()` reports during SSR only), `$mode` (pins, stores nothing), `$themeColor`, `$globalStyles`. `CherryThemeProvider` wraps it without the theme-color sync. Without `themeDark` the page stays light
- `color-mode.ts` holds the preference store (light | dark | system): explicit choice in localStorage `themePreference`, legacy localStorage `theme` counts as explicit, else the OS (followed live); the `theme` cookie mirrors the mode and only decides when storage is blocked
- `themeInitScript` / `createThemeInitScript({ themeColor })` (`src/lib/styled-components/theme-init.ts`, server-safe) is an inline `<head>` script that sets the `dark` class before first paint on every load; `resolveTheme(cookieValue, theme, themeDark)` resolves the active theme object in server code
- `ThemeContext` exposes `{ toggleTheme, setPreference }` (stable, no re-render); `useColorMode()` and `useResolvedTheme()` (real values plus `isDark`) re-render on a switch; `ThemeToggle` works under either provider

### Component Categories

- **Form:** Button, Input (also Checkbox/Radio via `type`), Select, Textarea, Toggle, Range, Password, Dropzone, AvatarDropzone. All support `$size`, `$fullWidth`; form inputs also support `$label`, `$error`/`$success`
- **Layout:** Container, Grid, Col, Flex, Box, MaxWidth, Space. All support responsive props per breakpoint (e.g., `$xsCols`, `$lgCols`)
- **Interactive:** Accordion, Modal, Toast (`ToastNotificationsProvider` + `useToastNotifications`), ThemeToggle, IconButton
- **Icon:** `<Icon icon={ImportedGlyph} />` renders an imported lucide component (static, tree-shaken to that glyph, server-rendered). The prop is an `IconComponent`, any component taking `IconGlyphProps`. Internal components import their glyphs from `lucide-react` directly. `$icon`-style props take an `IconSource` (component or rendered element) and render it via `renderIcon`. Name-based rendering lives only in the `cherry-styled-components/dynamic` subpath (`icon-dynamic.tsx`, its own build entry, never imported by the main entry): `DynamicIcon` resolves a name through `lucide-react/dynamic`, so only apps that import the subpath carry lucide's dynamic import map. Never add an import of `icon-dynamic.tsx` to anything the barrel reaches

### Shared Utilities (`src/lib/utils/`)

- **`mixins.tsx`**: CSS helper functions (`resetButton`, `resetInput`, `fullWidthStyles`, `statusBorderStyles`, `formElementHeightStyles`) and responsive style generators (`generateGapStyles`, `generateColsStyles`, etc.)
- **`typography.tsx`**: Pre-built typography CSS mixins (`styledHero1`, `styledH1`, `styledBody`, etc.) using responsive font sizes from the theme
- **`global.tsx`**: `GlobalStyles` factory for base HTML/body resets
- Color manipulation uses native CSS `color-mix()` via the `alpha`/`shade`/`tint` helpers in `mixins.tsx` (no JS color library, so `var(--token)` inputs resolve in the browser)

### SSR Support

`StyledComponentsRegistry` (`src/lib/styled-components/registry.tsx`) uses Next.js `useServerInsertedHTML` for server-side style extraction.

## Code Style

- TypeScript strict mode
- Prettier (`.prettierrc`): double quotes, trailing commas, 2-space indent, semicolons, 80 char line width
- ESLint with TypeScript parser + react-hooks + react-refresh plugins

## Git Commits

When asked to commit, always follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Do not add a Co-Authored-By line.
When asked to commit and push, use the `mr-deployer` agent.
