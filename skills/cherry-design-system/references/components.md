# Cherry component API reference

Every component is a named export from `cherry-styled-components`. Styling props are `$`-prefixed so they never leak to the DOM. All components must render inside a Cherry theme provider (see `setup.md`).

Shared literal unions (used across many components):

- `$size`: `"default" | "big" | "small"` (control height: 50 / 60 / 40px). Omitting `$size` means `"default"`.
- `$variant` (Button only): `"primary" | "secondary" | "tertiary"`.
- `$iconPosition`: `"left" | "right"` (default left).
- Breakpoint prefixes on responsive props: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`.

Import once at the top of a file:

```tsx
import {
  Button,
  Input,
  Select,
  Grid,
  Col,
  Modal,
  useToastNotifications,
} from "cherry-styled-components";
```

---

# Form components

## Button

Renders a `<button>`. Use for **every** clickable action. Extends `React.ButtonHTMLAttributes` (so `onClick`, `type`, `disabled`, etc. work). Exports: `Button`, `ButtonProps`, `buttonStyles`.

| prop            | type                                                                | default     |
| --------------- | ------------------------------------------------------------------- | ----------- |
| `$variant`      | `"primary" \| "secondary" \| "tertiary"`                            | `"primary"` |
| `$size`         | `"default" \| "big" \| "small"`                                     | `"default"` |
| `$outline`      | `boolean`                                                           | filled      |
| `$fullWidth`    | `boolean`                                                           | auto width  |
| `$error`        | `boolean` (destructive red styling, overrides variant)              | -           |
| `$icon`         | `React.ReactNode` (a rendered element, e.g. `<Icon name="Plus" />`) | -           |
| `$iconPosition` | `"left" \| "right"`                                                 | `"left"`    |
| `disabled`      | native `boolean`                                                    | -           |

```tsx
<Button $variant="primary" $size="big" onClick={save}>Save</Button>
<Button $variant="secondary" $outline $icon={<Icon name="Plus" />}>Add item</Button>
<Button $error $icon={<Icon name="Trash2" />} $iconPosition="left">Delete</Button>
```

Note: on Button, `$icon` is a **rendered node**. (On Dropzone/AvatarDropzone it is a lucide **name string**. Do not confuse them.)

## IconButton

Circular icon-only button. Pass the icon as `children`. Sets `type="button"`. `aria-label` is **required**. Exports: `IconButton`, `IconButtonProps`, `iconButtonStyles`.

| prop         | type                                                 | default     |
| ------------ | ---------------------------------------------------- | ----------- |
| `aria-label` | `string` (**required**)                              | -           |
| `$size`      | `"default" \| "big" \| "small"` (box 28 / 32 / 24px) | `"default"` |
| `$error`     | `boolean`                                            | -           |
| `$active`    | `boolean` (on-state; also sets `aria-pressed`)       | -           |

```tsx
<IconButton aria-label="Settings" onClick={openSettings}>
  <Icon name="Settings" />
</IconButton>
```

## Input

Renders a labelled `<input>`. Self-closing. Extends `React.InputHTMLAttributes` (`value`, `onChange`, `placeholder`, `type`, `id`, `required`, etc.). Exports: `Input`, `InputProps`, `StyledInputWrapper`, `StyledLabel`.

| prop                | type                            | notes                                                    |
| ------------------- | ------------------------------- | -------------------------------------------------------- |
| `$label`            | `string`                        | renders a `<label htmlFor={id}>`; pass `id` to link them |
| `$size`             | `"default" \| "big" \| "small"` |                                                          |
| `$error`            | `boolean`                       | red border + `aria-invalid`                              |
| `$success`          | `boolean`                       | green border                                             |
| `$fullWidth`        | `boolean`                       |                                                          |
| `$icon`             | `React.ReactNode`               | inline icon element                                      |
| `$iconPosition`     | `"left" \| "right"`             |                                                          |
| `$wrapperClassName` | `string`                        | class on the wrapper span                                |

```tsx
<Input
  id="email"
  type="email"
  $label="Email"
  placeholder="you@example.com"
  $fullWidth
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<Input id="q" $icon={<Icon name="Search" />} placeholder="Search" />
<Input id="amount" $error type="number" $label="Amount" />
```

### Checkbox and Radio = `<Input type="checkbox">` / `<Input type="radio">`

There is **no** separate Checkbox or Radio export. Use `Input` with a native `type`. Cherry renders a custom styled control (a check SVG for checkbox, a filled dot for radio).

```tsx
<Input type="checkbox" id="tos" $label="I agree to the terms" checked={agreed} onChange={...} />
<Input type="radio" name="plan" id="pro" $label="Pro" value="pro" checked={plan === "pro"} onChange={...} />
```

### Date-family inputs

`type="date" | "datetime-local" | "month" | "week" | "time"` automatically render a calendar icon.

## Password

Password field with a built-in show/hide toggle (an internal `IconButton`). Wraps `Input`. Exports: `Password`, `PasswordProps`.

`PasswordProps = Omit<InputProps, "type" | "$icon" | "$iconPosition">`. So it accepts `$label`, `$size`, `$error`, `$success`, `$fullWidth`, `$wrapperClassName`, plus native input attrs. Do not pass `type` or `$icon`.

```tsx
<Password
  id="pw"
  $label="Password"
  $fullWidth
  value={pw}
  onChange={(e) => setPw(e.target.value)}
/>
```

## Select

Renders a `<select>` with a custom chevron. Pass `<option>` elements as `children`. Extends `React.InputHTMLAttributes<HTMLSelectElement>`. Exports: `Select`, `StyledIconWrapper`. (The `SelectProps` interface is not exported.)

| prop                                                                       | type                   |
| -------------------------------------------------------------------------- | ---------------------- |
| `$label`, `$size`, `$error`, `$success`, `$fullWidth`, `$wrapperClassName` | same meanings as Input |

```tsx
<Select
  id="country"
  $label="Country"
  $fullWidth
  value={country}
  onChange={(e) => setCountry(e.target.value)}
>
  <option value="">Choose...</option>
  <option value="us">United States</option>
  <option value="de">Germany</option>
</Select>
```

## Textarea

Renders a `<textarea>`. Extends `Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "size">`. Exports: `Textarea` (props interface not exported).

| prop                                                                       | type          |
| -------------------------------------------------------------------------- | ------------- |
| `$label`, `$size`, `$error`, `$success`, `$fullWidth`, `$wrapperClassName` | same as Input |
| `rows`                                                                     | `number`      |

```tsx
<Textarea
  id="bio"
  $label="Bio"
  rows={5}
  $fullWidth
  value={bio}
  onChange={(e) => setBio(e.target.value)}
/>
```

## Toggle

A switch (`role="switch"`). Controlled with native `checked` / `onChange`. Extends `React.InputHTMLAttributes<HTMLInputElement>`. Exports: `Toggle` (props interface not exported).

| prop                                                                       | type                    | default      |
| -------------------------------------------------------------------------- | ----------------------- | ------------ |
| `type`                                                                     | `"checkbox" \| "radio"` | `"checkbox"` |
| `$label`, `$size`, `$error`, `$success`, `$fullWidth`, `$wrapperClassName` | same as Input           |              |

```tsx
<Toggle
  id="notify"
  $label="Email notifications"
  checked={notify}
  onChange={(e) => setNotify(e.target.checked)}
/>
```

## Range

Styled `<input type="range">` slider. Native `min` / `max` / `step` / `value` / `onChange` pass through. Extends `Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">`. Exports: `Range` (props interface not exported).

| prop                                                                       | type          |
| -------------------------------------------------------------------------- | ------------- |
| `$label`, `$size`, `$error`, `$success`, `$fullWidth`, `$wrapperClassName` | same as Input |

```tsx
<Range
  id="volume"
  $label="Volume"
  min={0}
  max={100}
  step={5}
  value={volume}
  onChange={(e) => setVolume(+e.target.value)}
/>
```

## Dropzone

Drag-and-drop file input with thumbnails, per-file remove, and validation. Exports: `Dropzone`, `DropzoneProps`, `DropzoneRejection`, `DropzoneRejectionReason`, `matchesAccept`. Extends `Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange" | "children">`.

| prop                                    | type                                                                 | default                      |
| --------------------------------------- | -------------------------------------------------------------------- | ---------------------------- |
| `$prompt`                               | `string`                                                             | `"Drag & drop files here"`   |
| `$browse`                               | `string` (secondary line)                                            | -                            |
| `$hint`                                 | `string`                                                             | -                            |
| `$icon`                                 | lucide **name string** (`React.ComponentProps<typeof Icon>["name"]`) | `"FileUp"`                   |
| `$inline`                               | `boolean` (compact horizontal)                                       | -                            |
| `$maxFiles`                             | `number`                                                             | `Infinity` (when `multiple`) |
| `$maxBytes`                             | `number` (per file)                                                  | -                            |
| `onFilesChange`                         | `(files: File[]) => void`                                            | -                            |
| `onFilesRejected`                       | `(rejections: DropzoneRejection[]) => void`                          | -                            |
| native `accept`, `multiple`, `disabled` |                                                                      |                              |

`DropzoneRejectionReason = "type" | "size" | "count"`. `DropzoneRejection = { file: File; reason: DropzoneRejectionReason }`. `matchesAccept(file, accept?)` mirrors the native accept filter.

```tsx
<Dropzone
  multiple
  accept="image/*"
  $maxFiles={5}
  $maxBytes={5 * 1024 * 1024}
  $prompt="Drop images here"
  $browse="or click to browse"
  $hint="PNG or JPG, up to 5 MB"
  onFilesChange={(files) => setFiles(files)}
  onFilesRejected={(r) => console.warn(r)}
/>
```

## AvatarDropzone

Circular single-image drop target with preview and a remove button. Exports: `AvatarDropzone`, `AvatarDropzoneProps`. Extends `Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange" | "children" | "multiple">`.

| prop                        | type                                                  | default                      |
| --------------------------- | ----------------------------------------------------- | ---------------------------- |
| `$size`                     | `"default" \| "big" \| "small"` (box 96 / 128 / 64px) | `"default"`                  |
| `$icon`                     | lucide **name string**                                | `"User"`                     |
| `$maxBytes`                 | `number`                                              | -                            |
| `aria-label`                | `string`                                              | `"Upload profile picture"`   |
| `onFileChange`              | `(file: File \| null) => void`                        | -                            |
| `onFileRejected`            | `(rejection: DropzoneRejection) => void`              | -                            |
| native `accept`, `disabled` |                                                       | `accept` default `"image/*"` |

```tsx
<AvatarDropzone $size="big" onFileChange={(file) => setAvatar(file)} />
```

---

# Layout components

Prefer these over ad-hoc `<div>` + CSS. All extend `React.HTMLAttributes<HTMLDivElement>` unless noted, and all responsive props exist per breakpoint (`$xs...`, `$sm...`, through `$xxxl...`).

## Container

Centered, max-width, padded wrapper. Exports: `Container`, `ContainerProps`.

| prop                            | type                            | default                 |
| ------------------------------- | ------------------------------- | ----------------------- |
| `$fluid`                        | `boolean` (full width, no max)  | max-width applies       |
| `$textAlign`                    | `"right" \| "left" \| "center"` | -                       |
| `$padding`                      | `number \| "none"`              | theme padding (20/40px) |
| `$xsPadding` ... `$xxxlPadding` | `number \| "none"`              | per breakpoint          |

```tsx
<Container>
  <h1>Page</h1>
</Container>
```

## Box

Same props as `Container` (it is a `styled(Container)`) plus a `light` surface background, `radius.lg` corners, and a `grayLight` border. Use for cards/panels. Exports: `Box`.

```tsx
<Box $padding={24}>Card content</Box>
```

## Grid

CSS grid. Exports: `Grid`.

| prop                      | type               | default                 |
| ------------------------- | ------------------ | ----------------------- |
| `$cols`                   | `number`           | `3`                     |
| `$xsCols` ... `$xxxlCols` | `number`           | per breakpoint          |
| `$gap`                    | `number \| "none"` | theme gridGap (20/40px) |
| `$xsGap` ... `$xxxlGap`   | `number \| "none"` | per breakpoint          |

## Col

A grid cell that can span multiple columns. Exports: `Col`.

| prop                      | type     |
| ------------------------- | -------- |
| `$span`                   | `number` |
| `$xsSpan` ... `$xxxlSpan` | `number` |

```tsx
<Grid $cols={12} $mdCols={12} $xsCols={1}>
  <Col $span={8}>Main</Col>
  <Col $span={4}>Sidebar</Col>
</Grid>
```

## Flex

Flexbox with per-breakpoint control. Exports: `Flex`.

| prop              | type                                                                                            | default       |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------- |
| `$justifyContent` | `"center" \| "flex-start" \| "flex-end" \| "space-between" \| "space-around" \| "space-evenly"` | `flex-start`  |
| `$alignItems`     | `"stretch" \| "center" \| "flex-start" \| "flex-end" \| "baseline"`                             | `stretch`     |
| `$alignContent`   | same set as justify (plus `stretch`)                                                            | `stretch`     |
| `$direction`      | `"row" \| "column" \| "row-reverse" \| "column-reverse"`                                        | `row`         |
| `$gap`            | `number \| "none"`                                                                              | theme gridGap |
| `$wrap`           | `"wrap" \| "nowrap" \| "wrap-reverse"` (no breakpoint variants)                                 | `wrap`        |
| `$fullWidth`      | `boolean` (no breakpoint variants)                                                              | -             |

Every prop except `$wrap` and `$fullWidth` has breakpoint variants (`$xsJustifyContent`, `$lgDirection`, `$mdGap`, etc.).

```tsx
<Flex
  $justifyContent="space-between"
  $alignItems="center"
  $gap={16}
  $xsDirection="column"
  $mdDirection="row"
>
  <span>Left</span>
  <Button>Right</Button>
</Flex>
```

## MaxWidth

Constrains children to a max width. Exports: `MaxWidth`. Not padded/centered like Container; centers via `margin: auto` unless `$m0`.

| prop              | type                                      |
| ----------------- | ----------------------------------------- |
| `$size`           | `number` (base max-width px)              |
| `$xs` ... `$xxxl` | `number` (per breakpoint)                 |
| `$m0`             | `boolean` (`margin: 0` instead of `auto`) |

## Space

Invisible spacer (vertical by default). Self-closing. Exports: `Space`. Not an HTML-attr extension.

| prop              | type                                            |
| ----------------- | ----------------------------------------------- |
| `$size`           | `number \| "none"` (base px; `"none"` hides it) |
| `$xs` ... `$xxxl` | `number \| "none"` (per breakpoint)             |
| `$horizontal`     | `boolean` (horizontal spacer)                   |

```tsx
<Space $size={24} $lg={40} />
```

---

# Interactive components

## Accordion

Collapsible panel. `title` and `children` are **required**. Uncontrolled by default (`defaultOpen`); pass `open` + `onToggle` to control. Exports: `Accordion`, `AccordionProps`. Extends `Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onToggle">`.

| prop          | type                                               | default      |
| ------------- | -------------------------------------------------- | ------------ |
| `title`       | `React.ReactNode` (**required**)                   | -            |
| `children`    | `React.ReactNode` (**required**)                   | -            |
| `$inline`     | `boolean` (flush variant; card variant when false) | card         |
| `defaultOpen` | `boolean` (uncontrolled initial)                   | `false`      |
| `open`        | `boolean` (controlled)                             | uncontrolled |
| `onToggle`    | `(isOpen: boolean) => void`                        | -            |

```tsx
<Accordion title="Shipping details" defaultOpen>
  <p>Ships in 2 to 3 business days.</p>
</Accordion>
```

## Tabs / TabContent

`Tabs` renders a tablist and the active panel. Its children are `TabContent` markers; Cherry reads each child's `title` and `children` (children with an empty/non-string `title` are filtered out). Full ARIA + keyboard nav (arrows, Home, End). Exports: `Tabs`, `TabContent`, `TabsProps`, `TabContentProps`.

Tabs extends `Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">`:

| prop               | type                      | default      |
| ------------------ | ------------------------- | ------------ |
| `defaultActiveTab` | `number` (uncontrolled)   | `0`          |
| `activeTab`        | `number` (controlled)     | uncontrolled |
| `onTabChange`      | `(index: number) => void` | -            |

`TabContentProps`: `{ title: string; children: React.ReactNode }` (both required).

```tsx
<Tabs defaultActiveTab={0} onTabChange={(i) => console.log(i)}>
  <TabContent title="Overview">
    <p>Overview panel</p>
  </TabContent>
  <TabContent title="Specs">
    <p>Specs panel</p>
  </TabContent>
</Tabs>
```

## Modal

Portal dialog rendered into `document.body`. Closes on Escape and outside click. **Controlled with `$`-prefixed props** (unusual: the open/close props carry `$`). Exports: `Modal`, `ModalProps`.

| prop                 | type                             | notes                                           |
| -------------------- | -------------------------------- | ----------------------------------------------- |
| `$isOpen`            | `boolean` (**required**)         | controls visibility                             |
| `$onClose`           | `() => void` (**required**)      | called on Escape / outside click / close button |
| `children`           | `React.ReactNode` (**required**) | body                                            |
| `$title`             | `string`                         | header + `aria-label`                           |
| `$width`             | `number` (px, applies from `lg`) | default 500                                     |
| `$hideCloseButton`   | `boolean`                        | -                                               |
| `className`, `style` |                                  | restyle hooks (see below)                       |

The modal mounts on open and unmounts after the exit animation, so children (e.g. a form) reset between openings. `styled(Modal)` does **not** work for the `$`-props (styled-components strips transient props before they reach the wrapped component); restyle by passing `className` and targeting the stable inner class hooks: `.modal-inner`, `.modal-close`, `.modal-title`, `.modal-content`.

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open</Button>
<Modal $isOpen={open} $onClose={() => setOpen(false)} $title="Confirm">
  <p>Are you sure?</p>
  <Flex $justifyContent="flex-end" $gap={10}>
    <Button $variant="secondary" $outline onClick={() => setOpen(false)}>Cancel</Button>
    <Button $error onClick={confirm}>Delete</Button>
  </Flex>
</Modal>
```

## Toast notifications

Three pieces: wrap the app in `ToastNotificationsProvider`, render one `<ToastNotifications />` (the visual stack), and call `useToastNotifications()` in components to push toasts. Exports: `ToastNotificationsProvider`, `ToastNotifications`, `useToastNotifications`, `ToastNotificationsContext`, `ToastNotificationsProps`, `ToastConfig`, `ToastColor`, `ToastAlign`, `StyledNotifications`, `StyledNotificationItem`.

- `ToastColor = "info" | "success" | "error" | "warning"`, `ToastAlign = "center" | "left" | "right"`.
- `ToastConfig = { color?: ToastColor; autoHide?: number }`. `autoHide` is milliseconds; `0` (default) means sticky (manual dismiss only).
- `useToastNotifications()` returns `{ notifications, addNotification(text, config?), removeNotification(id) }`.
- `ToastNotifications` props: `$align` (default `"center"`), `$bottom` (top when false).

```tsx
// once, high in the tree:
<ToastNotificationsProvider>
  <App />
  <ToastNotifications $align="right" $bottom />
</ToastNotificationsProvider>;

// anywhere inside:
const { addNotification } = useToastNotifications();
addNotification("Saved successfully", { color: "success", autoHide: 4000 });
addNotification("Something went wrong", { color: "error" }); // sticky
```

## ThemeToggle

Pill-shaped sun/moon switch that calls `toggleTheme()` from `ThemeContext`. Must be inside a Cherry provider. Exports: `ThemeToggle`, `ThemeToggleProps`. Extends `React.ButtonHTMLAttributes`.

| prop        | type                                               |
| ----------- | -------------------------------------------------- |
| `$hidden`   | `boolean` (`display: none`)                        |
| `$shortcut` | `boolean` (binds Cmd/Ctrl+Shift+L, off by default) |

```tsx
<ThemeToggle />
```

---

# Icon

`<Icon>` wraps any [lucide-react](https://lucide.dev/icons/) icon, referenced by its **PascalCase name string**. Returns `null` for an unknown name. Exports: `Icon`, `IconProps` (`= keyof typeof icons`, the whole lucide catalog).

| prop         | type                              | notes                                               |
| ------------ | --------------------------------- | --------------------------------------------------- |
| `name`       | lucide name string (**required**) | e.g. `"ChevronDown"`, `"Search"`, `"Trash2"`        |
| `size`       | `number`                          | px                                                  |
| `color`      | `string`                          | defaults to `currentColor`                          |
| `className`  | `string`                          |                                                     |
| `aria-label` | `string`                          | when set, `role="img"`; when omitted, `aria-hidden` |

```tsx
<Icon name="Search" size={20} />
<Icon name="Check" aria-label="Done" />
```

Names verified in use by the library (good examples): `ChevronDown`, `User`, `X`, `File`, `FileUp`, `Eye`, `EyeOff`, `Sun`, `MoonStar`, `CircleCheck`, `CircleX`, `TriangleAlert`, `Info`, `Settings`, `Search`, `Plus`, `Trash2`, `Check`, `CalendarDays`.

---

# Display components

## Avatar

Circular identity badge rendered as a `<span>`. Shows the image when `$src` is set, otherwise initials from `$name` (first letter of the first two words), otherwise the `$icon`. Exports: `Avatar`, `AvatarProps`, `AvatarSize`, `AvatarColor`. Extends `React.HTMLAttributes<HTMLSpanElement>`.

| prop     | type                                                       | default     |
| -------- | ---------------------------------------------------------- | ----------- |
| `$size`  | `"small" \| "default" \| "big"` (box 28 / 36 / 48px)       | `"default"` |
| `$src`   | `string` (image URL)                                       | -           |
| `$alt`   | `string`                                                   | -           |
| `$name`  | `string` (initials source, e.g. `"Ada Lovelace"` → `"AL"`) | -           |
| `$icon`  | lucide name string (fallback when no image and no name)    | `"User"`    |
| `$color` | `"primary" \| "secondary" \| "tertiary" \| "gray"`         | `"primary"` |

```tsx
<Avatar $name="Ada Lovelace" $color="secondary" />
<Avatar $src="/me.png" $alt="Profile photo" $size="big" />
<Avatar $icon="Bot" $size="small" />
```

## Callout

Tinted message box for asides and alerts. Exports: `Callout`, `CalloutProps`, `CalloutType`. Extends `React.HTMLAttributes<HTMLDivElement>`. Untyped it renders a neutral box; `$type` adds an alert tint and icon. The tints are alert-semantic and deliberately independent of the brand palette.

| prop        | type                                                     | default           |
| ----------- | -------------------------------------------------------- | ----------------- |
| `$type`     | `"note" \| "info" \| "warning" \| "danger" \| "success"` | untinted          |
| `$icon`     | lucide name string (overrides the type's icon)           | picked by `$type` |
| `$hideIcon` | `boolean`                                                | -                 |

```tsx
<Callout $type="warning">Unsaved changes will be lost.</Callout>
<Callout $type="note" $icon="Lightbulb">Tip: press Cmd+K.</Callout>
```

## Prose

Typography wrapper for rendered markdown/rich text: styles headings, links, lists, tables, code, and media from theme tokens. Exports: `Prose`, `ProseProps`, `proseStyles(theme, $compact?)` (apply the same CSS to an already-styled element instead of wrapping). Extends `React.HTMLAttributes<HTMLDivElement>`.

| prop       | type                                                                          | default |
| ---------- | ----------------------------------------------------------------------------- | ------- |
| `$compact` | `boolean` (tighter rhythm, headings shifted down two steps; for chat bubbles) | -       |

```tsx
<Prose dangerouslySetInnerHTML={{ __html: html }} />
<Prose $compact>{markdownChildren}</Prose>
```

## Spinner

Rotating loading indicator wrapping `<Icon>`. Respects `prefers-reduced-motion` (animation off). Default color resolves from `theme.colors.dark` so it stays visible in both modes; an explicit `color` wins. Exports: `Spinner`, `SpinnerProps`.

| prop         | type               | default             |
| ------------ | ------------------ | ------------------- |
| `name`       | lucide name string | `"LoaderCircle"`    |
| `size`       | `number` (px)      | icon default        |
| `color`      | `string`           | `theme.colors.dark` |
| `aria-label` | `string`           | -                   |

```tsx
<Spinner size={20} aria-label="Loading" />
```

---

# Chat kit

A transport-agnostic chat UI. `ChatProvider` is headless: it owns the open/close state (with focus capture and restore), the transcript, and streaming bookkeeping. **Cherry never fetches** — the app supplies the transport as `onSend(question, { signal, history, setAssistant })`. All other chat components read `ChatContext`, so render them inside the provider.

Exports: `ChatProvider`, `ChatProviderProps`, `useChat`, `ChatContext`, `ChatSendHandler`, `ChatSendContext`, `ChatHistoryEntry`, `ChatMessageData`, `ChatSourceData`, `ChatRole`, plus the components below and the showcase helpers (`showcaseCommands`, `resolveShowcaseCommand`).

## ChatProvider / useChat

| prop           | type                                                                                                         | default                              |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| `onSend`       | `ChatSendHandler` (required for real answers; optional with `$showcase`)                                     | -                                    |
| `greeting`     | `React.ReactNode \| null` (seeded assistant message)                                                         | `"Hey there, how can I assist you?"` |
| `historyLimit` | `number` (max prior messages handed to `onSend`)                                                             | `20`                                 |
| `shortcut`     | `string \| null` (Cmd/Ctrl + key toggles the panel; `null` disables)                                         | `"i"`                                |
| `$showcase`    | `boolean` (demo mode: commands like `help`, `callout`, `prose` are answered locally with live element demos) | `false`                              |

`onSend` receives the question and a context: `signal` (`AbortSignal`, aborted by `reset()`/unmount — pass it to `fetch`), `history` (`{ role, content }[]`, oldest first), and `setAssistant(content, { text?, sources? })`, which creates the assistant bubble on the first call and patches the same bubble on every later call, so call it repeatedly to stream. A thrown error lands in `error`; an abort is swallowed.

`useChat()` returns `{ isOpen, open, close, toggle, messages, input, setInput, loading, error, send, ask, reset, inputRef }`. `send(text?)` sends the argument or the current input; `ask(question)` opens the panel and submits the question; `reset()` aborts any in-flight reply and restores the greeting.

## ChatPanel

The shell: header (title, actions, close button) around your content. Extends `React.HTMLAttributes<HTMLDivElement>`. Exports: `ChatPanel`, `ChatPanelProps`, `ChatPanelVariant`.

| prop               | type                                      | default          |
| ------------------ | ----------------------------------------- | ---------------- |
| `$variant`         | `"drawer" \| "inline" \| "fullscreen"`    | `"drawer"`       |
| `$side`            | `"left" \| "right"` (drawer edge)         | `"right"`        |
| `$width`           | `number` (drawer width from `lg` up)      | `420`            |
| `$title`           | `React.ReactNode \| null`                 | `"AI Assistant"` |
| `$titleIcon`       | lucide name string \| `null`              | `"Sparkles"`     |
| `$actions`         | `React.ReactNode` (extra header controls) | -                |
| `$hideCloseButton` | `boolean`                                 | -                |

`drawer` is a fixed side panel that becomes a full-screen modal below the `lg` breakpoint; `fullscreen` is always modal; `inline` is a normal flow container with no dialog semantics. Modal states get a focus trap, inert siblings, Escape-to-close, and a body scroll lock; the composer is focused when an overlay opens.

## ChatMessageList

Scroll container that follows the newest message (instant jump on open, releases when the reader scrolls up, re-engages on send). Extends `React.HTMLAttributes<HTMLDivElement>`. Prop: `$streaming?: boolean` — jump instead of smooth-scroll (defaults to the provider's `loading`).

## ChatMessage

One transcript bubble. Extends `React.HTMLAttributes<HTMLDivElement>`. Exports also `chatTextStyles(theme)`, the chat type scale.

| prop      | type                                        | default       |
| --------- | ------------------------------------------- | ------------- |
| `$role`   | `"user" \| "assistant"`                     | `"assistant"` |
| `$avatar` | `React.ReactNode` (typically an `<Avatar>`) | -             |

## ChatInput

Auto-growing composer: a textarea plus a Cherry send button (shows a `Spinner` while loading). Extends textarea attributes minus `value`/`onChange`/`onSubmit`. Wired to the provider by default; the overrides below make it usable standalone.

| prop            | type                                            | default          |
| --------------- | ----------------------------------------------- | ---------------- |
| `value`         | `string` (overrides provider input state)       | provider's       |
| `onValueChange` | `(value: string) => void`                       | provider's       |
| `onSend`        | `(value: string) => void`                       | provider `send`  |
| `$loading`      | `boolean`                                       | provider's       |
| `$glow`         | `boolean` (rainbow border + sparkles treatment) | `false`          |
| `$glowColors`   | `string[]` (overrides the glow palette)         | built-in palette |
| `$maxRows`      | `number` (max px height before scrolling)       | -                |

## ChatLauncher

"Ask AI" pill button that toggles the panel (`aria-expanded` reflects it). Extends `React.ButtonHTMLAttributes`. Children default to a Sparkles icon + "Ask AI". Props: `$glow?: boolean` (animated rainbow halo), `$glowColors?: string[]`.

## ChatTyping

Animated typing indicator; `children` is the label before the dots (default `"Answering"`). Render it while `loading` and no assistant content has arrived yet.

## ChatSources / ChatSource

Source chips under a reply. `ChatSources` is the flex-wrap row; `ChatSource` is a plain anchor (router-agnostic — pass `as={Link}` for a framework link).

## Minimal wiring

```tsx
import {
  ChatProvider,
  ChatPanel,
  ChatMessageList,
  ChatMessage,
  ChatInput,
  ChatLauncher,
  ChatTyping,
  Avatar,
  useChat,
} from "cherry-styled-components";

function Transcript() {
  const { messages, loading } = useChat();
  return (
    <ChatMessageList>
      {messages.map((m) => (
        <ChatMessage
          key={m.id}
          $role={m.role}
          $avatar={<Avatar $size="small" $icon="Bot" />}
        >
          {m.content}
        </ChatMessage>
      ))}
      {loading && <ChatTyping />}
    </ChatMessageList>
  );
}

<ChatProvider
  onSend={async (question, { signal, history, setAssistant }) => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ question, history }),
      signal,
    });
    setAssistant(await res.text()); // call repeatedly to stream
  }}
>
  <ChatLauncher $glow />
  <ChatPanel>
    <Transcript />
    <ChatInput $glow placeholder="Ask anything..." />
  </ChatPanel>
</ChatProvider>;
```

---

# Providers, SSR, and theme helpers

Full setup is in `setup.md`. Exported from `cherry-styled-components`:

- `CherryThemeProvider` (client-only provider) and `ThemeContext` (`{ setTheme, toggleTheme }`).
- `ClientThemeProvider` + `ClientThemeProviderProps` (SSR-aware, flash-free).
- `StyledComponentsRegistry` (Next.js App Router style extraction).
- `themeInitScript`, `createThemeInitScript(darkBackground?)`, `resolveTheme(cookieValue, theme, themeDark?)` (server-safe theming helpers).
- `GlobalStyles(theme)` (base HTML/body resets; the providers render it for you unless you opt out).
- `theme`, `themeDark`, and the `Theme` type, plus all the typography mixins, style mixins, and the `alpha` / `shade` / `tint` color helpers documented in `theme.md`.
- Utility hooks: `useMediaQuery(query)`, `useBelowBreakpoint(size)` (theme breakpoint names), `useLockBodyScroll(isLocked)`, `useOnClickOutside(refs, handler)`.
