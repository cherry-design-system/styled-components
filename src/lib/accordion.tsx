"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Icon } from "./icon";
import { Theme, styledText } from "./utils";

const StyledAccordion = styled.div<{ theme: Theme; $inline?: boolean }>`
  text-align: left;
  border-radius: ${({ theme, $inline }) =>
    $inline ? "0" : theme.spacing.radius.lg};
  margin: 0;
  ${({ theme }) => styledText(theme)};
  width: 100%;
  background: ${({ theme }) => theme.colors.light};

  ${({ theme, $inline }) =>
    !$inline &&
    css`
      border: solid 1px ${theme.colors.grayLight};
    `}
`;

const StyledAccordionTitle = styled.button<{
  theme: Theme;
  $isOpen: boolean;
  $inline?: boolean;
}>`
  appearance: none;
  border: none;
  background: none;
  font-family: inherit;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  font-weight: 700;
  cursor: pointer;
  margin: 0;
  ${({ theme }) => styledText(theme)};
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease;
  position: relative;
  padding: ${({ $inline }) =>
    $inline ? "8px 40px 8px 0" : "20px 50px 20px 20px"};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.radius.xs};
    outline: solid 2px ${({ theme }) => theme.colors.primary};
    border-bottom-color: transparent;
  }

  & .lucide-chevron-down {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ $inline }) => ($inline ? "0" : "20px")};
    transition: transform 0.3s ease;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: translateY(-50%) rotate(180deg);
      `}
  }
`;

// Animates open/close via grid-template-rows (0fr -> 1fr), since height
// can't transition to auto. The inner wrapper carries the padding so it
// collapses along with the row instead of jumping.
const StyledAccordionContent = styled.div<{
  theme: Theme;
  $isOpen: boolean;
}>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition:
    grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0.3s;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Clips the collapsing row. Padding lives on the body below: padding on
// this element would keep it from collapsing to zero height.
const StyledAccordionInner = styled.div`
  min-height: 0;
  overflow: clip;
`;

const StyledAccordionBody = styled.div<{
  theme: Theme;
  $isOpen: boolean;
  $inline?: boolean;
}>`
  ${({ theme }) => styledText(theme)};
  color: ${({ theme }) => theme.colors.grayDark};
  padding: ${({ $inline }) => ($inline ? "0 0 12px" : "0 20px 20px")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateY(${({ $isOpen }) => ($isOpen ? 0 : "-6px")});
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }
`;

export interface AccordionProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title" | "onToggle"
> {
  children: React.ReactNode;
  title: React.ReactNode;
  onToggle?: (isOpen: boolean) => void;
  $inline?: boolean;
  defaultOpen?: boolean;
  // Optional controlled open state. When provided the parent owns open/close
  // (pair with onToggle); otherwise the accordion manages its own state.
  open?: boolean;
}

function Accordion({
  children,
  title,
  onToggle,
  $inline,
  defaultOpen,
  open,
  ...rest
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleToggle = () => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onToggle?.(next);
  };

  return (
    <StyledAccordion $inline={$inline} {...rest}>
      <StyledAccordionTitle
        type="button"
        onClick={handleToggle}
        $isOpen={isOpen}
        $inline={$inline}
        aria-expanded={isOpen}
      >
        {title} <Icon name="ChevronDown" />
      </StyledAccordionTitle>
      <StyledAccordionContent $isOpen={isOpen}>
        <StyledAccordionInner>
          <StyledAccordionBody $isOpen={isOpen} $inline={$inline}>
            {children}
          </StyledAccordionBody>
        </StyledAccordionInner>
      </StyledAccordionContent>
    </StyledAccordion>
  );
}

export { Accordion };
