import { useEffect, useRef } from "react";
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
  Textarea,
  ToastNotifications,
  ToastNotificationsProvider,
  Toggle,
  useToastNotifications,
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

const StyledPlaceholder = styled.div`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  min-height: 40px;
  min-width: 40px;
`;

function ToastPreview() {
  const { addNotification } = useToastNotifications();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    addNotification("Changes saved successfully.", { color: "success" });
    addNotification("Something went wrong.", { color: "error" });
    addNotification("This is an info toast.", { color: "info" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
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
  modal: (
    <Modal $isOpen $onClose={() => {}} $title="Modal Title">
      <p>
        This is the Cherry modal. It closes on Escape, on a click outside, or
        with the close button in the corner.
      </p>
    </Modal>
  ),
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
  select: (
    <Select $fullWidth $label="Select" id="select-preview">
      <option>Select</option>
    </Select>
  ),
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
