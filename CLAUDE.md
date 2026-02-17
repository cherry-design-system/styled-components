# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cherry Design System is a React component library built with TypeScript and styled-components v6. White-label design system with built-in theming, dark mode, and responsive breakpoints. Published as both ES module and UMD bundle. Requires Node.js v20+.

## Commands

```bash
pnpm install         # Install dependencies (project uses pnpm)
pnpm run dev         # Start Vite dev server
pnpm run build       # Production build (outputs dist/cherry.js and dist/cherry.umd.cjs)
pnpm run format      # Format with Prettier
```

No test framework or lint script is configured. ESLint config exists (`.eslintrc.cjs`) but has no `pnpm run lint` script.

## Architecture

### Entry Point & Build

- **Library entry:** `src/lib/index.ts` is the barrel export of all components and utilities
- **Vite** config is `vite.config.js` (JS, not TS). Uses `@vitejs/plugin-react` and `vite-plugin-dts` for declaration generation
- React, React DOM, and styled-components are peer dependencies (externalized, not bundled)
- `src/main.tsx` / `src/App.tsx` is the demo app, not part of the library output
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
- `CherryThemeProvider` (`src/lib/styled-components/theme-provider.tsx`) wraps styled-components' ThemeProvider, handles system dark mode detection, persists preference to localStorage, and toggles a `"dark"` class on `document.documentElement`

### Component Categories

- **Form:** Button, Input, Select, Textarea, Toggle, Range. All support `$size`, `$fullWidth`; form inputs also support `$label`, `$error`/`$success`
- **Layout:** Container, Grid, Col, Flex, Box, MaxWidth, Space. All support responsive props per breakpoint (e.g., `$xsCols`, `$lgCols`)
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
