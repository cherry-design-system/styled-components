"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "@/app/theme";
import { StyledInputWrapper, StyledLabel } from "./input";
import {
	fullWidthSnippet,
	resetButton,
	resetInput,
	statusBorderSnippet,
} from "./utils/global";

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
	border-radius: 6px;
	font-weight: 400;
	white-space: nowrap;
	hyphens: auto;
	color: ${({ theme }) => theme.colors.dark};
	background: ${({ theme }) => theme.colors.light};
	border: solid 2px ${({ theme }) => theme.colors.grayLight};
	box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.secondaryLight};
	transition: all 0.3s ease;

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray};
	}

	@media (hover: hover) {
		&:hover:not([disabled]) {
			border-color: ${({ theme }) => theme.colors.secondary};
		}
	}

	&:focus:not([disabled]) {
		box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.secondaryLight};
		border-color: ${({ theme }) => theme.colors.secondary};
	}

	&:active:not([disabled]) {
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondaryLight};
	}

	${({ $size, theme }) =>
		$size === "big"
			? `font-size: ${theme.fontSizes.inputBig.lg};
		line-height: ${theme.lineHeights.inputBig.lg};
	`
			: `font-size: ${theme.fontSizes.input.lg};
		line-height: ${theme.lineHeights.input.lg};`}

	${({ $error, $success, theme }) => {
		return statusBorderSnippet(
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

	${({ $fullWidth }) => fullWidthSnippet($fullWidth ? true : false)}
`;

function Textarea({ ...props }: TextareaProps) {
	return (
		<StyledInputWrapper $fullWidth={props.$fullWidth}>
			{props.$label && (
				<StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>
			)}
			<StyledTextarea {...props}>{props.children}</StyledTextarea>
		</StyledInputWrapper>
	);
}

export { Textarea };
