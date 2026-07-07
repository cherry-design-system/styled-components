# Cherry recipes and patterns

Copy-adaptable patterns for common UI, plus how to extend Cherry correctly and what to avoid. All examples assume the app is already wrapped in a Cherry provider (see `setup.md`).

---

## A form

Use Cherry form components for every field, `$fullWidth` inside a constrained container, `$error` for invalid fields, and a Cherry `<Button type="submit">`. Never a raw `<input>` or `<button>`.

```tsx
import {
  Box,
  Input,
  Password,
  Select,
  Textarea,
  Button,
  Space,
} from "cherry-styled-components";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  return (
    <Box $padding={24}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const ok = /.+@.+/.test(email);
          setEmailError(!ok);
          if (ok) submit();
        }}
      >
        <Input
          id="email"
          type="email"
          $label="Email"
          $fullWidth
          $error={emailError}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Space $size={16} />
        <Password id="password" $label="Password" $fullWidth />
        <Space $size={16} />
        <Select id="role" $label="Role" $fullWidth>
          <option value="dev">Developer</option>
          <option value="design">Designer</option>
        </Select>
        <Space $size={16} />
        <Textarea id="notes" $label="Notes" rows={4} $fullWidth />
        <Space $size={24} />
        <Button type="submit" $variant="primary" $fullWidth>
          Create account
        </Button>
      </form>
    </Box>
  );
}
```

## Checkbox and radio groups

Checkbox and radio are `Input` with a native `type`. Group radios by sharing a `name`.

```tsx
<Input type="checkbox" id="tos" $label="I accept the terms" checked={tos} onChange={(e) => setTos(e.target.checked)} />

<Input type="radio" name="plan" id="free" $label="Free" value="free" checked={plan === "free"} onChange={(e) => setPlan(e.target.value)} />
<Input type="radio" name="plan" id="pro" $label="Pro" value="pro" checked={plan === "pro"} onChange={(e) => setPlan(e.target.value)} />
```

## Page layout

Compose `Container` -> `Grid` / `Col` / `Flex`, and use `Space` for vertical rhythm. Avoid hand-rolled fl/grid `<div>`s with inline CSS.

```tsx
import {
  Container,
  Grid,
  Col,
  Flex,
  Box,
  Button,
  ThemeToggle,
} from "cherry-styled-components";

function Dashboard() {
  return (
    <Container>
      <Flex $justifyContent="space-between" $alignItems="center">
        <h1>Dashboard</h1>
        <ThemeToggle />
      </Flex>

      <Grid $cols={12} $gap={24} $xsCols={1} $mdCols={12}>
        <Col $span={8} $xsSpan={1}>
          <Box $padding={24}>Main content</Box>
        </Col>
        <Col $span={4} $xsSpan={1}>
          <Box $padding={24}>Sidebar</Box>
        </Col>
      </Grid>
    </Container>
  );
}
```

## Modal with a form inside

Modal is controlled via `$isOpen` / `$onClose`. The body unmounts when closed, so a form inside resets between openings.

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Edit profile</Button>

<Modal $isOpen={open} $onClose={() => setOpen(false)} $title="Edit profile" $width={560}>
  <Input id="name" $label="Name" $fullWidth />
  <Space $size={16} />
  <Flex $justifyContent="flex-end" $gap={10}>
    <Button $variant="secondary" $outline onClick={() => setOpen(false)}>Cancel</Button>
    <Button $variant="primary" onClick={() => setOpen(false)}>Save</Button>
  </Flex>
</Modal>
```

## Toast notifications

Provider + one renderer near the root, then push from anywhere with the hook.

```tsx
// root
<ToastNotificationsProvider>
  <App />
  <ToastNotifications $align="right" $bottom />
</ToastNotificationsProvider>;

// in a component
function SaveButton() {
  const { addNotification } = useToastNotifications();
  return (
    <Button
      onClick={async () => {
        try {
          await save();
          addNotification("Saved", { color: "success", autoHide: 4000 });
        } catch {
          addNotification("Save failed", { color: "error" }); // sticky
        }
      }}
    >
      Save
    </Button>
  );
}
```

## Tabs and Accordion

```tsx
<Tabs defaultActiveTab={0}>
  <TabContent title="Description">
    <p>Product description.</p>
  </TabContent>
  <TabContent title="Reviews">
    <p>Customer reviews.</p>
  </TabContent>
</Tabs>

<Accordion title="Frequently asked" $inline>
  <p>Answer text.</p>
</Accordion>
```

---

## Building a custom component that respects the system

When Cherry has no component for what you need, build it with the same primitives so it stays on-theme and dark-mode-correct. The rules:

1. Read all colors/spacing/radii from `theme`. Never hardcode.
2. Use `$`-prefixed props for style variants.
3. Use `resetButton` / `resetInput` before styling native controls.
4. Use `mq()` for breakpoints and the typography mixins for text.
5. Reuse `interactiveStyles` for hover/focus/active affordances.

```tsx
"use client";
import styled from "styled-components";
import {
  resetButton,
  interactiveStyles,
  styledText,
  mq,
  type Theme,
} from "cherry-styled-components";

interface CardButtonProps {
  $selected?: boolean;
}

const CardButton = styled.button<CardButtonProps & { theme: Theme }>`
  ${resetButton};
  ${interactiveStyles};
  ${({ theme }) => styledText(theme)};
  display: block;
  width: 100%;
  padding: 16px;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: solid 2px
    ${({ theme, $selected }) =>
      $selected ? theme.colors.primary : theme.colors.grayLight};

  ${mq("lg")} {
    padding: 24px;
  }
`;

// usage
<CardButton $selected onClick={choose}>
  Choose this plan
</CardButton>;
```

This is the correct pattern for anything Cherry does not ship. It inherits the theme, adapts to dark mode via `colors.light` / `colors.dark`, and matches Cherry's focus-ring behavior through `interactiveStyles`.

---

## Anti-patterns (do not do these)

| Do not                                                   | Do instead                                                                                           | Why                                                                                                             |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `<button>...</button>`                                   | `<Button>` / `<IconButton>`                                                                          | Buttons must come from Cherry (styling, sizes, focus rings, dark mode).                                         |
| `<input>` / `<select>` / `<textarea>`                    | `<Input>` / `<Select>` / `<Textarea>` / `<Toggle>` / `<Range>` / `<Password>`                        | Same. Checkbox/radio are `<Input type="checkbox\|radio">`.                                                      |
| a separate `<Checkbox>` / `<Radio>` import               | `<Input type="checkbox">` / `<Input type="radio">`                                                   | Cherry has no separate export; those imports do not exist.                                                      |
| `color: #4d6f8b` / `color: black`                        | `color: ${({ theme }) => theme.colors.primary}` / `theme.colors.dark`                                | Hardcoded colors break theming and dark mode.                                                                   |
| `font-size: 16px`                                        | a typography mixin, e.g. `${({ theme }) => styledText(theme)}`                                       | Keeps the responsive type scale consistent.                                                                     |
| `border-radius: 12px`                                    | `${({ theme }) => theme.spacing.radius.lg}`                                                          | Use spacing tokens.                                                                                             |
| `@media (min-width: 992px)`                              | `${mq("lg")}`                                                                                        | Match Cherry's breakpoints.                                                                                     |
| `style={{ color: "#333", padding: 16 }}` (inline styles) | a `styled` component reading theme tokens, or Cherry layout props (`$padding`, `$gap`, `$fullWidth`) | Inline styles bypass the theme entirely: no tokens, no dark mode, no hover/focus/active states, no breakpoints. |
| importing MUI / Chakra / shadcn components               | Cherry components                                                                                    | Do not mix UI libraries in a Cherry app.                                                                        |
| `variant="primary"` (no `$`)                             | `$variant="primary"`                                                                                 | Styling props are `$`-prefixed transient props.                                                                 |
| `styled(Modal)\`...\`` to restyle a Modal                | pass `className` and target `.modal-inner` / `.modal-content` etc.                                   | `styled()` strips the `$`-props Modal is controlled by.                                                         |
| rendering a component outside the provider               | wrap the tree in `CherryThemeProvider` / `ClientThemeProvider`                                       | `theme.*` is undefined without a provider; nothing styles correctly.                                            |
