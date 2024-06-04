"use client";
import React from "react";
import styled, { css } from "styled-components";
import {
  Theme,
  IconCheck,
  formElementHeightStyles,
  fullWidthStyles,
  resetButton,
  resetInput,
  statusBorderStyles,
} from "./utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  $label?: string;
  $size?: "default" | "big";
  $error?: boolean;
  $success?: boolean;
  $fullWidth?: boolean;
  $icon?: React.ReactNode;
  $iconPosition?: "left" | "right";
  theme?: Theme;
}

export const StyledInputWrapper = styled.span<InputProps>`
  display: inline-flex;
  flex-wrap: ${({ type }) => (type === "checkbox" || type === "radio" ? "nowrap" : "wrap")};
  align-items: center;

  ${({ $label }) =>
    $label &&
    css`
      gap: 10px;
    `}

  ${({ $fullWidth }) => fullWidthStyles($fullWidth ? true : false)}
`;

export const StyledLabel = styled.label<InputProps>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: ${({ theme }) => theme.fontSizes.text.lg};
  line-height: ${({ theme }) => theme.lineHeights.text.lg};
`;

const StyledInput = styled.input<InputProps>`
  ${resetButton};
  ${resetInput};
  font-family: inherit;
  display: inline-block;
  padding: 17px 15px;
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.light};
  border: solid 2px ${({ theme }) => theme.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }

  ${({ $size }) => formElementHeightStyles($size)}

  ${({ $size, theme }) =>
    $size === "big"
      ? `font-size: ${theme.fontSizes.inputBig.lg};
			line-height: ${theme.lineHeights.inputBig.lg};
	`
      : `font-size: ${theme.fontSizes.input.lg};
			line-height: ${theme.lineHeights.input.lg};`}

	${({ $error, $success, theme }) => {
    return statusBorderStyles($error ? true : false, $success ? true : false, theme);
  }}

	${({ disabled, theme }) =>
    disabled &&
    `cursor: not-allowed;
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.gray};
		color: ${theme.colors.gray};
	`}

	${({ $fullWidth }) => fullWidthStyles($fullWidth ? true : false)}
`;

const StyledIconWrapper = styled.span<InputProps>`
  display: inline-flex;
  position: relative;
  line-height: 0;

  & em {
    display: block;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }

  & svg,
  & em {
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }
`;

const StyledRadioCheckboxInput = styled.input<InputProps>`
  ${resetButton};
  display: inline-block;
  border: solid 2px ${({ theme }) => theme.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }

  ${({ type, theme }) =>
    type === "checkbox" ? `border-radius: ${theme.spacing.radius.xs};` : `border-radius: 50%;`}

  ${({ disabled, theme }) =>
    disabled &&
    `cursor: not-allowed;
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.gray};
		color: ${theme.colors.gray};
	`}

	${({ $error, $success, theme }) => {
    return statusBorderStyles($error ? true : false, $success ? true : false, theme);
  }}

	${({ $size }) => {
    if ($size === "big") {
      return `
					min-width: 32px;
					width: 32px;
					min-height: 32px;
					height: 32px;

					& ~ svg {
						min-width: 18px;
						width: 18px;
						min-height: 18px;
						height: 18px;
					}

					& ~ em {
						min-width: 14px;
						width: 14px;
						min-height: 14px;
						height: 14px;
					}
				`;
    } else {
      return `
					min-width: 22px;
					width: 22px;
					min-height: 22px;
					height: 22px;

					& ~ svg {
						min-width: 12px;
						width: 12px;
						min-height: 12px;
						height: 12px;
					}

					& ~ em {
						min-width: 8px;
						width: 8px;
						min-height: 8px;
						height: 8px;
					}
				`;
    }
  }}

	&:checked ~ svg,
	&:checked ~ em {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const StyledCustomIconWrapper = styled.span<InputProps>`
  position: relative;
  ${({ $fullWidth }) => fullWidthStyles($fullWidth ? true : false)};

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    width: 24px;
    height: 24px;
    object-fit: contain;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $icon, $iconPosition }) =>
    $icon && $iconPosition === "right"
      ? css`
          & svg {
            right: 16px;
          }

          & input {
            padding-right: 50px;
          }
        `
      : css`
          & svg {
            left: 16px;
          }

          & svg ~ input {
            padding-left: 50px;
          }
        `}
`;

function Input({ ...props }: InputProps) {
  if (props.type === "checkbox" || props.type === "radio") {
    return (
      <StyledInputWrapper $fullWidth={props.$fullWidth} type={props.type} $label={props.$label}>
        <StyledIconWrapper>
          <StyledRadioCheckboxInput {...props} />
          {!props.disabled && props.type === "checkbox" ? <IconCheck /> : <em />}
        </StyledIconWrapper>
        {props.$label && <StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>}
      </StyledInputWrapper>
    );
  }

  return (
    <StyledInputWrapper $fullWidth={props.$fullWidth} type={props.type} $label={props.$label}>
      {props.$label && <StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>}
      <StyledCustomIconWrapper
        $fullWidth={props.$fullWidth}
        $iconPosition={props.$iconPosition}
        $icon={props.$icon}
      >
        {props.$iconPosition !== "right" && props.$icon && props.$icon}
        <StyledInput {...props} />
        {props.$iconPosition === "right" && props.$icon && props.$icon}
      </StyledCustomIconWrapper>
    </StyledInputWrapper>
  );
}

export { Input };
