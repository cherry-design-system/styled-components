"use client";
import React from "react";
import styled from "styled-components";

import { Avatar } from "./avatar";
import { Callout } from "./callout";
import { ChatSource, ChatSources } from "./chat-sources";
import { ChatTyping } from "./chat-typing";
import { Prose } from "./prose";

/**
 * The showcase command set behind ChatProvider's $showcase prop: type a
 * command into the chat and the reply is a live demo of that element,
 * rendered locally without touching the transport. `help` lists them all.
 */
export interface ShowcaseCommand {
  name: string;
  description: string;
  render: () => React.ReactNode;
}

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

// The component catalog rendered by `list`, grouped like the docs.
const CATALOG: Array<{ group: string; components: string[] }> = [
  {
    group: "Form",
    components: [
      "Button",
      "IconButton",
      "Input (Checkbox / Radio via type)",
      "Select",
      "Textarea",
      "Toggle",
      "Range",
      "Password",
      "Dropzone",
      "AvatarDropzone",
    ],
  },
  {
    group: "Layout",
    components: [
      "Container",
      "Grid",
      "Col",
      "Flex",
      "Box",
      "MaxWidth",
      "Space",
    ],
  },
  {
    group: "Interactive",
    components: ["Accordion", "Tabs", "Modal", "Toast", "ThemeToggle", "Icon"],
  },
  {
    group: "Content",
    components: ["Prose", "Callout", "Avatar"],
  },
  {
    group: "Chat",
    components: [
      "ChatProvider",
      "ChatPanel",
      "ChatMessageList",
      "ChatMessage",
      "ChatInput",
      "ChatLauncher",
      "ChatTyping",
      "ChatSources",
    ],
  },
];

function HelpReply() {
  return (
    <Prose $compact>
      <p>Here is what I can render:</p>
      <ul>
        {showcaseCommands.map((command) => (
          <li key={command.name}>
            <code>{command.name}</code> — {command.description}
          </li>
        ))}
      </ul>
    </Prose>
  );
}

function ListReply() {
  return (
    <Prose $compact>
      <p>The Cherry component catalog:</p>
      {CATALOG.map(({ group, components }) => (
        <React.Fragment key={group}>
          <h6>{group}</h6>
          <ul>
            {components.map((component) => (
              <li key={component}>{component}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Prose>
  );
}

function CalloutReply() {
  return (
    <StyledStack>
      <Callout $type="note">
        <p>A note callout for supplementary details.</p>
      </Callout>
      <Callout $type="info">
        <p>An info callout for neutral information.</p>
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
    </StyledStack>
  );
}

function AvatarReply() {
  return (
    <StyledRow>
      <Avatar $size="small" $name="Ada Lovelace" />
      <Avatar $name="Cherry" $color="secondary" />
      <Avatar $size="big" $color="tertiary" $alt="Assistant" />
    </StyledRow>
  );
}

function ProseReply() {
  return (
    <Prose $compact>
      <h5>Rendered markdown</h5>
      <p>
        Prose styles <a href="#">links</a>, lists, tables and{" "}
        <code>inline code</code> with Cherry typography.
      </p>
      <ul>
        <li>First item</li>
        <li>Second item</li>
      </ul>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$compact</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Prose>
  );
}

function SourcesReply() {
  return (
    <StyledStack>
      <Prose $compact>
        <p>Source chips link an answer back to where it came from:</p>
      </Prose>
      <ChatSources>
        <ChatSource href="#">Getting Started</ChatSource>
        <ChatSource href="#">Theming</ChatSource>
        <ChatSource href="#">Chat Kit</ChatSource>
      </ChatSources>
    </StyledStack>
  );
}

function TypingReply() {
  return (
    <StyledStack>
      <Prose $compact>
        <p>The typing indicator shown while a reply is on its way:</p>
      </Prose>
      <ChatTyping />
    </StyledStack>
  );
}

export const showcaseCommands: ShowcaseCommand[] = [
  {
    name: "help",
    description: "list these commands",
    render: () => <HelpReply />,
  },
  {
    name: "list",
    description: "the full Cherry component catalog",
    render: () => <ListReply />,
  },
  {
    name: "callout",
    description: "the five callout intents",
    render: () => <CalloutReply />,
  },
  {
    name: "avatar",
    description: "avatars with initials and icon fallbacks",
    render: () => <AvatarReply />,
  },
  {
    name: "prose",
    description: "markdown-style content with Cherry typography",
    render: () => <ProseReply />,
  },
  {
    name: "sources",
    description: "the source-chip row",
    render: () => <SourcesReply />,
  },
  {
    name: "typing",
    description: "the three-dot typing indicator",
    render: () => <TypingReply />,
  },
];

/**
 * Matches a chat question against the showcase commands ("help", "/help" and
 * any casing all work) and returns the rendered demo, or null when the input
 * is not a command and should go to the transport.
 */
export function resolveShowcaseCommand(input: string): React.ReactNode | null {
  const name = input.trim().toLowerCase().replace(/^\//, "");
  const command = showcaseCommands.find((entry) => entry.name === name);
  return command ? command.render() : null;
}
