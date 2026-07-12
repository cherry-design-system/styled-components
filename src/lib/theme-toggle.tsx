"use client";
import React, { forwardRef, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Theme, resetButton, interactiveStyles } from "./utils";
import { Icon } from "./icon";
import { ThemeContext } from "./styled-components";

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $hidden?: boolean;
  /**
   * Binds the Cmd/Ctrl+Shift+L keyboard shortcut while the toggle is mounted,
   * flipping between the light and dark theme without a click. Off by default.
   */
  $shortcut?: boolean;
}

const StyledThemeToggle = styled.button<{ theme: Theme; $hidden?: boolean }>`
  ${resetButton}
  ${interactiveStyles}
  width: 56px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  position: relative;
  margin: auto 0;
  background: ${({ theme }) => theme.colors.light};
  border-color: ${({ theme }) => theme.colors.grayLight};

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => rgba(theme.colors.primaryLight, 0.2)};
    transition: all 0.3s ease;
    z-index: 1;
    ${({ theme }) =>
      theme.isDark &&
      css`
        transform: translateX(26px);
      `}
  }

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}

  & svg {
    width: 16px;
    height: 16px;
    object-fit: contain;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
  }

  & svg[stroke] {
    stroke: ${({ theme }) => theme.colors.primary};
  }

  &:hover svg[stroke] {
    stroke: ${({ theme }) =>
      theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
  }
`;

function LocalThemeToggle(
  { onClick, $shortcut = false, ...props }: ThemeToggleProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { toggleTheme } = useContext(ThemeContext);

  // Bind Cmd/Ctrl+Shift+L to the theme toggle while the button is mounted.
  useEffect(() => {
    if (!$shortcut) return;

    function handleKeyDown(event: KeyboardEvent) {
      // Cmd on macOS, Ctrl elsewhere. Require Shift and forbid Alt so the
      // combo clears browser defaults: Cmd/Ctrl+L focuses the address bar, and
      // adding Shift steps out of that reserved space.
      if (
        !(event.metaKey || event.ctrlKey) ||
        !event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      if (event.key.toLowerCase() !== "l") return;
      event.preventDefault();
      toggleTheme();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [$shortcut, toggleTheme]);

  return (
    <StyledThemeToggle
      type="button"
      aria-label="Toggle Theme"
      {...props}
      onClick={(event) => {
        toggleTheme();
        onClick?.(event);
      }}
      ref={ref}
    >
      <Icon name="Sun" />
      <Icon name="MoonStar" />
    </StyledThemeToggle>
  );
}

const ThemeToggle = forwardRef(LocalThemeToggle);

export { ThemeToggle };
