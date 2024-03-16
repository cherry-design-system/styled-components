"use client";
import React from "react";
import styled from "styled-components";
import {
	theme as defaultTheme,
	Theme,
	fullWidthStyles,
	resetButton,
	resetInput,
	statusBorderStyles,
} from "./utils";
import { StyledInputWrapper, StyledLabel } from "./input";

interface TextareaProps
	extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
	children?: React.ReactNode;
	$label?: string;
	$size?: "default" | "big";
	$error?: boolean;
	$success?: boolean;
	$fullWidth?: boolean;
	theme?: Theme;
}

const StyledTextarea = styled.textarea<TextareaProps>`
	${resetButton};
	${resetInput};
	font-family: inherit;
	display: inline-block;
	padding: 15px;
	border-radius: ${({ theme }) => theme.spacing.radius.xs};
	font-weight: 400;
	white-space: nowrap;
	hyphens: auto;
	color: ${({ theme }) => theme.colors.dark};
	background: ${({ theme }) => theme.colors.light};
	border: solid 2px ${({ theme }) => theme.colors.grayLight};
	box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primaryLight};
	transition: all 0.3s ease;
	min-height: 80px;

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

	${({ $size, theme }) =>
		$size === "big"
			? `font-size: ${theme.fontSizes.inputBig.lg};
			line-height: ${theme.lineHeights.text.lg};
	`
			: `font-size: ${theme.fontSizes.input.lg};
			line-height: ${theme.lineHeights.text.lg};`}

	${({ $error, $success, theme }) => {
		return statusBorderStyles(
			$error ? true : false,
			$success ? true : false,
			theme,
		);
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

function Textarea({ theme = defaultTheme, ...props }: TextareaProps) {
	return (
		<StyledInputWrapper $fullWidth={props.$fullWidth} theme={theme}>
			{props.$label && (
				<StyledLabel htmlFor={props.id} theme={theme}>
					{props.$label}
				</StyledLabel>
			)}
			<StyledTextarea {...props} theme={theme}>
				{props.children}
			</StyledTextarea>
		</StyledInputWrapper>
	);
}

export { Textarea };
