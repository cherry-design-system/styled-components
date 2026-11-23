# Cherry theme reference

Every color, spacing value, radius, shadow, and font size in a Cherry app comes from the theme object. Read tokens from the theme inside styled-components; do not hardcode raw values. This file is the full token catalog plus the helpers for consuming it.

The two built-in theme objects are `theme` (light) and `themeDark` (dark). Both are plain objects with real values and the same shape (the `Theme` interface), and are passed to the provider. To white-label, extend or replace them while keeping the shape (see the end of this file).

The provider turns the pair into **one theme for both modes**: inside styled components every color and shadow is a CSS variable (`theme.colors.primary` is `var(--cherry-color-primary)`, `theme.shadows.md` is `var(--cherry-shadow-md)`), with the light values on `:root` and the dark ones on `:root.dark`. The mode is the `dark` class on `<html>`, so switching it repaints without rendering any styled component again. The tables below list the values behind the variables.

```ts
import { theme, themeDark, type Theme } from "cherry-styled-components";
```

---

## The most important rule: `dark` and `light` are semantic, not literal

`theme.colors.dark` is the **ink / foreground** color and `theme.colors.light` is the **surface / background** color. They deliberately swap between the two themes:

| token          | light theme | dark theme | meaning                        |
| -------------- | ----------- | ---------- | ------------------------------ |
| `colors.dark`  | `#000000`   | `#ffffff`  | text / foreground ("ink")      |
| `colors.light` | `#ffffff`   | `#000000`  | surface / background ("paper") |

So text is always `theme.colors.dark` and surfaces are always `theme.colors.light`, in **both** themes. Never write `color: #000` or `color: black`; write `color: ${({ theme }) => theme.colors.dark}`. This is what makes a component automatically correct in dark mode.

There is no `theme.isDark` (removed in 0.3): the theme your components see is the same in both modes. When a value genuinely differs between modes, use a mode token, a `:root.dark &` rule or `modes()` (see Light and dark mode below).

---

## Colors

`theme.colors.*`. Three brand families (each with `Light` / base / `Dark`), a neutral gray family, four status colors, and the two semantic ink/surface tokens above.

| token              | light     | dark      |
| ------------------ | --------- | --------- |
| `primaryLight`     | `#91aec4` | `#79C5FF` |
| `primary`          | `#4d6f8b` | `#6198C6` |
| `primaryDark`      | `#194569` | `#339DF4` |
| `secondaryLight`   | `#a4b17b` | `#a4b17b` |
| `secondary`        | `#5c6e46` | `#5c6e46` |
| `secondaryDark`    | `#354c2b` | `#354c2b` |
| `tertiaryLight`    | `#ebccb9` | `#ebccb9` |
| `tertiary`         | `#816b5a` | `#816b5a` |
| `tertiaryDark`     | `#675445` | `#675445` |
| `grayLight`        | `#e5e7eb` | `#1a1a1a` |
| `gray`             | `#9ca3af` | `#454444` |
| `grayDark`         | `#4b5563` | `#808080` |
| `success`          | `#84cc16` | `#84cc16` |
| `error`            | `#ef4444` | `#ef4444` |
| `warning`          | `#eab308` | `#eab308` |
| `info`             | `#06b6d4` | `#06b6d4` |
| `dark`             | `#000000` | `#ffffff` |
| `light`            | `#ffffff` | `#000000` |
| `onPrimary`        | (unset)   | (unset)   |
| `primaryFill`      | (unset)   | (unset)   |
| `primaryFillHover` | (unset)   | (unset)   |
| `accent`           | (filled)  | (filled)  |
| `link`             | (filled)  | (filled)  |
| `onFilled`         | (filled)  | (filled)  |
| `primaryTint*`     | (filled)  | (filled)  |

How Cherry itself uses these (follow the same conventions in your own components):

- **`primary`** is the interactive accent: default button fill, focus rings (via `primaryLight`), links, active tab, slider thumb. `primaryDark` is the hover state, `primaryLight` is the soft ring/tint.
- **`onPrimary`** (optional, unset in the built-in themes) is the label color on a `primary` fill: the primary `Avatar`'s initials, the sent `ChatMessage` bubble's text and the primary `Button`'s label. Unset, those labels take the palette's contrasting end (`light` in the light theme, `dark` in the dark one). Set it when that end does not read on your primary (see White-labeling).
- **`primaryFill`** (optional, unset in the built-in themes) is the fill of those same solid primary surfaces (the primary `Button`, the sent `ChatMessage` bubble, the primary `Avatar`); the filled button's hover is a 10% shade of it. Unset, they fill with `primary`. Set it when `primary` is right for accents (links, rings, outlines, accent text) but too bright to carry a label: the fills take the deeper shade and the accents keep `primary`. `primaryFillHover` (optional) sets that hover shade explicitly; unset, it is `primaryFill` mixed 10% toward black, or `primaryDark` without `primaryFill`.
- **Mode tokens** (optional in your theme objects; the providers fill every one you leave out, per mode, so under a provider they are always set): `accent` (hover and emphasis text: Prose links on hover, ChatSources, ChatLauncher, the ThemeToggle glyph on hover; unset, `primaryDark` in light and `primaryLight` in dark), `link` (links in `GlobalStyles`; unset, `primary` in light and `dark` in dark), `onFilled` (the label on a non-primary fill, and on a primary fill without `onPrimary`; unset, `light` in light and `dark` in dark), `primaryTintHover` / `primaryTintDrop` / `primaryTintActive` (the primary tints behind a hovered or dragged-over Dropzone and AvatarDropzone and an active IconButton; unset, `primary` at 4/5/10% in light and 10/12/18% in dark), and `shadows.toast` (unset, `xs` in light and `sm` in dark). Set one in either theme object to override that mode's default. Read them in your own components wherever the value should differ by mode.
- **`grayLight`** is the default border color for inputs, cards, dividers. **`gray`** is placeholder / disabled text. **`grayDark`** is secondary/label text.
- **status colors** (`success`, `error`, `warning`, `info`) drive `$error`/`$success` states and toast colors.
- Derive shades with the exported `tint` / `shade` / `alpha` helpers rather than inventing hex values. Each takes a percentage: `shade(color, 10)` darkens 10% toward black, `tint(color, 10)` lightens 10% toward white, `alpha(color, 30)` fades to 30% opacity. They emit native CSS `color-mix()`, so any valid CSS color works as input, including `var(--token)`.

  ```tsx
  import styled from "styled-components";
  import { alpha, shade } from "cherry-styled-components";

  const Danger = styled.button`
    background: ${({ theme }) => theme.colors.error};
    box-shadow: 0 0 0 4px ${({ theme }) => alpha(theme.colors.error, 30)};

    &:hover {
      background: ${({ theme }) => shade(theme.colors.error, 10)};
    }
  `;
  ```

---

## Spacing (`theme.spacing.*`)

```
maxWidth: { xs: "1280px", xxxl: "1440px" }   // Container max width
padding:  { xs: "20px",  lg: "40px" }         // Container gutters
radius:   { xs: "6px",   lg: "12px", xl: "30px" }  // corner radii
gridGap:  { xs: "20px",  lg: "40px" }         // Grid/Flex default gap
```

Radius guide: `radius.xs` (6px) inputs/small controls, `radius.lg` (12px) cards/modals/boxes, `radius.xl` (30px) pills (toggles, toast pills). Buttons use a fully-round `100px` radius directly.

```ts
border-radius: ${({ theme }) => theme.spacing.radius.xs};
```

---

## Shadows (`theme.shadows.*`)

Five elevation steps `xs`, `sm`, `md`, `lg`, `xl`. Light shadows are dark rgba; dark-theme shadows are white rgba, so use the token and it adapts.

```ts
box-shadow: ${({ theme }) => theme.shadows.md};
// a different strength per mode: a mode token, or modes() (see Light and dark mode)
box-shadow: ${({ theme }) => theme.shadows.toast}; // xs in light, sm in dark
```

Light values:

| step | value                                                                        |
| ---- | ---------------------------------------------------------------------------- |
| `xs` | `0px 4px 4px 0px rgba(18,18,18,0.04), 0px 1px 3px 0px rgba(39,41,45,0.02)`   |
| `sm` | `0px 4px 4px 0px rgba(18,18,18,0.08), 0px 1px 3px 0px rgba(39,41,45,0.04)`   |
| `md` | `0px 8px 8px 0px rgba(18,18,18,0.16), 0px 2px 3px 0px rgba(39,41,45,0.06)`   |
| `lg` | `0px 16px 24px 0px rgba(18,18,18,0.20), 0px 2px 3px 0px rgba(39,41,45,0.08)` |
| `xl` | `0px 24px 32px 0px rgba(18,18,18,0.24), 0px 2px 3px 0px rgba(39,41,45,0.12)` |

---

## Fonts (`theme.fonts.*`)

```
text: "Inter"   head: "Inter"   mono: "monospace"
```

The provider's `GlobalStyles` already sets `body { font-family: "Inter", sans-serif }`, so components inherit it. Load the Inter webfont yourself (e.g. `next/font` or a `<link>`) if you want the real typeface; otherwise it falls back to the system sans-serif.

---

## Typography scale (`theme.fontSizes.*`, `theme.lineHeights.*`)

Each scale key has a mobile (`xs`) and desktop (`lg`) value. **Do not read these raw** in most cases: use the typography mixins below, which emit the responsive font-size + line-height together.

Font sizes (`xs` / `lg`):

| key                                    | xs           | lg           |
| -------------------------------------- | ------------ | ------------ |
| `hero1`                                | 72px         | 128px        |
| `hero2`                                | 60px         | 96px         |
| `hero3`                                | 36px         | 72px         |
| `h1`                                   | 40px         | 60px         |
| `h2`                                   | 30px         | 36px         |
| `h3`                                   | 28px         | 30px         |
| `h4`                                   | 26px         | 24px         |
| `h5`                                   | 18px         | 20px         |
| `h6`                                   | 16px         | 18px         |
| `text`                                 | 14px         | 16px         |
| `strong`                               | 14px         | 16px         |
| `small`                                | 12px         | 14px         |
| `blockquote`                           | 16px         | 18px         |
| `code`                                 | 14px         | 16px         |
| `button` / `buttonBig` / `buttonSmall` | 16 / 18 / 14 | 16 / 18 / 14 |
| `input` / `inputBig` / `inputSmall`    | 16 / 18 / 14 | 16 / 18 / 14 |

Line heights follow the same `xs`/`lg` shape (headings ~1.1 to 1.6, body `text` 1.70, controls 1.00). Read the exact numbers from `theme.lineHeights` if you need them; prefer the mixins.

### Typography mixins

Import and apply inside a styled component; each one returns the full responsive `font-size` + `line-height` block:

```ts
import styled from "styled-components";
import { styledH1, styledText, type Theme } from "cherry-styled-components";

const Heading = styled.h1`
  ${({ theme }) => styledH1(theme)};
  color: ${({ theme }) => theme.colors.dark};
`;
```

Available: `styledHero1`, `styledHero2`, `styledHero3`, `styledH1`, `styledH2`, `styledH3`, `styledH4`, `styledH5`, `styledH6`, `styledText`, `styledStrong`, `styledSmall`, `styledBlockquote`, `styledCode`, `styledButton`, `styledButtonBig`, `styledInput`, `styledInputBig`. There is also `createTypographyStyle(key)` to build one for any `fontSizes` key.

---

## Breakpoints and `mq()`

```
xs: 0   sm: 576   md: 768   lg: 992   xl: 1200   xxl: 1440   xxxl: 1920   (px)
```

`mq(name)` returns a min-width media query string. Use it for any custom responsive CSS so your breakpoints match Cherry's:

```ts
import styled from "styled-components";
import { mq } from "cherry-styled-components";

const Panel = styled.div`
  padding: 16px;
  ${mq("lg")} {
    padding: 32px;
  }
`;
// mq("lg") === "@media screen and (min-width: 992px)"
```

Cherry is mobile-first: the base rule is the `xs` value; each `mq()` layers the larger breakpoint on top.

---

## Reusable style mixins (`src/lib/utils/mixins.tsx`)

Import these instead of re-writing the same CSS:

| mixin                                         | use for                                                                                                             |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `resetButton`                                 | strip native button chrome (appearance, border, background, padding, outline) before styling a clickable element    |
| `resetInput`                                  | baseline for a custom text field                                                                                    |
| `interactiveStyles`                           | hover/focus/active border + soft primary focus ring for clickable surfaces (cards, tiles). Pair with `resetButton`. |
| `errorInteractiveStyles`                      | same affordance in the error red, for destructive actions                                                           |
| `fullWidthStyles($fullWidth)`                 | conditional `width: 100%`                                                                                           |
| `statusBorderStyles($error, $success, theme)` | border color for error/success states                                                                               |
| `formElementHeightStyles($size)`              | 40 / 50 / 60px height for `small` / `default` / `big`                                                               |
| `alpha(color, percent)`                       | fade a color to `percent` opacity                                                                                   |
| `shade(color, percent)`                       | darken a color by `percent` toward black                                                                            |
| `tint(color, percent)`                        | lighten a color by `percent` toward white                                                                           |
| `primaryFillColor(theme)`                     | the solid primary fill: the theme's `primaryFill`, else `primary`                                                   |
| `primaryFillHoverColor(theme)`                | that fill on hover: the theme's `primaryFillHover`, else a 10% shade of `primaryFill`, else `primaryDark`           |
| `filledTextColor(theme, fill?)`               | text color on a brand-colored fill; pass `"primary"` for a primary fill so a theme's `onPrimary` applies            |
| `accentColor(theme)`                          | hover and emphasis text: the `accent` mode token                                                                    |
| `linkColor(theme)`                            | the link color: the `link` mode token                                                                               |
| `primaryTintColor(theme, kind)`               | the primary tint behind a `"hover"`, `"drop"` or `"active"` surface: the `primaryTint*` mode token                  |

`alpha` / `shade` / `tint` return a native CSS `color-mix(in srgb, ...)` string rather than a computed hex, so they accept any valid CSS color, including the `var(--cherry-color-...)` values theme colors are. Cherry ships no JS color library, and you must not run one on theme colors: polished's `darken()`, `rgba()`, `readableColor()` and the like cannot parse a `var()`.

Responsive generators used by the layout primitives (rarely needed directly, but available): `generateGapStyles`, `generateColsStyles`, `generateColSpanStyles`, `generatePaddingStyles`, `generateJustifyContentStyles`, `generateAlignItemsStyles`, `generateAlignContentStyles`, `generateDirectionStyles`.

---

## Light and dark mode

Every color and shadow token already follows the mode, so most components need nothing: `color: ${({ theme }) => theme.colors.dark}` is ink in both modes. For a value of your own that differs by mode, pick the first that fits:

1. **A mode token**: `colors.accent`, `link`, `onFilled`, `primaryTintHover` / `primaryTintDrop` / `primaryTintActive`, `shadows.toast`, or their mixins (`accentColor`, `linkColor`, `filledTextColor`, `primaryTintColor`). The providers fill them per mode.
2. **A `:root.dark &` rule**, for a block that only applies in dark mode.
3. **`modes()`**, for a one-off choice. It wraps an interpolation written against `theme.isDark`, runs it once per mode and emits CSS that follows the mode. That `isDark` is supplied by `modes()` (its parameter is a `ModeTheme`); the real theme has none. `modeValue(light, dark)` is the plain-CSS form, a single value that switches with the mode.

```tsx
import styled from "styled-components";
import { modes, modeValue, type Theme } from "cherry-styled-components";

const Panel = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.dark}; /* follows the mode already */
  border: 1px solid
    ${modes(({ theme }) =>
      theme.isDark ? theme.colors.gray : theme.colors.grayLight,
    )};
  box-shadow: ${({ theme }) => theme.shadows.toast}; /* a mode token */
  opacity: ${modeValue("1", "0.9")};

  :root.dark & {
    backdrop-filter: blur(8px);
  }
`;
```

Never read `theme.isDark` (it is gone, and TypeScript flags it), never branch a style on the mode in JS, and never run JS color math on theme colors. Use `alpha` / `shade` / `tint` for derived shades.

When JS needs the mode or a real color, for something CSS does not style (a canvas, a chart library, an editor theme), use the hooks. Components that call them render again on a switch, so use them only there:

- `useResolvedTheme()`: the theme with real values (hex, not `var()`) for the mode in force, plus `isDark`.
- `useColorMode()`: `{ mode, preference, setPreference, toggleTheme }`, where `mode` is `"light" | "dark"` and `preference` adds `"system"`.

```tsx
import { useResolvedTheme } from "cherry-styled-components";

function useChartColors() {
  const theme = useResolvedTheme();
  return { line: theme.colors.primary, grid: theme.colors.grayLight };
}
```

`createThemeVariables(theme, themeDark?)` is what the providers call: it returns `{ theme, light, dark, css }` (the variable theme, both resolved palettes, and the stylesheet). It is server-safe; call it yourself only to read the palettes or render the stylesheet in server code.

---

## White-labeling: making the theme your own

`theme` and `themeDark` are just objects. To rebrand, spread the defaults and override the tokens you care about (usually the `primary` family), then pass your objects to the provider:

```ts
// app/theme.ts
import {
  theme as base,
  themeDark as baseDark,
  type Theme,
} from "cherry-styled-components";

export const theme: Theme = {
  ...base,
  colors: {
    ...base.colors,
    primaryLight: "#f9a8d4",
    primary: "#be123c",
    primaryDark: "#881337",
  },
};

export const themeDark: Theme = {
  ...baseDark,
  colors: {
    ...baseDark.colors,
    primaryLight: "#fb7185",
    primary: "#e11d48",
    primaryDark: "#f43f5e",
  },
};
```

You may also change spacing, radii, fonts, or the type scale the same way. Keep the `Theme` shape intact so every component keeps type-checking.

**Bright primaries: a deeper fill, a light label.** Labels on a primary fill default to `light` in the light theme and `dark` (white) in the dark theme. If your primary is a bright color in a mode (an orange, a yellow, a lime), white text on it fails contrast (often around 2.5:1, against WCAG AA's 4.5:1). Usually no single color works as both: one bright enough for accent text on a dark page (4.5:1 there) is too bright to carry a light label. Split the jobs. Keep `primary` bright for accents, give the solid fills a deeper `primaryFill`, and set `onPrimary` to the light label that reads on it:

```ts
export const themeDark: Theme = {
  ...baseDark,
  colors: {
    ...baseDark.colors,
    primary: "#ff7a1a", // accents: links, rings, accent text (7.5:1 on the page)
    primaryFill: "#ba440d", // buttons, sent bubbles, avatars
    onPrimary: "#faf8f6", // the label on primaryFill: 5:1
  },
};
```

(A dark `onPrimary` on the bright primary, with no `primaryFill`, also passes contrast, but it puts dark text on the orange fills in dark mode only, and those labels look inconsistent between modes.)

The primary `Avatar`, the sent `ChatMessage` bubble and the primary `Button` pick both up. In your own components, fill a labelled primary surface with `primaryFillColor(theme)` (hover: `primaryFillHoverColor(theme)`) and color its text with `filledTextColor(theme, "primary")` , never `theme.colors.primary` and `theme.colors.light`, so the theme's settings apply. Fills with no label on them (dots, bars, rings, slider tracks) stay on `primary`.

Write white-label themes with real values in both objects; the provider makes the variables. Do not put `isDark` in a theme object (the `Theme` type no longer has it).

Rule of thumb: when a design hands you a raw value, map it to the nearest existing token, or add a token to the theme. Do not hardcode the raw value in a component.
