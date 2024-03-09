"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "@/app/theme";
import {
	formElementHeightStyles,
	resetButton,
} from "@/app/components/cherry/utils/mixins";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	$variant?: "primary" | "secondary" | "tertiary";
	$size?: "default" | "big";
	$outline?: boolean;
	$fullWidth?: boolean;
	theme?: Theme;
}

const StyledButton = styled.button<ButtonProps>`
	${resetButton};
	font-family: inherit;
	display: inline-block;
	padding: 15px 30px;
	border-radius: 100px;
	font-weight: 600;
	white-space: nowrap;
	hyphens: auto;
	color: ${({ theme }) => theme.colors.light};
	transition: all 0.3s ease;

	${({ $variant, $outline, theme, disabled }) => {
		if (disabled) return;
		switch ($variant) {
			default:
				return `
					color: ${$outline ? theme.colors.primary : theme.colors.light};
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
				`;
			case "secondary":
				return `
					color: ${$outline ? theme.colors.secondary : theme.colors.light};
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
				`;
			case "tertiary":
				return `
					color: ${$outline ? theme.colors.tertiary : theme.colors.light};
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
				`;
		}
	}}

	${({ $size }) => formElementHeightStyles($size)}

	${({ $size, theme }) =>
		$size === "big"
			? `font-size: ${theme.fontSizes.buttonBig.lg};
			line-height: ${theme.lineHeights.buttonBig.lg};
	`
			: `font-size: ${theme.fontSizes.button.lg};
			line-height: ${theme.lineHeights.button.lg};`}

	${({ disabled, theme }) =>
		disabled &&
		`
		cursor: not-allowed;
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.grayLight};
		color: ${theme.colors.gray};
	`}

	${({ $fullWidth }) => $fullWidth && `width: 100%;`}
`;

function Button({ ...props }: ButtonProps) {
	return <StyledButton {...props}>{props.children}</StyledButton>;
}

export { Button };
