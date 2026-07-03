"use client";
import React, { useId, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { Theme, resetButton, styledText } from "./utils";

const StyledTabs = styled.div<{ theme: Theme }>`
  width: 100%;
`;

const StyledTabsList = styled.div<{ theme: Theme }>`
  display: flex;
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.spacing.radius.lg}
    ${({ theme }) => theme.spacing.radius.lg} 0 0;
  background: ${({ theme }) => theme.colors.light};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
`;

const StyledTabButton = styled.button<{ theme: Theme; $isActive: boolean }>`
  ${resetButton};
  flex: 1;
  min-width: fit-content;
  padding: 12px 20px;
  ${({ theme }) => styledText(theme)};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  border-bottom: solid 3px transparent;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:not(:last-child) {
    border-right: solid 1px ${({ theme }) => theme.colors.grayLight};
  }

  /* Inset rounded ring so it survives the tablist's clipped corners. The
     ring replaces the bottom indicator while focused. */
  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.radius.xs};
    outline: solid 2px ${({ theme }) => theme.colors.primary};
    outline-offset: -4px;
    border-bottom-color: transparent;
  }

  ${({ theme, $isActive }) =>
    $isActive
      ? css`
          color: ${theme.colors.primary};
          border-bottom-color: ${theme.colors.primary};
        `
      : css`
          &:hover {
            color: ${theme.colors.primary};
            background: ${rgba(theme.colors.primaryLight, 0.1)};
          }
        `}
`;

const StyledTabPanel = styled.div<{ theme: Theme }>`
  ${({ theme }) => styledText(theme)};
  color: ${({ theme }) => theme.colors.grayDark};
  background: ${({ theme }) => theme.colors.light};
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  border-top: none;
  border-radius: 0 0 ${({ theme }) => theme.spacing.radius.lg}
    ${({ theme }) => theme.spacing.radius.lg};
`;

export interface TabContentProps {
  title: string;
  children: React.ReactNode;
}

// Render-less marker: Tabs reads its title/children props and renders the
// active one inside the panel.
function TabContent({ children }: TabContentProps) {
  return <>{children}</>;
}

export interface TabsProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  children: React.ReactNode;
  onTabChange?: (index: number) => void;
  defaultActiveTab?: number;
  // Optional controlled active tab index. When provided the parent owns the
  // selection (pair with onTabChange); otherwise Tabs manages its own state.
  activeTab?: number;
}

function Tabs({
  children,
  onTabChange,
  defaultActiveTab,
  activeTab,
  ...rest
}: TabsProps) {
  const [internalActive, setInternalActive] = useState(defaultActiveTab ?? 0);
  const isControlled = activeTab !== undefined;
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabContentProps> =>
      React.isValidElement(child) &&
      typeof (child.props as TabContentProps).title === "string" &&
      (child.props as TabContentProps).title.trim() !== "",
  );

  const active = Math.min(
    isControlled ? activeTab : internalActive,
    Math.max(tabs.length - 1, 0),
  );

  const selectTab = (index: number) => {
    if (!isControlled) setInternalActive(index);
    onTabChange?.(index);
  };

  // Roving tabindex: arrows cycle through the tabs, Home/End jump to the
  // edges, and moving focus also selects (automatic activation).
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = (active + 1) % tabs.length;
        break;
      case "ArrowLeft":
        next = (active - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = tabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    selectTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <StyledTabs {...rest}>
      <StyledTabsList role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab, index) => (
          <StyledTabButton
            key={index}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            $isActive={index === active}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            onClick={() => selectTab(index)}
          >
            {tab.props.title}
          </StyledTabButton>
        ))}
      </StyledTabsList>
      <StyledTabPanel
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        {tabs[active]?.props.children}
      </StyledTabPanel>
    </StyledTabs>
  );
}

export { Tabs, TabContent };
