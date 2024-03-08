"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "@/app/theme";
import { StyledInputWrapper, StyledLabel } from "./input";
import { resetButton, statusBorderStyles } from "./utils/global";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	type?: "checkbox" | "radio";
	$label?: string;
	$size?: "default" | "big";
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
	border-radius: 30px;
	pointer-events: none;
	transition: all 0.3s ease;
	box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.secondaryLight};
	transform: none;
	width: ${({ $size }) => ($size === "big" ? "56px" : "46px")};
	height: ${({ $size }) => ($size === "big" ? "32px" : "22px")};

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
		border-radius: 30px;
		transition: all 0.3s ease;
		background: ${({ theme }) => theme.colors.light};
	}

	&::after {
		left: 0;
		top: 0;
		border-radius: 50%;
		transition: all 0.3s ease;
		transform: translateX(0);
		background: ${({ theme }) => theme.colors.secondary};
		width: ${({ $size }) => ($size === "big" ? "32px" : "22px")};
		height: ${({ $size }) => ($size === "big" ? "32px" : "22px")};
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
			background: ${({ theme }) => theme.colors.secondaryLight};
		}

		&::after {
			transform: translateX(25px);
		}
	}

	@media (hover: hover) {
		&:hover:not([disabled]) ~ .fake-toggle {
			border-color: ${({ theme }) => theme.colors.secondary};
		}
	}

	&:focus:not([disabled]) ~ .fake-toggle {
		outline: none;
		border-color: ${({ theme }) => theme.colors.secondary};
		box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.secondaryLight};
	}

	&:active:not([disabled]) ~ .fake-toggle {
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondaryLight};
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

function Toggle({ ...props }: ToggleProps) {
	return (
		<StyledInputWrapper $fullWidth={props.$fullWidth}>
			<StyledToggleWrapper>
				<StyledToggle {...props} type="checkbox" />
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

export { Toggle };
