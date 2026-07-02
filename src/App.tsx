import { useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  Container,
  Button,
  Col,
  Flex,
  Grid,
  Icon,
  IconButton,
  Input,
  MaxWidth,
  Modal,
  Password,
  Range,
  Select,
  Space,
  Textarea,
  ToastNotifications,
  ToastNotificationsProvider,
  Toggle,
  useToastNotifications,
} from "./lib";
import { ToggleTheme } from "./toggle-theme";

// Fills the grid column and bottom-aligns the icon buttons with a padding that
// centers them on the form field next to them ((field height - button) / 2),
// compensating for the label above the field.
const StyledIconButtonRow = styled.div<{ $offset: number }>`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  height: 100%;
  padding-bottom: ${({ $offset }) => $offset}px;
`;

function ModalToastDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const { addNotification } = useToastNotifications();

  return (
    <>
      <Flex $gap={20}>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Button
          $variant="secondary"
          onClick={() =>
            addNotification("Changes saved successfully.", {
              color: "success",
              autoHide: 4000,
            })
          }
        >
          Success Toast
        </Button>
        <Button
          $error
          onClick={() =>
            addNotification("Something went wrong.", {
              color: "error",
              autoHide: 4000,
            })
          }
        >
          Error Toast
        </Button>
        <Button
          $variant="tertiary"
          onClick={() =>
            addNotification("This toast stays until dismissed.", {
              color: "info",
            })
          }
        >
          Info Toast
        </Button>
      </Flex>
      <Modal
        $isOpen={isOpen}
        $onClose={() => setIsOpen(false)}
        $title="Modal Title"
      >
        <p>
          This is the Cherry modal. It closes on Escape, on a click outside, or
          with the close button in the corner.
        </p>
        <hr />
        <Flex $gap={20} $justifyContent="flex-end">
          <Button $outline onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              addNotification("Confirmed from the modal.", {
                color: "success",
                autoHide: 4000,
              });
            }}
          >
            Confirm
          </Button>
        </Flex>
      </Modal>
    </>
  );
}

function App() {
  return (
    <ToastNotificationsProvider>
      <ToastNotifications />
      <Container>
        <Space $size={100} />
        <MaxWidth $xs={845}>
          <ToggleTheme />
          <hr />
          <Input $fullWidth $label="Input" id="data-1" type="date" />
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={3} $gap={20}>
            <Col $xsSpan={1} $lgSpan={2}>
              <Grid $xsCols={1} $lgCols={2} $gap={20}>
                <Input
                  placeholder="Placeholder"
                  $fullWidth
                  $label="Input"
                  id="input-1"
                />
                <Select $fullWidth $label="Select" id="select-1">
                  <option>Select</option>
                </Select>
                <Col $lgSpan={2}>
                  <Flex
                    $xsGap={10}
                    $lgGap={20}
                    $wrap="nowrap"
                    $justifyContent="space-between"
                  >
                    <Input type="checkbox" id="checkbox-1" />
                    <Input type="checkbox" id="checkbox-2" defaultChecked />
                    <Input type="radio" id="radio-2" name="demo-radio" />
                    <Input
                      type="radio"
                      id="radio-3"
                      name="demo-radio"
                      defaultChecked
                    />
                    <Range />
                    <Toggle />
                    <Toggle defaultChecked />
                  </Flex>
                </Col>
              </Grid>
            </Col>
            <Textarea
              $label="Textarea"
              $fullWidth
              defaultValue="Textarea"
              id="textarea-1"
            />
          </Grid>
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={2} $gap={20}>
            <Col>
              <Flex $wrap="nowrap" $gap={20}>
                <Button $fullWidth>Button</Button>
                <Button $variant="secondary" $fullWidth>
                  Button
                </Button>
                <Button $variant="tertiary" $fullWidth>
                  Button
                </Button>
              </Flex>
            </Col>
            <Col>
              <Flex $wrap="nowrap" $gap={20}>
                <Button $outline $fullWidth>
                  Button
                </Button>
                <Button $variant="secondary" $outline $fullWidth>
                  Button
                </Button>
                <Button $variant="tertiary" $outline $fullWidth>
                  Button
                </Button>
              </Flex>
            </Col>
          </Grid>
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={2} $gap={20}>
            <Col>
              <Password
                $fullWidth
                $label="Password"
                id="password-1"
                placeholder="Password"
              />
            </Col>
            <Col>
              <StyledIconButtonRow $offset={11}>
                <IconButton aria-label="Settings">
                  <Icon name="Settings" />
                </IconButton>
                <IconButton aria-label="Edit">
                  <Icon name="Pencil" />
                </IconButton>
                <IconButton $error aria-label="Delete">
                  <Icon name="Trash2" />
                </IconButton>
                <IconButton disabled aria-label="Disabled">
                  <Icon name="X" />
                </IconButton>
              </StyledIconButtonRow>
            </Col>
          </Grid>
          <Space $size={20} />
          <ModalToastDemo />
          <Space $size={20} />
          <Accordion title="Accordion" defaultOpen>
            This accordion is open by default. It animates open and close, and
            the chevron rotates to match.
          </Accordion>
          <Space $size={20} />
          <Accordion title="Accordion Inline" $inline>
            The inline variant drops the border and radius and uses tighter
            padding, for embedding inside cards or lists.
          </Accordion>

          <Space $size={40} />
          <hr />
          <Space $size={20} />

          {/* Big Size */}
          <h2>Big</h2>
          <Space $size={10} />
          <Input
            $size="big"
            $fullWidth
            $label="Input Big"
            id="date-big"
            type="date"
          />
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={3} $gap={20}>
            <Col $xsSpan={1} $lgSpan={2}>
              <Grid $xsCols={1} $lgCols={2} $gap={20}>
                <Input
                  $size="big"
                  placeholder="Placeholder"
                  $fullWidth
                  $label="Input Big"
                  id="input-big"
                />
                <Select
                  $size="big"
                  $fullWidth
                  $label="Select Big"
                  id="select-big"
                >
                  <option>Select</option>
                </Select>
                <Col $lgSpan={2}>
                  <Flex
                    $xsGap={10}
                    $lgGap={20}
                    $wrap="nowrap"
                    $justifyContent="space-between"
                  >
                    <Input $size="big" type="checkbox" id="checkbox-big-1" />
                    <Input
                      $size="big"
                      type="checkbox"
                      id="checkbox-big-2"
                      defaultChecked
                    />
                    <Input
                      $size="big"
                      type="radio"
                      id="radio-big-1"
                      name="demo-radio-big"
                    />
                    <Input
                      $size="big"
                      type="radio"
                      id="radio-big-2"
                      name="demo-radio-big"
                      defaultChecked
                    />
                    <Range $size="big" />
                    <Toggle $size="big" />
                    <Toggle $size="big" defaultChecked />
                  </Flex>
                </Col>
              </Grid>
            </Col>
            <Textarea
              $size="big"
              $label="Textarea Big"
              $fullWidth
              defaultValue="Textarea"
              id="textarea-big"
            />
          </Grid>
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={2} $gap={20}>
            <Col>
              <Flex $wrap="nowrap" $gap={20}>
                <Button $size="big" $fullWidth>
                  Button
                </Button>
                <Button $size="big" $variant="secondary" $fullWidth>
                  Button
                </Button>
                <Button $size="big" $variant="tertiary" $fullWidth>
                  Button
                </Button>
              </Flex>
            </Col>
            <Col>
              <Flex $wrap="nowrap" $gap={20}>
                <Button $size="big" $outline $fullWidth>
                  Button
                </Button>
                <Button $size="big" $variant="secondary" $outline $fullWidth>
                  Button
                </Button>
                <Button $size="big" $variant="tertiary" $outline $fullWidth>
                  Button
                </Button>
              </Flex>
            </Col>
          </Grid>
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={2} $gap={20}>
            <Col>
              <Password
                $size="big"
                $fullWidth
                $label="Password Big"
                id="password-big"
                placeholder="Password"
              />
            </Col>
            <Col>
              <StyledIconButtonRow $offset={14}>
                <IconButton $size="big" aria-label="Settings">
                  <Icon name="Settings" />
                </IconButton>
                <IconButton $size="big" aria-label="Edit">
                  <Icon name="Pencil" />
                </IconButton>
                <IconButton $size="big" $error aria-label="Delete">
                  <Icon name="Trash2" />
                </IconButton>
                <IconButton $size="big" disabled aria-label="Disabled">
                  <Icon name="X" />
                </IconButton>
              </StyledIconButtonRow>
            </Col>
          </Grid>

          <Space $size={40} />
          <hr />
          <Space $size={20} />

          {/* Small Size */}
          <h2>Small</h2>
          <Space $size={10} />
          <Input
            $size="small"
            $fullWidth
            $label="Input Small"
            id="date-small"
            type="date"
          />
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={3} $gap={20}>
            <Col $xsSpan={1} $lgSpan={2}>
              <Grid $xsCols={1} $lgCols={2} $gap={20}>
                <Input
                  $size="small"
                  placeholder="Placeholder"
                  $fullWidth
                  $label="Input Small"
                  id="input-small"
                />
                <Select
                  $size="small"
                  $fullWidth
                  $label="Select Small"
                  id="select-small"
                >
                  <option>Select</option>
                </Select>
                <Col $lgSpan={2}>
                  <Flex
                    $xsGap={10}
                    $lgGap={20}
                    $wrap="nowrap"
                    $justifyContent="space-between"
                  >
                    <Input
                      $size="small"
                      type="checkbox"
                      id="checkbox-small-1"
                    />
                    <Input
                      $size="small"
                      type="checkbox"
                      id="checkbox-small-2"
                      defaultChecked
                    />
                    <Input
                      $size="small"
                      type="radio"
                      id="radio-small-1"
                      name="demo-radio-small"
                    />
                    <Input
                      $size="small"
                      type="radio"
                      id="radio-small-2"
                      name="demo-radio-small"
                      defaultChecked
                    />
                    <Range $size="small" />
                    <Toggle $size="small" />
                    <Toggle $size="small" defaultChecked />
                  </Flex>
                </Col>
              </Grid>
            </Col>
            <Textarea
              $size="small"
              $label="Textarea Small"
              $fullWidth
              defaultValue="Textarea"
              id="textarea-small"
            />
          </Grid>
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={2} $gap={20}>
            <Col>
              <Flex $wrap="nowrap" $gap={20}>
                <Button $size="small" $fullWidth>
                  Button
                </Button>
                <Button $size="small" $variant="secondary" $fullWidth>
                  Button
                </Button>
                <Button $size="small" $variant="tertiary" $fullWidth>
                  Button
                </Button>
              </Flex>
            </Col>
            <Col>
              <Flex $wrap="nowrap" $gap={20}>
                <Button $size="small" $outline $fullWidth>
                  Button
                </Button>
                <Button $size="small" $variant="secondary" $outline $fullWidth>
                  Button
                </Button>
                <Button $size="small" $variant="tertiary" $outline $fullWidth>
                  Button
                </Button>
              </Flex>
            </Col>
          </Grid>
          <Space $size={20} />
          <Grid $xsCols={1} $lgCols={2} $gap={20}>
            <Col>
              <Password
                $size="small"
                $fullWidth
                $label="Password Small"
                id="password-small"
                placeholder="Password"
              />
            </Col>
            <Col>
              <StyledIconButtonRow $offset={8}>
                <IconButton $size="small" aria-label="Settings">
                  <Icon name="Settings" />
                </IconButton>
                <IconButton $size="small" aria-label="Edit">
                  <Icon name="Pencil" />
                </IconButton>
                <IconButton $size="small" $error aria-label="Delete">
                  <Icon name="Trash2" />
                </IconButton>
                <IconButton $size="small" disabled aria-label="Disabled">
                  <Icon name="X" />
                </IconButton>
              </StyledIconButtonRow>
            </Col>
          </Grid>
        </MaxWidth>
        <Space $size={100} />
      </Container>
    </ToastNotificationsProvider>
  );
}

export default App;
