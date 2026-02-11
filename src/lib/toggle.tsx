"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Theme, resetButton, statusBorderStyles } from "./utils";
import { StyledInputWrapper, StyledLabel } from "./input";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  type?: "checkbox" | "radio";
  $wrapperClassName?: string;
  $label?: string;
  $size?: "default" | "big" | "small";
  $error?: boolean;
  $success?: boolean;
  $fullWidth?: boolean;
  theme?: Theme;
}

const StyledToggleWrapper = styled.span<ToggleProps>`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`;

const StyledFakeToggle = styled.span<ToggleProps>`
  display: block;
  border: solid 2px ${({ theme }) => theme.colors.grayLight};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.radius.xl};
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primaryLight};
  transform: none;
  width: ${({ $size }) => ($size === "big" ? "56px" : $size === "small" ? "38px" : "46px")};
  height: ${({ $size }) => ($size === "big" ? "32px" : $size === "small" ? "18px" : "22px")};

  ${({ $error, $success, theme }) => {
    return statusBorderStyles(
      $error ? true : false,
      $success ? true : false,
      theme,
    );
  }}

  &::before,
	&::after {
    content: "";
    display: block;
    position: absolute;
  }

  &::before {
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    max-width: 0;
    border-radius: ${({ theme }) => theme.spacing.radius.xl};
    background: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease;
  }

  &::after {
    left: 0;
    top: 0;
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: translateX(0);
    background: ${({ theme }) => theme.colors.primary};
    width: ${({ $size }) => ($size === "big" ? "32px" : $size === "small" ? "18px" : "22px")};
    height: ${({ $size }) => ($size === "big" ? "32px" : $size === "small" ? "18px" : "22px")};
  }
`;

const StyledToggle = styled.input<ToggleProps>`
  ${resetButton};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 10;

  &:checked ~ .fake-toggle {
    &::before {
      max-width: 46px;
      background: ${({ theme }) => theme.colors.primaryLight};
    }

    &::after {
      transform: translateX(
        ${({ $size }) => ($size === "big" ? "25px" : $size === "small" ? "20px" : "25px")}
      );
    }
  }

  &:hover:not([disabled]) ~ .fake-toggle {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus:not([disabled]) ~ .fake-toggle {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
  }

  &:active:not([disabled]) ~ .fake-toggle {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }

  ${({ disabled, theme }) =>
    disabled &&
    `cursor: not-allowed;

		& ~ .fake-toggle {
			border-color: ${theme.colors.gray};

			&::before {
				background: ${theme.colors.grayLight};
			}

			&::after {
				background: ${theme.colors.gray};
			}
		}`}
`;

function LocalToggle(
  { type = "checkbox", ...props }: ToggleProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <StyledInputWrapper
      $fullWidth={props.$fullWidth}
      $label={props.$label}
      className={props.$wrapperClassName}
    >
      <StyledToggleWrapper>
        <StyledToggle {...props} type={type} ref={ref} />
        <StyledFakeToggle
          $error={props.$error}
          $success={props.$success}
          className="fake-toggle"
          $size={props.$size}
        />
      </StyledToggleWrapper>
      {props.$label && (
        <StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>
      )}
    </StyledInputWrapper>
  );
}

const Toggle = forwardRef(LocalToggle);

export { Toggle };
