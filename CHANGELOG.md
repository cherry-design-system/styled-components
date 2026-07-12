# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.11] - 2026-07-12

### Added

- `ThemeToggle`: new `$shortcut` prop that binds the Cmd/Ctrl+Shift+L keyboard shortcut while the toggle is mounted, flipping between the light and dark theme without a click. Off by default, so existing toggles are unaffected. Like the button's click handler it calls `toggleTheme` from `ThemeContext`, and it stays a no-op until a `themeDark` is passed to the provider. The listener is bound to `window` and removed on unmount; it requires Shift and forbids Alt so it stays clear of the browser's Cmd/Ctrl+L address-bar shortcut

## [0.2.10] - 2026-07-08

### Removed

- **Breaking:** removed the custom `IconCheck`, `IconArrow`, and `IconCalendar` exports. They were hand-rolled SVGs duplicating existing Lucide glyphs. The form controls that used them now render the built-in `Icon` component instead: the checkbox check mark uses `Check`, the `Select` dropdown arrow uses `ChevronDown`, and the date/time calendar glyph uses `CalendarDays`. These icons now take their color from `currentColor` (the theme's primary color, applied via CSS) rather than a hard-coded stroke. The checkbox check mark renders with a 6px stroke, and the `Select` arrow now sizes to 24px to match the date/time calendar glyph. Replace any direct usage with `<Icon name="Check" />`, `<Icon name="ChevronDown" />`, or `<Icon name="CalendarDays" />`

## [0.2.9] - 2026-07-06

### Added

- AI assistant skill in `skills/cherry-design-system/`: a [Claude Agent Skill](https://docs.claude.com/en/docs/claude-code/skills) (`SKILL.md` plus `references/` covering setup, theme tokens, the full component API, and recipes) that teaches LLMs to build with Cherry correctly, always using Cherry components for buttons and form controls, reading design values from the theme, and wiring the provider. Includes a portable `AGENTS.md` for other agents and points at the live docs (`cherry.al/llms.txt` and per-page `.md`). Documentation only, not part of the published npm package; install with `npx skills add cherry-design-system/styled-components`

### Changed

- `Accordion`: the clickable title is now a native `<button type="button">` (with a button reset) instead of an `<h3 role="button">`, so it is keyboard-focusable and Enter/Space-activatable natively; `aria-expanded` is preserved, and a `:focus-visible` outline in the primary color was added for keyboard users
- `Tabs`: tab labels bumped to `font-weight: 700` (was 600); the `:focus-visible` ring was retuned (corner `radius.xs` → `radius.lg`, inset `-4px` → `-2px`)
- `Input`: removed the unused `children` prop from `InputProps`. `Input` renders a void `<input>`, so any children were silently ignored; dropping it from the type turns that into a compile-time error

## [0.2.8] - 2026-07-04

### Fixed

- `Input`: small-size date and time inputs now render the calendar icon at 18px instead of the default 24px, with the native `::-webkit-calendar-picker-indicator` click target repositioned to stay aligned with the visible icon

## [0.2.7] - 2026-07-04

### Fixed

- `Dropzone` / `AvatarDropzone`: text now inherits the surrounding font family instead of pinning the theme's `fonts.text`, matching the `font-family: inherit` convention used by Button, Input, Select, and Textarea. The root `<button>` elements set `font-family: inherit` explicitly, since buttons don't inherit fonts by default

## [0.2.6] - 2026-07-04

### Fixed

- `Toast`: centered stacks no longer wrap their text prematurely. The notifications list is now a full-width strip (20px side margins) for every alignment instead of being anchored at `left: 50%`, which capped its shrink-to-fit width at about half the viewport, most visibly on mobile
- `Toast`: the notification strip and rows no longer swallow clicks on page content beside them; `pointer-events` is re-enabled only on the visible pill itself

## [0.2.5] - 2026-07-03

### Changed

- Hover styles apply on all devices again: removed the `@media (hover: hover)` guards around `&:hover` rules in `interactiveStyles`, `errorInteractiveStyles`, `Dropzone`, `AvatarDropzone`, `Tabs`, and `ThemeToggle`

## [0.2.4] - 2026-07-03

### Added

- `Tabs` / `TabContent`: new tabbed-panels component with tablist/tab/tabpanel ARIA semantics, roving-tabindex arrow-key navigation (ArrowLeft/ArrowRight cycle, Home/End jump), and optional controlled selection via `activeTab` + `onTabChange` (`defaultActiveTab` for uncontrolled use)
- `IconButton`: `$active` prop for a toggle-like "on" state (primary border, translucent primary background); reflected as `aria-pressed` when set

### Changed

- `ThemeToggle`: swapped the scale hover/press effects for the shared `interactiveStyles` hover border + focus ring, and aligned the sun/moon icons exactly with the sliding knob

## [0.2.3] - 2026-07-03

### Added

- `Modal`: `style` passthrough on the overlay root, complementing `className` for app-level restyling

### Fixed

- `Modal`: corrected the restyling guidance in the prop docs. `styled(Modal)` cannot forward the `$`-props API, since styled-components strips transient props before they reach the wrapped component; restyle by passing a `className` and targeting the class hooks instead

## [0.2.2] - 2026-07-03

### Added

- `Modal`: `$hideCloseButton` prop to omit the built-in close button
- `Modal`: `className` passthrough on the overlay root for app-level restyling; inner parts expose stable class hooks (`.modal-inner`, `.modal-close`, `.modal-title`, `.modal-content`)
- `Modal`: `role="dialog"`, `aria-modal="true"`, and `aria-label` (from `$title`) on the dialog surface

### Changed

- **Breaking-ish:** `Modal` now unmounts its children once the exit animation finishes instead of keeping them mounted (hidden) while closed. Children such as forms reset their state between openings. The enter/exit motion is unchanged visually (fade + 40px rise) but is now driven by keyframes instead of transitions
- `useOnClickOutside` subscribes its document listener once per mount (latest-ref pattern) instead of re-subscribing whenever callers pass inline ref arrays or callbacks

### Fixed

- `useOnClickOutside` ignores unattached (null) refs instead of suppressing the callback entirely when any ref in the array is not mounted

## [0.2.1] - 2026-07-03

### Added

- `removeNotification(id)` on the toast context, returned by `useToastNotifications` alongside `addNotification`; each toast in `notifications` now carries a unique `id`
- Toast stack is an `aria-live="polite"` region, so screen readers announce new toasts

### Changed

- Toast internals reworked: state and variants are typed `$` props on a new `StyledNotificationItem` instead of className strings, each toast manages its own enter/exit lifecycle, and the space collapse animates the toast's real height via `grid-template-rows` instead of a `max-height` guess, so entering and exiting toasts glide instead of snapping
- Bottom-anchored toasts (`$bottom`) slide up from below instead of dropping down from above

### Fixed

- Dismissed and auto-hidden toasts are removed from state and the DOM after their exit animation instead of accumulating invisibly forever

## [0.2.0] - 2026-07-03

### Added

- `ThemeToggle` component: a pill-shaped sun/moon switch for light and dark mode
- `ClientThemeProvider`: SSR-aware theme provider with flash-free dark mode. Renders the server-resolved theme on first paint, reconciles against the `theme` cookie and OS preference on mount, persists changes to cookie and localStorage (no API route needed), migrates legacy localStorage-only preferences, and keeps the html `dark` class and `theme-color` meta tag in sync. Supports `$initial`, `$themeColor`, and `$globalStyles` props
- `themeInitScript` and `createThemeInitScript(darkBackground)`: blocking head script that seeds the `theme` cookie and prevents the dark-mode flash in browsers without color-scheme client hints (Safari, Firefox). Exported from a server-safe module so it can be used in server components
- `resolveTheme(cookieValue, theme, themeDark)` helper for resolving the `theme` cookie to a theme object in server code
- `toggleTheme()` on `ThemeContext`, provided by both theme providers
- `interactiveStyles` and `errorInteractiveStyles` mixins: hover/focus/active border + focus ring treatment for interactive surfaces, in the primary color and the error red respectively

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
