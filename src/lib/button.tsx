"use client";
import React from "react";
import styled, { css } from "styled-components";
import { Theme, formElementHeightStyles, resetButton } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  $variant?: "primary" | "secondary" | "tertiary";
  $size?: "default" | "big";
  $outline?: boolean;
  $fullWidth?: boolean;
  $icon?: React.ReactNode;
  $iconPosition?: "left" | "right";
  theme?: Theme;
}

export const buttonStyles = (
  theme: Theme,
  $variant?: "primary" | "secondary" | "tertiary",
  $size?: "default" | "big",
  $outline?: boolean,
  $fullWidth?: boolean,
  disabled?: boolean,
) => css`
  ${resetButton};
  font-family: inherit;
  display: inline-flex;
  padding: 15px 30px;
  border-radius: 100px;
  font-weight: 600;
  white-space: nowrap;
  hyphens: auto;
  color: ${theme.isDark ? theme.colors.dark : theme.colors.light};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  gap: 10px;
  text-overflow: ellipsis;
  justify-content: center;

  & .icon,
  & .lucide {
    margin: -4px 0 0 0;
    min-width: 24px;
  }

  ${!disabled &&
  $variant === "primary" &&
  css`
    color: ${$outline
      ? theme.colors.primary
      : theme.isDark
        ? theme.colors.dark
        : theme.colors.light};
    background: ${$outline ? "transparent" : theme.colors.primary};
    border: solid 2px ${theme.colors.primary};
    box-shadow: 0 0 0 0px ${theme.colors.primary};

    @media (hover: hover) {
      &:hover {
        background: ${$outline ? "transparent" : theme.colors.primaryDark};
        border-color: ${theme.colors.primaryDark};
        ${$outline && `color: ${theme.colors.primaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
    }
  `}

  ${!disabled &&
  $variant === "secondary" &&
  css`
    color: ${$outline
      ? theme.colors.secondary
      : theme.isDark
        ? theme.colors.dark
        : theme.colors.light};
    background: ${$outline ? "transparent" : theme.colors.secondary};
    border: solid 2px ${theme.colors.secondary};
    box-shadow: 0 0 0 0px ${theme.colors.secondary};

    @media (hover: hover) {
      &:hover {
        background: ${$outline ? "transparent" : theme.colors.secondaryDark};
        border-color: ${theme.colors.secondaryDark};
        ${$outline && `color: ${theme.colors.secondaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
    }
  `}

	${!disabled &&
  $variant === "tertiary" &&
  css`
    color: ${$outline
      ? theme.colors.tertiary
      : theme.isDark
        ? theme.colors.dark
        : theme.colors.light};
    background: ${$outline ? "transparent" : theme.colors.tertiary};
    border: solid 2px ${theme.colors.tertiary};
    box-shadow: 0 0 0 0px ${theme.colors.tertiary};

    @media (hover: hover) {
      &:hover {
        background: ${$outline ? "transparent" : theme.colors.tertiaryDark};
        border-color: ${theme.colors.tertiaryDark};
        ${$outline && `color: ${theme.colors.tertiaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
    }
  `}

	${formElementHeightStyles($size)}

	${$size === "big"
    ? `font-size: ${theme.fontSizes.buttonBig.lg};
			line-height: ${theme.lineHeights.buttonBig.lg};
	`
    : `font-size: ${theme.fontSizes.button.lg};
			line-height: ${theme.lineHeights.button.lg};`}

	${disabled &&
  `
		cursor: not-allowed;
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.grayLight};
		color: ${theme.colors.gray};
	`}

	${$fullWidth && `width: 100%;`}
`;

const StyledButton = styled.button<ButtonProps>`
  ${({ theme, $variant, $size, $outline, $fullWidth, disabled }) =>
    buttonStyles(theme, $variant, $size, $outline, $fullWidth, disabled)}
`;

function Button({ $variant = "primary", ...props }: ButtonProps) {
  return (
    <StyledButton $variant={$variant} {...props}>
      {props.$iconPosition !== "right" && props.$icon && props.$icon}
      {props.children}
      {props.$iconPosition === "right" && props.$icon && props.$icon}
    </StyledButton>
  );
}

export { Button };
