# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-07-03

### Added

- `ThemeToggle` component: a pill-shaped sun/moon switch for light and dark mode
- `ClientThemeProvider`: SSR-aware theme provider with flash-free dark mode. Renders the server-resolved theme on first paint, reconciles against the `theme` cookie and OS preference on mount, persists changes to cookie and localStorage (no API route needed), migrates legacy localStorage-only preferences, and keeps the html `dark` class and `theme-color` meta tag in sync. Supports `$initial`, `$themeColor`, and `$globalStyles` props
- `themeInitScript` and `createThemeInitScript(darkBackground)`: blocking head script that seeds the `theme` cookie and prevents the dark-mode flash in browsers without color-scheme client hints (Safari, Firefox). Exported from a server-safe module so it can be used in server components
- `resolveTheme(cookieValue, theme, themeDark)` helper for resolving the `theme` cookie to a theme object in server code
- `toggleTheme()` on `ThemeContext`, provided by both theme providers

## [0.1.19] - Released

### Added

- `IconButton` component for icon-only actions
- `Password` component with visibility toggle
- `Modal` component
- `Toast` component with theme-aware shadows
- `Accordion` component
- `Dropzone` and `AvatarDropzone` components for file uploads

## [0.1.18] - 2026-06-28

### Added

- Responsive `$alignItems`, `$alignContent`, and per-breakpoint `$direction` props on `Flex`, backed by new `generateAlignItemsStyles`, `generateAlignContentStyles`, and `generateDirectionStyles` mixins

## [0.1.17] and earlier

Changes prior to 0.1.18 were not tracked in this changelog. See the [git history](https://github.com/cherry-design-system/styled-components/commits/main) for details.
