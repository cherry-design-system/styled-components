"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  Theme,
  fullWidthStyles,
  resetButton,
  statusBorderStyles,
} from "./utils";
import { StyledLabel } from "./input";

interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  className?: string;
  $wrapperClassName?: string;
  $label?: string;
  $size?: "default" | "big";
  $error?: boolean;
  $success?: boolean;
  $fullWidth?: boolean;
  theme?: Theme;
}

const StyledInputWrapper = styled.span<InputProps>`
  display: inline-flex;
  flex-wrap: ${({ type }) =>
    type === "checkbox" || type === "radio" ? "fprnowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth }) => fullWidthStyles($fullWidth ? true : false)}
`;

const StyledInput = styled.input<InputProps>`
  ${resetButton};
  padding: 0;
  height: 10px;
  font-size: 0;
  background: transparent;
  min-width: 100px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.spacing.radius.xl};
    border: solid 2px ${({ theme }) => theme.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error, $success, theme }) => {
      return statusBorderStyles(
        $error ? true : false,
        $success ? true : false,
        theme,
      );
    }}
  }

  &::-moz-range-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.spacing.radius.xl};
    border: solid 2px ${({ theme }) => theme.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error, $success, theme }) => {
      return statusBorderStyles(
        $error ? true : false,
        $success ? true : false,
        theme,
      );
    }}
  }

  &::-webkit-slider-thumb {
    ${resetButton};
    background: ${({ theme }) => theme.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &::-moz-range-thumb {
    ${resetButton};
    background: ${({ theme }) => theme.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &:hover:not([disabled]) {
    &::-webkit-slider-runnable-track {
      border: solid 2px ${({ theme }) => theme.colors.primary};
    }

    &::-moz-range-track {
      border: solid 2px ${({ theme }) => theme.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    &::-webkit-slider-runnable-track {
      border: solid 2px ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    }
    &::-moz-range-track {
      border: solid 2px ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    }
  }

  &:active:not([disabled]) {
    &::-webkit-slider-runnable-track {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
    }
    &::-moz-range-track {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
    }
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
		cursor: not-allowed;

		&::-webkit-slider-runnable-track {
			background: ${theme.colors.grayLight};
			cursor: not-allowed;
		}

		&::-moz-range-track {
			background: ${theme.colors.grayLight};
			cursor: not-allowed;
		}

		&::-webkit-slider-thumb {
			background: ${theme.colors.gray};
			cursor: not-allowed;
		}

		&::-moz-range-thumb {
			background: ${theme.colors.gray};
			cursor: not-allowed;
		}
	`}

  ${({ $fullWidth }) => fullWidthStyles($fullWidth ? true : false)}

	${({ $size }) => {
    if ($size === "big") {
      return `
					height: 32px;

					&::-webkit-slider-runnable-track {
						height: 14px;
					}

					&::-moz-range-track {
						height: 10px;
					}

					&::-webkit-slider-thumb {
						width: 32px;
						height: 32px;
						margin-top: -11px;
					}

					&::-moz-range-thumb {
						width: 32px;
						height: 32px;
					}
				`;
    } else {
      return `
					height: 22px;

					&::-webkit-slider-runnable-track {
						height: 10px;
					}

					&::-moz-range-track {
						height: 6px;
					}

					&::-webkit-slider-thumb {
						width: 22px;
						height: 22px;
						margin-top: -8px;
					}

					&::-moz-range-thumb {
						width: 22px;
						height: 22px;
					}
				`;
    }
  }}
`;

function LocalRange(
  { ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <StyledInputWrapper
      $fullWidth={props.$fullWidth}
      className={props.$wrapperClassName}
    >
      {props.$label && (
        <StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>
      )}
      <StyledInput {...props} type="range" ref={ref} />
    </StyledInputWrapper>
  );
}

const Range = forwardRef(LocalRange);

export { Range };
