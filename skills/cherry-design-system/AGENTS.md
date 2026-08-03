# Cherry Design System - agent guide

This project uses **Cherry** (`cherry-styled-components`), a React + TypeScript + styled-components v6 component library with built-in theming, dark mode, and responsive breakpoints. When you write or edit UI here, follow these rules. They are not optional.

This file is self-contained. For the full API and token tables, see `skills/cherry-design-system/references/` (`setup.md`, `theme.md`, `components.md`, `recipes.md`). Those are an offline snapshot; [cherry.al](https://cherry.al) is the live source of truth. When a detail is missing or an API may have changed, fetch it: `https://cherry.al/llms.txt` (index), `https://cherry.al/llms-full.txt` (everything), or append `.md` to any page (e.g. `https://cherry.al/code/button.md`). Fetch the full output; do not truncate it.

## The 5 rules

1. **Every button is a Cherry button.** `<Button>` for actions, `<IconButton aria-label="...">` for icon-only. Never raw `<button>` or another library's button.
2. **Every form control is a Cherry component:** `Input`, `Select`, `Textarea`, `Toggle`, `Range`, `Password`, `Dropzone`, `AvatarDropzone`. Checkbox and radio are `<Input type="checkbox">` / `<Input type="radio">` (no separate export). Never raw `<input>`/`<select>`/`<textarea>`.
3. **Never hardcode design values.** Read colors, spacing, radii, shadows, and font sizes from `theme` inside styled-components. Use typography mixins for text and `mq()` for breakpoints.
4. **Styling props are `$`-prefixed** (`$variant`, `$size`, `$fullWidth`, `$error`) and stay within their literal unions (`$size` is only `"default" | "big" | "small"`).
5. **Wrap the app in a Cherry provider,** use layout primitives (`Container`/`Grid`/`Col`/`Flex`/`Box`/`MaxWidth`/`Space`) over ad-hoc divs, and render icons with `<Icon name="..." />`.

## Provider quick start

Nothing renders correctly outside a Cherry provider (the theme resolves there).

```tsx
import {
  CherryThemeProvider,
  Button,
  theme,
  themeDark,
} from "cherry-styled-components";

<CherryThemeProvider theme={theme} themeDark={themeDark}>
  <Button $variant="primary">Hello Cherry</Button>
</CherryThemeProvider>;
```

For Next.js App Router (flash-free SSR) use `ClientThemeProvider` + `StyledComponentsRegistry` + `themeInitScript`; see `references/setup.md`.

## Components

- **Form:** `Button`, `IconButton`, `Input` (+ `type="checkbox|radio|date|email|..."`), `Password`, `Select`, `Textarea`, `Toggle`, `Range`, `Dropzone`, `AvatarDropzone`. Shared props: `$size` (`"default"|"big"|"small"`), `$error`, `$success`, `$fullWidth`, `$label`. `Button` also has `$variant` (`"primary"|"secondary"|"tertiary"`), `$outline`, `$icon`.
- **Layout:** `Container`, `Box`, `Grid` (`$cols`, `$gap`), `Col` (`$span`), `Flex` (`$justifyContent`, `$alignItems`, `$direction`, `$gap`), `MaxWidth`, `Space` (`$size`). All take responsive variants per breakpoint (`$xs...` through `$xxxl...`).
- **Interactive:** `Accordion` (`title`, `defaultOpen`/`open`), `Tabs` + `TabContent` (`title`), `Modal` (controlled via `$isOpen`/`$onClose`, `$title`, `$width`), Toast (`ToastNotificationsProvider` + `<ToastNotifications />` + `useToastNotifications()`), `ThemeToggle`.
- **Display:** `Avatar` (`$src`/`$name`/`$icon`, `$size`, `$color`), `Callout` (`$type` `"note"|"info"|"warning"|"danger"|"success"`), `Prose` (styles rendered markdown, `$compact`), `Spinner` (loading indicator, default `LoaderCircle`).
- **Chat kit:** `ChatProvider` + `useChat` (headless: transcript, open/close, streaming; the app supplies the transport via `onSend(question, { signal, history, setAssistant })` - Cherry never fetches), `ChatPanel` (`$variant` `"drawer"|"inline"|"fullscreen"`), `ChatMessageList`, `ChatMessage` (`$role`, `$avatar`), `ChatInput` and `ChatLauncher` (opt-in `$glow`), `ChatTyping`, `ChatSources`/`ChatSource`. See `references/components.md` for wiring.
- **Icon:** `<Icon name="ChevronDown" size={20} />` - any lucide-react icon by PascalCase name.

## Theme cheat-sheet

Access tokens via the `theme` prop in styled-components: `${({ theme }) => theme.colors.primary}`.

- **Semantic colors:** `colors.dark` = ink/foreground (black in light, white in dark), `colors.light` = surface/background (white in light, black in dark). They swap in dark mode. Text is always `colors.dark`; surfaces are always `colors.light`.
- **Brand:** `colors.primary` (accent/actions) with `primaryLight` (rings/tint) and `primaryDark` (hover). Same for `secondary`, `tertiary`.
- **Neutrals:** `grayLight` (borders), `gray` (placeholder/disabled), `grayDark` (labels/secondary text).
- **Status:** `colors.success`, `error`, `warning`, `info`.
- **Spacing:** `spacing.radius.xs` 6px / `.lg` 12px / `.xl` 30px; `spacing.padding`, `spacing.gridGap` (20px mobile, 40px desktop); `spacing.maxWidth`.
- **Shadows:** `shadows.xs`..`shadows.xl`. **Type:** mixins `styledH1..H6`, `styledHero1..3`, `styledText`, `styledSmall`, etc.
- **Breakpoints:** `mq("xs"|"sm"|"md"|"lg"|"xl"|"xxl"|"xxxl")` = min-width media query (`lg` = 992px). Mobile-first.
- **Custom shades:** derive from a token with the exported `tint(color, %)` / `shade(color, %)` / `alpha(color, %)` helpers; do not invent hex.
- Use `theme.isDark` only when a value genuinely differs per theme.

## Custom components

When Cherry has no component for a need, build a styled-component that reads theme tokens and reuses Cherry mixins (`resetButton`, `interactiveStyles`, typography mixins, `mq()`) with `$`-prefixed variant props. Do not fall back to hardcoded CSS. Example in `references/recipes.md`.

## Do not

- Use raw `<button>`/`<input>`/`<select>`/`<textarea>`, or import another UI library (MUI, Chakra, shadcn, ...).
- Hardcode `#hex`/named colors, `px` font sizes, or literal breakpoints. Use tokens, mixins, and `mq()`.
- Use inline `style={{ ... }}` for styling. It bypasses the theme (no tokens, no dark mode, no hover/focus, no breakpoints); build a `styled` component with theme tokens, or use Cherry layout props (`$padding`, `$gap`, `$fullWidth`).
- Write styling props without the `$` prefix.
- Wrap `Modal` with `styled(Modal)` (it strips the `$`-props); restyle via `className` targeting `.modal-inner`/`.modal-content`/`.modal-title`/`.modal-close`.
- Render Cherry components outside the provider.
