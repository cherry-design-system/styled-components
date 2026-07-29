---
name: cherry-design-system
repo: https://github.com/cherry-design-system/styled-components
description: >
  Cherry Design System - the `cherry-styled-components` npm package (React +
  TypeScript + styled-components v6). Use this skill when building, editing, or
  reviewing any UI in a project that lists `cherry-styled-components` in its
  package.json dependencies or devDependencies, or that imports from
  'cherry-styled-components'. Covers component selection (Button, IconButton,
  Input, Select, Textarea, Toggle, Modal, Tabs, Toast, layout primitives),
  `$`-prefixed styling prop names and their allowed values, theme provider
  wiring, dark mode, responsive breakpoints via mq(), and reading colors,
  spacing, radii, shadows, and typography from theme tokens instead of
  hardcoding them. Also use it to keep every button, input, and other control
  coming from Cherry rather than raw HTML elements or another component library.
license: MIT
---

# Cherry Design System

Cherry is a React + TypeScript + styled-components v6 component library with built-in theming, dark mode, and responsive breakpoints, published as `cherry-styled-components`. This skill teaches you to build apps with it correctly.

Apply this skill in any project that imports from `cherry-styled-components` (check `package.json`). When it applies, the rules below are not optional.

## Latest docs

The bundled `references/` files are an offline snapshot. [cherry.al](https://cherry.al) is the live source of truth. Prefer it when a detail is missing, an API may have changed, or you need an exact current signature.

- Index of every page: `https://cherry.al/llms.txt`
- All docs in one file: `https://cherry.al/llms-full.txt`
- Any page as markdown: append `.md` to its URL, e.g. `https://cherry.al/code/button.md`, `https://cherry.al/code/theme.md`, `https://cherry.al/code/modal.md`

Component code docs live under `/code/<name>` (`/code/button`, `/code/toast`, `/code/theme`, ...); design specs under the top-level slugs (`/buttons`, `/inputs`, `/colors`, ...). Fetch the full output; do not truncate it.

## Core rules

1. **Every button is a Cherry button.** Use `<Button>` (variants, sizes, icons) or `<IconButton>` (icon-only, needs `aria-label`). Never a raw `<button>` or a button from another UI library.

2. **Every form control is a Cherry component.** Use `Input`, `Select`, `Textarea`, `Toggle`, `Range`, `Password`, `Dropzone`, `AvatarDropzone`. Checkbox and radio are `<Input type="checkbox">` / `<Input type="radio">` (there is no separate export). Never a raw `<input>`, `<select>`, or `<textarea>`.

3. **Never hardcode design values.** Read colors, spacing, radii, shadows, and font sizes from the theme inside styled-components: `theme.colors.primary`, `theme.spacing.radius.lg`, `theme.shadows.md`. Use the typography mixins (`styledH1`, `styledText`, ...) for text and `mq("lg")` for breakpoints. `theme.colors.dark` is the ink/foreground and `theme.colors.light` is the surface/background; they swap in dark mode, which is what makes components adapt.

4. **Styling props are `$`-prefixed** (`$variant`, `$size`, `$fullWidth`, `$error`) and must stay within their allowed literal unions (e.g. `$size` is only `"default" | "big" | "small"`).

5. **Wrap the app in a Cherry provider**, use the layout primitives (`Container`, `Grid`, `Col`, `Flex`, `Box`, `MaxWidth`, `Space`) instead of ad-hoc `<div>` + CSS, and render icons with `<Icon name="..." />` (lucide names).

When Cherry has no component for something, build it as a styled-component that reads theme tokens and reuses Cherry mixins (`resetButton`, `interactiveStyles`); do not drop to raw hardcoded CSS. See `references/recipes.md`.

## Quick start

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

## Component index

**Form** (all support `$size`, `$error`/`$success`, `$fullWidth`; labelled ones support `$label`):

| component        | use for                                                  | key props                                                        |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| `Button`         | any action                                               | `$variant`, `$size`, `$outline`, `$fullWidth`, `$icon`, `$error` |
| `IconButton`     | icon-only action                                         | `aria-label` (required), `$size`, `$active`, `$error`            |
| `Input`          | text + all native input types; checkbox/radio via `type` | `$label`, `$icon`, `$iconPosition`                               |
| `Password`       | password with show/hide                                  | `$label` (no `type`/`$icon`)                                     |
| `Select`         | dropdown (`<option>` children)                           | `$label`                                                         |
| `Textarea`       | multi-line text                                          | `$label`, `rows`                                                 |
| `Toggle`         | on/off switch                                            | `$label`                                                         |
| `Range`          | slider                                                   | `$label`, `min`/`max`/`step`                                     |
| `Dropzone`       | multi-file upload                                        | `$prompt`, `$maxFiles`, `onFilesChange`                          |
| `AvatarDropzone` | single circular image                                    | `$size`, `onFileChange`                                          |

**Layout** (responsive props per breakpoint `$xs...$xxxl`):

| component      | use for                                                          |
| -------------- | ---------------------------------------------------------------- |
| `Container`    | centered, max-width, padded page wrapper                         |
| `Box`          | Container + card surface (background, border, radius)            |
| `Grid` / `Col` | CSS grid (`$cols`, `$gap`) and cells (`$span`)                   |
| `Flex`         | flexbox (`$justifyContent`, `$alignItems`, `$direction`, `$gap`) |
| `MaxWidth`     | width constraint                                                 |
| `Space`        | invisible spacer for vertical/horizontal rhythm                  |

**Interactive:** `Accordion`, `Tabs` + `TabContent`, `Modal` (controlled via `$isOpen`/`$onClose`), Toast (`ToastNotificationsProvider` + `<ToastNotifications />` + `useToastNotifications()`), `ThemeToggle`.

**Icon:** `<Icon name="..." />` for any lucide-react icon by PascalCase name.

## Verify your work

After adding or changing UI, type-check and build the app (e.g. `tsc --noEmit`, then the project's build or dev server). Styling props are transient `$`-props, so a typo like `variant` instead of `$variant`, or a value outside the allowed union, does not error: it silently renders an unstyled or default element. Confirm buttons and inputs actually render as Cherry components (styled, themed, correct in dark mode), not bare HTML. Fix warnings before considering the work done.

## Reference files

Load the reference that matches the task:

- **`references/setup.md`** - install, provider wiring (client-only + Next.js SSR), global styles, dark-mode toggle.
- **`references/theme.md`** - full token tables (colors, spacing, shadows, typography), `mq()`, typography mixins, using theme in custom styled-components, white-labeling.
- **`references/components.md`** - exhaustive per-component API: exact prop types, exports, and one example each, including gotchas (Modal `$`-props, Toast provider, `$icon` node-vs-name).
- **`references/recipes.md`** - end-to-end patterns (form, layout, modal, toast, tabs), building a custom on-theme component, and an anti-patterns table.
