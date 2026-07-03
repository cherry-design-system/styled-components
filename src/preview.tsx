import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  AvatarDropzone,
  Box,
  Button,
  Col,
  Dropzone,
  Flex,
  Grid,
  Icon,
  IconButton,
  Input,
  Modal,
  Password,
  Range,
  Select,
  TabContent,
  Tabs,
  Textarea,
  ThemeToggle,
  ToastNotifications,
  ToastNotificationsProvider,
  Toggle,
  useToastNotifications,
  type Shadows,
} from "./lib";

const StyledStage = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const StyledPreviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 560px;
  max-width: 100%;
  padding: 60px 40px;
`;

const StyledShadowGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const StyledShadowTile = styled.div<{ $level: keyof Shadows }>`
  align-items: center;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  box-shadow: ${({ theme, $level }) => theme.shadows[$level]};
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  height: 100px;
  justify-content: center;
  width: 100px;
`;

function ShadowsPreview() {
  const levels: Array<keyof Shadows> = ["xs", "sm", "md", "lg", "xl"];

  return (
    <StyledShadowGrid>
      {levels.map((level) => (
        <StyledShadowTile key={level} $level={level}>
          {level}
        </StyledShadowTile>
      ))}
    </StyledShadowGrid>
  );
}

const StyledPlaceholder = styled.div`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  min-height: 40px;
  min-width: 40px;
`;

function ToastPreview() {
  const { addNotification, notifications } = useToastNotifications();
  const fired = useRef(false);

  const fireDefaults = () => {
    addNotification("Changes saved successfully.", { color: "success" });
    addNotification("Something went wrong.", { color: "error" });
    addNotification("This is an info toast.", { color: "info" });
  };

  // useLayoutEffect so the initial toasts exist before first paint and the
  // reset button below doesn't flash on load.
  useLayoutEffect(() => {
    if (fired.current) return;
    fired.current = true;
    fireDefaults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Once every toast has been dismissed, offer a centered reset button that
  // restores the three defaults and disappears while toasts are visible.
  if (notifications.length > 0) return null;

  return (
    <IconButton aria-label="Reset toasts" onClick={fireDefaults}>
      <Icon name="RotateCcw" />
    </IconButton>
  );
}

function ModalPreview() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Same reset affordance as the toast preview: once the modal is
          closed, a centered button brings it back. */}
      {!isOpen && (
        <IconButton aria-label="Reopen modal" onClick={() => setIsOpen(true)}>
          <Icon name="RotateCcw" />
        </IconButton>
      )}
      <Modal
        $isOpen={isOpen}
        $onClose={() => setIsOpen(false)}
        $title="Modal Title"
      >
        <p>
          This is the Cherry modal. It closes on Escape, on a click outside, or
          with the close button in the corner.
        </p>
      </Modal>
    </>
  );
}

const previews: Record<string, React.ReactNode> = {
  accordion: (
    <Accordion title="Accordion" defaultOpen>
      This accordion is open by default. It animates open and close, and the
      chevron rotates to match.
    </Accordion>
  ),
  "accordion-inline": (
    <Accordion title="Accordion Inline" $inline defaultOpen>
      The inline variant drops the border and radius and uses tighter padding,
      for embedding inside cards or lists.
    </Accordion>
  ),
  "avatar-dropzone": <AvatarDropzone id="avatar-preview" />,
  box: (
    <Box style={{ padding: "40px" }}>
      <StyledPlaceholder />
    </Box>
  ),
  button: <Button>Button</Button>,
  "button-secondary": <Button $variant="secondary">Button</Button>,
  "button-tertiary": <Button $variant="tertiary">Button</Button>,
  "button-outline": <Button $outline>Button</Button>,
  checkbox: <Input type="checkbox" id="checkbox-preview" defaultChecked />,
  dropzone: (
    <Dropzone
      id="dropzone-preview"
      accept="image/*"
      $prompt="Drag images here"
      $browse="or click to browse"
      $hint="PNG, JPG, WebP or GIF · up to 5MB"
      $icon="ImageUp"
    />
  ),
  "dropzone-inline": (
    <Dropzone
      id="dropzone-inline-preview"
      accept="image/*"
      $inline
      $prompt="Drag an image here"
      $browse="or click to browse"
      $icon="ImageUp"
    />
  ),
  flex: (
    <Flex $gap={20} $fullWidth>
      <StyledPlaceholder style={{ flex: 1 }} />
      <StyledPlaceholder style={{ flex: 1 }} />
      <StyledPlaceholder style={{ flex: 1 }} />
    </Flex>
  ),
  grid: (
    <Grid $xsCols={3} $gap={20} style={{ width: "100%" }}>
      <Col>
        <StyledPlaceholder />
      </Col>
      <Col>
        <StyledPlaceholder />
      </Col>
      <Col>
        <StyledPlaceholder />
      </Col>
      <Col $xsSpan={3}>
        <StyledPlaceholder />
      </Col>
    </Grid>
  ),
  icon: <Icon name="Cherry" size={48} />,
  "icon-button": (
    <IconButton aria-label="Settings">
      <Icon name="Settings" />
    </IconButton>
  ),
  input: (
    <Input
      $fullWidth
      $label="Input"
      id="input-preview"
      placeholder="Placeholder"
    />
  ),
  modal: <ModalPreview />,
  password: (
    <Password
      $fullWidth
      $label="Password"
      id="password-preview"
      placeholder="Password"
    />
  ),
  radio: <Input type="radio" id="radio-preview" defaultChecked />,
  range: <Range />,
  shadows: <ShadowsPreview />,
  select: (
    <Select $fullWidth $label="Select" id="select-preview">
      <option>Select</option>
    </Select>
  ),
  tabs: (
    <Tabs>
      <TabContent title="Overview">
        The Cherry tabs group related content into panels. Arrow keys move
        between tabs, and the panel updates instantly.
      </TabContent>
      <TabContent title="Details">
        Each tab renders its own panel content.
      </TabContent>
      <TabContent title="Settings">Settings panel content.</TabContent>
    </Tabs>
  ),
  "theme-toggle": <ThemeToggle />,
  textarea: (
    <Textarea
      $fullWidth
      $label="Textarea"
      id="textarea-preview"
      defaultValue="Textarea"
    />
  ),
  toast: <ToastPreview />,
  toggle: <Toggle defaultChecked />,
};

export const previewNames = Object.keys(previews);

function PreviewIndex() {
  return (
    <ul style={{ padding: "40px" }}>
      {previewNames.map((name) => (
        <li key={name}>
          <a href={`/preview/${name}`}>{name}</a>
        </li>
      ))}
    </ul>
  );
}

function Preview({ name }: { name: string }) {
  if (!name) return <PreviewIndex />;

  const content = previews[name];

  return (
    <ToastNotificationsProvider>
      <ToastNotifications />
      <StyledStage>
        <StyledPreviewBox id="preview-box">
          {content ?? <p>Unknown component: {name}</p>}
        </StyledPreviewBox>
      </StyledStage>
    </ToastNotificationsProvider>
  );
}

export { Preview };
