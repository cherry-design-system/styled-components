"use client";
import React, { forwardRef, useContext } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Theme, resetButton } from "./utils";
import { Icon } from "./icon";
import { ThemeContext } from "./styled-components";

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $hidden?: boolean;
}

const StyledThemeToggle = styled.button<{ theme: Theme; $hidden?: boolean }>`
  ${resetButton}
  width: 56px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  position: relative;
  margin: auto 0;
  transform: scale(1);
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  transition: all 0.3s ease;

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
    margin: auto;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
  }

  & .lucide-sun {
    transform: translateX(1px);
  }

  & svg[stroke] {
    stroke: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) =>
      theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};

    & svg[stroke] {
      stroke: ${({ theme }) =>
        theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;

function LocalThemeToggle(
  { onClick, ...props }: ThemeToggleProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { toggleTheme } = useContext(ThemeContext);

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
