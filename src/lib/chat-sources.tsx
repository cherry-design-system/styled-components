"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Theme, alpha, interactiveStyles } from "./utils";

export interface ChatSourcesProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ChatSourceProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const StyledChatSources = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  /* Inside a message the chips follow the answer body, which trims its own
     trailing margin, so the row provides the separation itself. Standalone
     (first-child) usage stays margin-free. */
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

// A plain anchor so the library stays router-agnostic; pass `as={Link}` to
// render through a framework's link component instead.
const StyledChatSource = styled.a<{ theme: Theme }>`
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.small.lg};
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  font-weight: 600;
  white-space: nowrap;
  min-width: fit-content;
  background: ${({ theme }) => alpha(theme.colors.primaryLight, 10)};
  padding: 6px 8px;
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  ${interactiveStyles};

  & svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  &:hover {
    color: ${({ theme }) =>
      theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
  }
`;

function LocalChatSources(
  { children, ...props }: ChatSourcesProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <StyledChatSources {...props} ref={ref}>
      {children}
    </StyledChatSources>
  );
}

function LocalChatSource(
  { children, ...props }: ChatSourceProps,
  ref: React.Ref<HTMLAnchorElement>,
) {
  return (
    <StyledChatSource {...props} ref={ref}>
      {children}
    </StyledChatSource>
  );
}

const ChatSources = forwardRef(LocalChatSources);
const ChatSource = forwardRef(LocalChatSource);

export { ChatSource, ChatSources };
