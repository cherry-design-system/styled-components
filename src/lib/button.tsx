"use client";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

import { Theme, formElementHeightStyles, resetButton } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  $variant?: "primary" | "secondary" | "tertiary";
  $size?: "default" | "big" | "small";
  $outline?: boolean;
  $fullWidth?: boolean;
  $icon?: React.ReactNode;
  $iconPosition?: "left" | "right";
  $isError?: boolean;
  theme?: Theme;
}

export const buttonStyles = (
  theme: Theme,
  $variant?: "primary" | "secondary" | "tertiary",
  $size?: "default" | "big" | "small",
  $outline?: boolean,
  $fullWidth?: boolean,
  $isError?: boolean,
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
  align-items: center;
  min-height: fit-content;

  & .icon,
  & .lucide {
    margin: auto 0;
  }

  ${!disabled &&
  $variant === "primary" &&
  css`
    color: ${$outline ? theme.colors.primary : theme.colors.light};
    background: ${$outline ? "transparent" : theme.colors.primary};
    border: solid 2px ${theme.colors.primary};
    box-shadow: 0 0 0 0px ${theme.colors.primary};

    &:hover {
      background: ${$outline ? "transparent" : theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
      ${$outline && `color: ${theme.colors.primaryDark}`};
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
    color: ${$outline ? theme.colors.secondary : theme.colors.light};
    background: ${$outline ? "transparent" : theme.colors.secondary};
    border: solid 2px ${theme.colors.secondary};
    box-shadow: 0 0 0 0px ${theme.colors.secondary};

    &:hover {
      background: ${$outline ? "transparent" : theme.colors.secondaryDark};
      border-color: ${theme.colors.secondaryDark};
      ${$outline && `color: ${theme.colors.secondaryDark}`};
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
    color: ${$outline ? theme.colors.tertiary : theme.colors.light};
    background: ${$outline ? "transparent" : theme.colors.tertiary};
    border: solid 2px ${theme.colors.tertiary};
    box-shadow: 0 0 0 0px ${theme.colors.tertiary};

    &:hover {
      background: ${$outline ? "transparent" : theme.colors.tertiaryDark};
      border-color: ${theme.colors.tertiaryDark};
      ${$outline && `color: ${theme.colors.tertiaryDark}`};
    }

    &:focus {
      box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
    }
  `}

  ${!disabled &&
  $isError &&
  css`
    color: ${$outline ? theme.colors.error : theme.colors.light};
    background: ${$outline ? "transparent" : theme.colors.error};
    border: solid 2px ${theme.colors.error};
    box-shadow: 0 0 0 0px ${theme.colors.error};

    &:hover {
      background: ${$outline ? "transparent" : darken(0.1, theme.colors.error)};
      border-color: ${darken(0.1, theme.colors.error)};
      ${$outline && `color: ${darken(0.1, theme.colors.error)}`};
    }

    &:focus {
      box-shadow: 0 0 0 4px ${lighten(0.1, theme.colors.error)};
    }

    &:active {
      box-shadow: 0 0 0 2px ${lighten(0.1, theme.colors.error)};
    }
  `}


	${formElementHeightStyles($size)}

	${$size === "big"
    ? `font-size: ${theme.fontSizes.buttonBig.lg};
			line-height: ${theme.lineHeights.buttonBig.lg};
      padding: 18px 30px;
	`
    : $size === "small"
      ? `font-size: ${theme.fontSizes.buttonSmall.lg};
			line-height: ${theme.lineHeights.buttonSmall.lg};
      padding: 10px 20px;
	`
      : `font-size: ${theme.fontSizes.button.lg};
			line-height: ${theme.lineHeights.button.lg};`}

	${disabled &&
  `
		cursor: not-allowed;
		background: ${theme.colors.grayLight};
    border: solid 2px ${theme.colors.grayLight};
		color: ${theme.colors.gray};
	`}

	${$fullWidth && `width: 100%;`}
`;

const StyledButton = styled.button<ButtonProps>`
  ${({ theme, $variant, $isError, $size, $outline, $fullWidth, disabled }) =>
    buttonStyles(
      theme,
      $variant,
      $size,
      $outline,
      $fullWidth,
      $isError,
      disabled,
    )}
`;

function LocalButton(
  { $variant = "primary", ...props }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <StyledButton
      $variant={$variant}
      $isError={props.$isError}
      {...props}
      ref={ref}
    >
      {props.$iconPosition !== "right" && props.$icon && props.$icon}
      {props.children}
      {props.$iconPosition === "right" && props.$icon && props.$icon}
    </StyledButton>
  );
}

const Button = forwardRef(LocalButton);

export { Button };
