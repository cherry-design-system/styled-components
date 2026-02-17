"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  fullWidthStyles,
  resetButton,
  resetInput,
  statusBorderStyles,
} from "./utils";
import { StyledInputWrapper, StyledLabel } from "./input";

interface TextareaProps extends Omit<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  "size"
> {
  children?: React.ReactNode;
  $wrapperClassName?: string;
  $label?: string;
  $size?: "default" | "big" | "small";
  $error?: boolean;
  $success?: boolean;
  $fullWidth?: boolean;
  rows?: number;
}

const StyledTextarea = styled.textarea<TextareaProps>`
  ${resetButton};
  ${resetInput};
  font-family: inherit;
  display: inline-block;
  padding: 15px;
  border-radius: ${({ theme }) => theme.spacing.radius.xs};
  font-weight: 400;
  white-space: break-spaces;
  hyphens: none;
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.light};
  border: solid 2px ${({ theme }) => theme.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.3s ease;
  min-height: 80px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:hover:not([disabled]) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }

  ${({ $size, theme }) =>
    $size === "big"
      ? `font-size: ${theme.fontSizes.inputBig.lg};
			line-height: ${theme.lineHeights.text.lg};
	`
      : $size === "small"
        ? `font-size: ${theme.fontSizes.inputSmall.lg};
			line-height: ${theme.lineHeights.text.lg};
      padding: 10px 12px;
	`
        : `font-size: ${theme.fontSizes.input.lg};
			line-height: ${theme.lineHeights.text.lg};`}

  ${({ $error, $success, theme }) => {
    return statusBorderStyles($error, $success, theme);
  }}

	${({ disabled, theme }) =>
    disabled &&
    `cursor: not-allowed;
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.gray};
		color: ${theme.colors.gray};
	`}

	${({ $fullWidth }) => fullWidthStyles($fullWidth)}
`;

function LocalTextarea(
  { ...props }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  return (
    <StyledInputWrapper
      $fullWidth={props.$fullWidth}
      $label={props.$label}
      className={props.$wrapperClassName}
    >
      {props.$label && (
        <StyledLabel htmlFor={props.id} $label={props.$label}>
          {props.$label}
        </StyledLabel>
      )}
      <StyledTextarea
        {...props}
        aria-invalid={props.$error || undefined}
        ref={ref}
      >
        {props.children}
      </StyledTextarea>
    </StyledInputWrapper>
  );
}

const Textarea = forwardRef(LocalTextarea);

export { Textarea };
