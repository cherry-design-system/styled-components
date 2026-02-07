# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cherry Design System — a React component library built with TypeScript and styled-components v6. White-label design system with built-in theming, dark mode, and responsive breakpoints. Published as both ES module and UMD bundle.

## Commands

```bash
pnpm install         # Install dependencies (project uses pnpm)
pnpm run dev         # Start Vite dev server
pnpm run build       # Production build (outputs dist/cherry.js and dist/cherry.umd.cjs)
pnpm run format      # Format with Prettier
```

No test framework is configured.

## Architecture

### Entry Point & Build

- **Library entry:** `src/lib/index.ts` — barrel export of all components and utilities
- **Vite** builds the library with `@vitejs/plugin-react` and `vite-plugin-dts` for declaration generation
- React and React DOM are external (not bundled)
- `src/main.tsx` → `src/App.tsx` is the demo app, not part of the library output

### Component Pattern

Every component follows this structure:

1. Props interface extending native HTML element attributes (e.g., `ButtonProps extends React.ButtonHTMLAttributes`)
2. Styled component with theme-aware CSS
3. `forwardRef` wrapper
4. Named export

**Styled props use `$` prefix** (e.g., `$variant`, `$fullWidth`) to prevent DOM attribute pollution — this is a styled-components v6 convention.

All components include `"use client"` directive for Next.js App Router compatibility.

### Theming System (`src/lib/utils/theme.ts`)

Two complete theme objects (light and dark) defining: breakpoints (xs–xxxl), colors (primary/secondary/tertiary + status), spacing, shadows, and typography (font sizes, line heights — all responsive).

`CherryThemeProvider` (`src/lib/styled-components/theme-provider.tsx`) wraps styled-components' ThemeProvider, handles system dark mode detection, persists preference to localStorage, and toggles a `"dark"` class on `document.documentElement`.

### Component Categories

- **Form:** Button, Input, Select, Textarea, Toggle, Range — all support `$label`, `$size`, `$error`/`$success`, `$fullWidth`
- **Layout:** Container, Grid, Col, Flex, Box, MaxWidth, Space — all support responsive props per breakpoint (e.g., `$xsCols`, `$lgCols`)
- **Icon:** Wrapper around `lucide-react` icons accessed by name string

### Shared Utilities (`src/lib/utils/mixins.tsx`)

CSS helper functions used across components: `resetButton`, `resetInput`, `fullWidthStyles`, `statusBorderStyles`, `formElementHeightStyles`, and responsive style generators (`generateGapStyles`, `generateColsStyles`, etc.).

### SSR Support

`StyledComponentsRegistry` (`src/lib/styled-components/registry.tsx`) uses Next.js `useServerInsertedHTML` for server-side style extraction.

## Code Style

- TypeScript strict mode
- Prettier: double quotes, trailing commas, 2-space indent, semicolons
- ESLint with TypeScript parser + react-hooks + react-refresh plugins

## Git Commits

When asked to commit, always follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Do not add a Co-Authored-By line.
