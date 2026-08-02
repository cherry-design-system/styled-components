import { Fragment, useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  Avatar,
  AvatarDropzone,
  Box,
  Button,
  buttonStyles,
  Callout,
  ChatInput,
  ChatLauncher,
  ChatMessage,
  ChatMessageList,
  ChatPanel,
  ChatProvider,
  ChatSource,
  ChatSources,
  type ChatSendHandler,
  ChatTyping,
  Col,
  Container,
  Dropzone,
  type DropzoneRejection,
  Flex,
  Grid,
  Icon,
  IconButton,
  Input,
  MaxWidth,
  Modal,
  Password,
  Prose,
  Range,
  Select,
  Space,
  styledBlockquote,
  styledCode,
  styledH2,
  styledH3,
  styledH4,
  styledHero3,
  styledSmall,
  styledText,
  TabContent,
  Tabs,
  Textarea,
  type Theme,
  ThemeToggle,
  ToastNotifications,
  ToastNotificationsProvider,
  Toggle,
  useChat,
  useToastNotifications,
} from "./lib";

// ---------------------------------------------------------------------------
// Demo-only presentation helpers. These live here (not in the library) so the
// showcase reads as a design system: every component sits under a titled,
// described section, and each control carries a caption so it is identifiable.
// ---------------------------------------------------------------------------

const StyledSectionTitle = styled.h2`
  margin: 0;
  ${({ theme }) => styledH3(theme)};
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledSectionNote = styled.p`
  margin: 6px 0 0;
  ${({ theme }) => styledSmall(theme)};
  color: ${({ theme }) => theme.colors.gray};
`;

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {note && <StyledSectionNote>{note}</StyledSectionNote>}
      <Space $size={24} />
      {children}
    </section>
  );
}

// Small uppercase caption used to label individual controls and size tiers.
const StyledCaption = styled.span`
  ${({ theme }) => styledSmall(theme)};
  display: block;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`;

// Stacks a caption above any control so the selection inputs are identifiable.
const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <StyledField>
      <StyledCaption>{label}</StyledCaption>
      {children}
    </StyledField>
  );
}

// ---------------------------------------------------------------------------
// Typography scale — showcases the responsive typography mixins.
// ---------------------------------------------------------------------------

const typeSample = (mixin: typeof styledText) => styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => mixin(theme)};
`;

const StyledHero3 = typeSample(styledHero3);
const StyledTypeH2 = typeSample(styledH2);
const StyledTypeH4 = typeSample(styledH4);
const StyledBody = typeSample(styledText);

const StyledBlockquote = styled.blockquote`
  margin: 0;
  padding-left: 20px;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grayDark};
  ${({ theme }) => styledBlockquote(theme)};
`;

const StyledInlineCode = styled.code`
  ${({ theme }) => styledCode(theme)};
  font-family: ${({ theme }) => theme.fonts.mono};
  background: ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.dark};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
`;

const StyledTypeRow = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 20px;
  align-items: baseline;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};

  &:last-child {
    border-bottom: none;
  }
`;

function TypeRow({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <StyledTypeRow>
      <StyledCaption>{name}</StyledCaption>
      <div>{children}</div>
    </StyledTypeRow>
  );
}

// ---------------------------------------------------------------------------
// Foundations — color tokens and elevation, straight from the theme.
// ---------------------------------------------------------------------------

const swatchTokens: { token: keyof Theme["colors"]; label: string }[] = [
  { token: "primary", label: "Primary" },
  { token: "secondary", label: "Secondary" },
  { token: "tertiary", label: "Tertiary" },
  { token: "gray", label: "Gray" },
  { token: "success", label: "Success" },
  { token: "error", label: "Error" },
  { token: "warning", label: "Warning" },
  { token: "info", label: "Info" },
];

const StyledSwatch = styled.div<{ $token: keyof Theme["colors"] }>`
  height: 64px;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  background: ${({ theme, $token }) => theme.colors[$token]};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  box-shadow: ${({ theme }) => theme.shadows.xs};
`;

const StyledSwatchLabel = styled.div`
  ${({ theme }) => styledSmall(theme)};
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
`;

const StyledSwatchValue = styled.div`
  ${({ theme }) => styledSmall(theme)};
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

// Box carries the shared card treatment (bg, border, radius.lg); the elevation
// tokens are layered on top so the shadow scale is visible in one place.
const StyledElevation = styled(Box)<{ $level: keyof Theme["shadows"] }>`
  box-shadow: ${({ theme, $level }) => theme.shadows[$level]};
  text-align: center;
`;

// ---------------------------------------------------------------------------
// Interactive demos.
// ---------------------------------------------------------------------------

function DropzoneDemo() {
  const { addNotification } = useToastNotifications();

  return (
    <Dropzone
      id="dropzone-1"
      accept="image/png,image/jpeg,image/webp,image/gif"
      multiple
      $maxFiles={5}
      $maxBytes={5 * 1024 * 1024}
      $prompt="Drag images here"
      $browse="or click to browse"
      $hint="PNG, JPG, WebP or GIF · up to 5MB · max 5 files"
      $icon="ImageUp"
      onFilesRejected={(rejections) =>
        rejections.forEach(({ file, reason }) =>
          addNotification(
            reason === "type"
              ? `${file.name} is not an accepted image type.`
              : reason === "size"
                ? `${file.name} is larger than 5MB.`
                : `${file.name} skipped: at most 5 files.`,
            { color: "error", autoHide: 5000 },
          ),
        )
      }
    />
  );
}

function InlineDropzoneDemo() {
  const { addNotification } = useToastNotifications();

  return (
    <Dropzone
      id="dropzone-inline"
      accept="image/*"
      $inline
      $maxBytes={5 * 1024 * 1024}
      $prompt="Drag an image here"
      $browse="or click to browse"
      $icon="ImageUp"
      onFilesRejected={(rejections) =>
        rejections.forEach(({ file, reason }) =>
          addNotification(
            reason === "size"
              ? `${file.name} is larger than 5MB.`
              : `${file.name} is not an accepted image.`,
            { color: "error", autoHide: 5000 },
          ),
        )
      }
    />
  );
}

function AvatarDropzoneDemo() {
  const { addNotification } = useToastNotifications();

  const notifyRejection = ({ file, reason }: DropzoneRejection) =>
    addNotification(
      reason === "size"
        ? `${file.name} is larger than 5MB.`
        : `${file.name} is not an image.`,
      { color: "error", autoHide: 5000 },
    );

  return (
    <Flex $gap={20} $alignItems="center">
      <AvatarDropzone
        id="avatar-small"
        $size="small"
        $maxBytes={5 * 1024 * 1024}
        onFileRejected={notifyRejection}
      />
      <AvatarDropzone
        id="avatar-default"
        $maxBytes={5 * 1024 * 1024}
        onFileRejected={notifyRejection}
      />
      <AvatarDropzone
        id="avatar-big"
        $size="big"
        $maxBytes={5 * 1024 * 1024}
        onFileRejected={notifyRejection}
      />
    </Flex>
  );
}

function ModalToastDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const { addNotification } = useToastNotifications();

  return (
    <>
      <Flex $gap={20} $wrap="wrap">
        <Button
          $icon={<Icon name="SquareArrowOutUpRight" size={18} />}
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </Button>
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

// ---------------------------------------------------------------------------
// Chat demo — the headless ChatProvider with a fake transport that streams a
// canned reply through timers, so the full flow (typing indicator, streaming
// into one bubble, sources) runs without a server.
// ---------------------------------------------------------------------------

const demoSend: ChatSendHandler = (question, { signal, setAssistant }) => {
  const answer =
    `You asked: "${question}". The provider owns the transcript, focus and ` +
    `panel state; this demo's transport just streams a canned reply with ` +
    `timers.`;

  return new Promise<void>((resolve) => {
    let length = 0;
    const tick = () => {
      if (signal.aborted) {
        resolve();
        return;
      }
      length = Math.min(length + 4, answer.length);
      if (length < answer.length) {
        setAssistant(answer.slice(0, length));
        setTimeout(tick, 30);
      } else {
        setAssistant(answer, {
          sources: [
            { id: "1", label: "Getting Started", href: "#" },
            { id: "2", label: "Theming", href: "#" },
          ],
        });
        resolve();
      }
    };
    setTimeout(tick, 600);
  });
};

function ChatDemoTranscript() {
  const { messages, loading, error } = useChat();
  const last = messages[messages.length - 1];

  return (
    <ChatMessageList>
      {messages.map((message) => (
        <Fragment key={message.id}>
          <ChatMessage
            $role={message.role}
            $avatar={
              message.role === "assistant" ? (
                <Avatar $size="small" $icon="Sparkles" $alt="Assistant" />
              ) : undefined
            }
          >
            {message.role === "assistant" &&
            typeof message.content === "string" ? (
              <Prose $compact>
                <p>{message.content}</p>
              </Prose>
            ) : (
              message.content
            )}
          </ChatMessage>
          {message.sources && message.sources.length > 0 && (
            <ChatSources>
              {message.sources.map((source) => (
                <ChatSource key={source.id} href={source.href}>
                  {source.label}
                </ChatSource>
              ))}
            </ChatSources>
          )}
        </Fragment>
      ))}
      {loading && last?.role !== "assistant" && <ChatTyping />}
      {error && (
        <Callout $type="danger">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </Callout>
      )}
    </ChatMessageList>
  );
}

function ChatDemoReset() {
  const { reset } = useChat();

  return (
    <IconButton
      onClick={reset}
      aria-label="Reset chat history"
      title="Reset chat history"
    >
      <Icon name="RotateCcw" />
    </IconButton>
  );
}

// One inline panel and one drawer, both regular Cherry elements by default;
// the Toggle flips the same demos into their $glow versions.
function ChatDemo() {
  const [glow, setGlow] = useState(false);

  return (
    <>
      <Toggle
        id="chat-glow-toggle"
        $label="Glow"
        checked={glow}
        onChange={(event) => setGlow(event.target.checked)}
      />

      <Space $size={28} />

      <StyledCaption>Inline panel</StyledCaption>
      <Space $size={16} />
      <ChatProvider onSend={demoSend} shortcut={null}>
        <div style={{ height: "420px" }}>
          <ChatPanel $variant="inline" $actions={<ChatDemoReset />}>
            <ChatDemoTranscript />
            <ChatInput $glow={glow} />
          </ChatPanel>
        </div>
      </ChatProvider>

      <Space $size={28} />

      <StyledCaption>Drawer · showcase commands</StyledCaption>
      <Space $size={16} />
      <ChatProvider onSend={demoSend} $showcase>
        <ChatLauncher $glow={glow} />
        <ChatPanel $actions={<ChatDemoReset />}>
          <ChatDemoTranscript />
          <ChatInput $glow={glow} />
        </ChatPanel>
      </ChatProvider>
    </>
  );
}

// ---------------------------------------------------------------------------
// Form-control tier — the same set of inputs rendered at one $size. Repeating
// it for default / big / small demonstrates the responsive sizing scale.
// ---------------------------------------------------------------------------

type FieldSize = "default" | "big" | "small";

// The library treats "default" as the absence of $size, so only forward a real
// size value to keep the default tier on its natural props.
const sizeProps = (size: FieldSize) =>
  size === "default" ? {} : { $size: size };

function FormTier({ size }: { size: FieldSize }) {
  const s = sizeProps(size);
  const suffix = size === "default" ? "" : `-${size}`;

  return (
    <Grid $xsCols={1} $lgCols={3} $gap={20}>
      <Col $xsSpan={1} $lgSpan={2}>
        <Grid $xsCols={1} $lgCols={2} $gap={20}>
          <Input
            {...s}
            placeholder="Placeholder"
            $fullWidth
            $label="Input"
            id={`input${suffix}`}
          />
          <Select {...s} $fullWidth $label="Select" id={`select${suffix}`}>
            <option>Select</option>
          </Select>
          <Col $lgSpan={2}>
            <Flex $gap={28} $wrap="wrap" $alignItems="flex-end">
              <Field label="Checkbox">
                <Flex $gap={12} $alignItems="center">
                  <Input {...s} type="checkbox" id={`checkbox${suffix}-1`} />
                  <Input
                    {...s}
                    type="checkbox"
                    id={`checkbox${suffix}-2`}
                    defaultChecked
                  />
                </Flex>
              </Field>
              <Field label="Radio">
                <Flex $gap={12} $alignItems="center">
                  <Input
                    {...s}
                    type="radio"
                    id={`radio${suffix}-1`}
                    name={`demo-radio${suffix}`}
                  />
                  <Input
                    {...s}
                    type="radio"
                    id={`radio${suffix}-2`}
                    name={`demo-radio${suffix}`}
                    defaultChecked
                  />
                </Flex>
              </Field>
              <Field label="Range">
                <Range {...s} />
              </Field>
              <Field label="Toggle">
                <Flex $gap={12} $alignItems="center">
                  <Toggle {...s} />
                  <Toggle {...s} defaultChecked />
                </Flex>
              </Field>
            </Flex>
          </Col>
        </Grid>
      </Col>
      <Textarea
        {...s}
        $label="Textarea"
        $fullWidth
        defaultValue="Textarea"
        id={`textarea${suffix}`}
      />
      <Col $lgSpan={3}>
        <Grid $xsCols={1} $lgCols={2} $gap={20}>
          <Password
            {...s}
            $fullWidth
            $label="Password"
            id={`password${suffix}`}
            placeholder="Password"
          />
          <Input
            {...s}
            $fullWidth
            $label="Date"
            id={`date${suffix}`}
            type="date"
          />
        </Grid>
      </Col>
    </Grid>
  );
}

// ---------------------------------------------------------------------------
// Button tier — every variant, at one $size.
// ---------------------------------------------------------------------------

function ButtonTier({ size }: { size: FieldSize }) {
  const s = sizeProps(size);

  return (
    <Grid $xsCols={1} $lgCols={2} $gap={20}>
      <Col>
        <Flex $gap={16} $wrap="wrap">
          <Button {...s}>Primary</Button>
          <Button {...s} $variant="secondary">
            Secondary
          </Button>
          <Button {...s} $variant="tertiary">
            Tertiary
          </Button>
        </Flex>
      </Col>
      <Col>
        <Flex $gap={16} $wrap="wrap">
          <Button {...s} $outline>
            Primary
          </Button>
          <Button {...s} $variant="secondary" $outline>
            Secondary
          </Button>
          <Button {...s} $variant="tertiary" $outline>
            Tertiary
          </Button>
        </Flex>
      </Col>
      <Col $lgSpan={2}>
        <Flex $gap={16} $wrap="wrap">
          <Button {...s} $icon={<Icon name="Download" size={18} />}>
            Icon left
          </Button>
          <Button
            {...s}
            $variant="secondary"
            $iconPosition="right"
            $icon={<Icon name="ArrowRight" size={18} />}
          >
            Icon right
          </Button>
          <Button {...s} $error>
            Destructive
          </Button>
          <Button {...s} disabled>
            Disabled
          </Button>
        </Flex>
      </Col>
    </Grid>
  );
}

// ---------------------------------------------------------------------------
// Icon-button tier — the interaction states, at one $size.
// ---------------------------------------------------------------------------

function IconButtonTier({ size }: { size: FieldSize }) {
  const s = sizeProps(size);

  return (
    <Flex $gap={16} $alignItems="center">
      <IconButton {...s} aria-label="Settings">
        <Icon name="Settings" />
      </IconButton>
      <IconButton {...s} aria-label="Edit">
        <Icon name="Pencil" />
      </IconButton>
      <IconButton {...s} $active aria-label="Toggle preview">
        <Icon name="Eye" />
      </IconButton>
      <IconButton {...s} $error aria-label="Delete">
        <Icon name="Trash2" />
      </IconButton>
      <IconButton {...s} disabled aria-label="Disabled">
        <Icon name="X" />
      </IconButton>
    </Flex>
  );
}

// A titled tier used to label the default / big / small repetitions.
function Tier({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledCaption>{label}</StyledCaption>
      <Space $size={16} />
      {children}
    </>
  );
}

// ---------------------------------------------------------------------------
// Page shell.
// ---------------------------------------------------------------------------

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

const StyledTitle = styled.h1`
  margin: 0;
  ${({ theme }) => styledHero3(theme)};
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledLead = styled.p`
  margin: 12px 0 0;
  max-width: 52ch;
  ${({ theme }) => styledText(theme)};
  color: ${({ theme }) => theme.colors.grayDark};
`;

const StyledDivider = styled.hr`
  margin: 56px 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
`;

// Closing footer: a centered call-to-action that sends visitors home.
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledFooterHeading = styled.h2`
  margin: 0;
  ${({ theme }) => styledH2(theme)};
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledFooterText = styled.p`
  margin: 12px 0 0;
  max-width: 430px;
  ${({ theme }) => styledText(theme)};
  color: ${({ theme }) => theme.colors.grayDark};
`;

// An anchor styled with the library's shared button treatment, so the CTA is a
// real link (opens the home page) while matching the primary Button exactly.
const StyledFooterCta = styled.a`
  ${({ theme }) => buttonStyles(theme, "primary")};
`;

function App() {
  return (
    <ToastNotificationsProvider>
      <ToastNotifications />
      <Container>
        <Space $size={80} />
        <MaxWidth $xs={960}>
          <StyledHeader>
            <div>
              <StyledTitle>Cherry Design System</StyledTitle>
              <StyledLead>
                A white-label React component library built with
                styled-components. Every control below is themeable and adapts
                to light and dark. Toggle the theme to see it react.
              </StyledLead>
            </div>
          </StyledHeader>
          <Space $size={24} />
          <ThemeToggle $shortcut />

          <StyledDivider />

          <Section
            title="Typography"
            note="A responsive type scale driven by theme tokens; sizes step up at the lg breakpoint."
          >
            <TypeRow name="Hero 3">
              <StyledHero3>Cherry</StyledHero3>
            </TypeRow>
            <TypeRow name="Heading 2">
              <StyledTypeH2>The quick brown fox</StyledTypeH2>
            </TypeRow>
            <TypeRow name="Heading 4">
              <StyledTypeH4>The quick brown fox jumps over</StyledTypeH4>
            </TypeRow>
            <TypeRow name="Body">
              <StyledBody>
                The quick brown fox jumps over the lazy dog. Body copy uses the
                text token with a relaxed line height for comfortable reading.
              </StyledBody>
            </TypeRow>
            <TypeRow name="Quote">
              <StyledBlockquote>
                Design is not just what it looks like and feels like. Design is
                how it works.
              </StyledBlockquote>
            </TypeRow>
            <TypeRow name="Code">
              <StyledBody>
                Install with{" "}
                <StyledInlineCode>
                  pnpm add cherry-styled-components
                </StyledInlineCode>{" "}
                and import from the barrel.
              </StyledBody>
            </TypeRow>
          </Section>

          <StyledDivider />

          <Section
            title="Foundations"
            note="Color and elevation tokens resolve per theme. The elevation cards are the Box component with shadow tokens layered on."
          >
            <StyledCaption>Color</StyledCaption>
            <Space $size={16} />
            <Grid $xsCols={2} $smCols={4} $lgCols={8} $gap={20}>
              {swatchTokens.map(({ token, label }) => (
                <div key={token}>
                  <StyledSwatch $token={token} />
                  <StyledSwatchLabel>{label}</StyledSwatchLabel>
                  <StyledSwatchValue>{token}</StyledSwatchValue>
                </div>
              ))}
            </Grid>

            <Space $size={40} />

            <StyledCaption>Elevation · Box</StyledCaption>
            <Space $size={16} />
            <Grid $xsCols={2} $lgCols={5} $gap={20}>
              {(["xs", "sm", "md", "lg", "xl"] as const).map((level) => (
                <StyledElevation key={level} $level={level} $padding={20}>
                  <StyledSwatchValue>shadow.{level}</StyledSwatchValue>
                </StyledElevation>
              ))}
            </Grid>
          </Section>

          <StyledDivider />

          <Section
            title="Buttons"
            note="Three variants, each solid or outline, plus icon, destructive, and disabled states."
          >
            <Tier label="Default">
              <ButtonTier size="default" />
            </Tier>
            <Space $size={32} />
            <Tier label="Big">
              <ButtonTier size="big" />
            </Tier>
            <Space $size={32} />
            <Tier label="Small">
              <ButtonTier size="small" />
            </Tier>
          </Section>

          <StyledDivider />

          <Section
            title="Icon buttons"
            note="Compact square buttons for toolbars: default, active, destructive, and disabled states."
          >
            <Tier label="Default">
              <IconButtonTier size="default" />
            </Tier>
            <Space $size={28} />
            <Tier label="Big">
              <IconButtonTier size="big" />
            </Tier>
            <Space $size={28} />
            <Tier label="Small">
              <IconButtonTier size="small" />
            </Tier>
          </Section>

          <StyledDivider />

          <Section
            title="Form controls"
            note="Inputs, selects, textarea, password, and the selection controls, shown across the three size tiers."
          >
            <Tier label="Default">
              <FormTier size="default" />
            </Tier>
            <Space $size={40} />
            <Tier label="Big">
              <FormTier size="big" />
            </Tier>
            <Space $size={40} />
            <Tier label="Small">
              <FormTier size="small" />
            </Tier>
          </Section>

          <StyledDivider />

          <Section
            title="Overlays"
            note="A focus-trapping modal and the toast notification system with color-coded intents."
          >
            <ModalToastDemo />
          </Section>

          <StyledDivider />

          <Section
            title="Disclosure"
            note="Accordions and keyboard-navigable tabs for progressively revealing content."
          >
            <Accordion title="Accordion" defaultOpen>
              This accordion is open by default. It animates open and close, and
              the chevron rotates to match.
            </Accordion>
            <Space $size={20} />
            <Accordion title="Accordion Inline" $inline>
              The inline variant drops the border and radius and uses tighter
              padding, for embedding inside cards or lists.
            </Accordion>
            <Space $size={24} />
            <Tabs>
              <TabContent title="Overview">
                The Cherry tabs group related content into panels. Use the arrow
                keys to move between tabs; Home and End jump to the edges.
              </TabContent>
              <TabContent title="Details">
                Each tab renders its own panel content, and only the active
                panel is mounted.
              </TabContent>
              <TabContent title="Settings">Settings panel content.</TabContent>
            </Tabs>
          </Section>

          <StyledDivider />

          <Section
            title="File upload"
            note="A full dropzone with constraints, a compact inline variant, and the avatar uploader in three sizes."
          >
            <DropzoneDemo />
            <Space $size={20} />
            <InlineDropzoneDemo />
            <Space $size={28} />
            <StyledCaption>Avatar · small / default / big</StyledCaption>
            <Space $size={16} />
            <AvatarDropzoneDemo />
          </Section>

          <StyledDivider />

          <Section
            title="Chat"
            note="A transport-agnostic chat kit: the headless provider owns panel state, focus and the transcript, while the app supplies onSend. The glow treatment is opt-in."
          >
            <ChatDemo />
          </Section>

          <StyledDivider />

          <Section
            title="Callouts & avatars"
            note="Alert-semantic callouts that keep their meaning under any brand palette, and the avatar primitive with image, initials, and icon fallbacks."
          >
            <Flex $direction="column" $gap={20} $fullWidth>
              <Callout $type="note">
                <p>A note callout for supplementary details.</p>
              </Callout>
              <Callout $type="warning">
                <p>A warning callout for things to watch out for.</p>
              </Callout>
              <Callout $type="danger">
                <p>A danger callout for destructive outcomes.</p>
              </Callout>
              <Callout $type="success">
                <p>A success callout for confirmations.</p>
              </Callout>
            </Flex>
            <Space $size={28} />
            <StyledCaption>Avatar · initials / icon / sizes</StyledCaption>
            <Space $size={16} />
            <Flex $gap={20} $alignItems="center">
              <Avatar $size="small" $name="Ada Lovelace" />
              <Avatar $name="Cherry" $color="secondary" />
              <Avatar $size="big" $color="tertiary" $alt="Assistant" />
            </Flex>
          </Section>

          <StyledDivider />

          <StyledFooter>
            <StyledCaption>Get started</StyledCaption>
            <Space $size={16} />
            <StyledFooterHeading>
              Start building with Cherry
            </StyledFooterHeading>
            <StyledFooterText>
              A white-label, fully themeable React component library. Drop it in
              and ship a consistent, accessible UI in light and dark.
            </StyledFooterText>
            <Space $size={28} />
            <StyledFooterCta
              href="https://cherry.al"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Cherry
              <Icon name="ArrowRight" size={18} />
            </StyledFooterCta>
          </StyledFooter>
        </MaxWidth>
        <Space $size={100} />
      </Container>
    </ToastNotificationsProvider>
  );
}

export default App;
