"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "@/app/theme";
import { IconCheck } from "./utils/icons";
import {
	formElementHeightStyles,
	fullWidthStyles,
	resetButton,
	resetInput,
	statusBorderStyles,
} from "./utils/global";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	$label?: string;
	$size?: "default" | "big";
	$error?: boolean;
	$success?: boolean;
	$fullWidth?: boolean;
	theme?: Theme;
}

export const StyledInputWrapper = styled.span<InputProps>`
	display: inline-flex;
	flex-wrap: ${({ type }) =>
		type === "checkbox" || type === "radio" ? "nowrap" : "wrap"};
	gap: 10px;
	align-items: center;

	${({ $fullWidth }) => fullWidthStyles($fullWidth ? true : false)}
`;

export const StyledLabel = styled.label<InputProps>`
	display: inline-block;
	color: ${({ theme }) => theme.colors.gray};
	font-size: ${({ theme }) => theme.fontSizes.text.lg};
	line-height: : ${({ theme }) => theme.lineHeights.text.lg};
`;

const StyledInput = styled.input<InputProps>`
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

	${({ $size }) => formElementHeightStyles($size)}

	${({ $size, theme }) =>
		$size === "big"
			? `font-size: ${theme.fontSizes.inputBig.lg};
			line-height: ${theme.lineHeights.inputBig.lg};
	`
			: `font-size: ${theme.fontSizes.input.lg};
			line-height: ${theme.lineHeights.input.lg};`}

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

const StyledIconWrapper = styled.span<InputProps>`
	display: inline-flex;
	position: relative;
	line-height: 0;

	& em {
		display: block;
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.secondary};
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
	box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.secondaryLight};
	transition: all 0.3s ease;

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

	${({ type }) => (type === "checkbox" ? `border-radius: 6px;` : `border-radius: 50%;`)}

	${({ disabled, theme }) =>
		disabled &&
		`cursor: not-allowed;
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.gray};
		color: ${theme.colors.gray};
	`}

	${({ $error, $success, theme }) => {
		return statusBorderStyles(
			$error ? true : false,
			$success ? true : false,
			theme,
		);
	}}

	${({ $error, $success, theme }) => {
		if ($error) {
			return `
				border-color: ${theme.colors.error};
			`;
		}

		if ($success) {
			return `
				border-color: ${theme.colors.success};
			`;
		}
	}}

	${({ $size }) => {
		if ($size === "big") {
			return `
					width: 32px;
					height: 32px;

					& ~ svg {
						width: 18px;
						height: 18px;
					}

					& ~ em {
						width: 14px;
						height: 14px;
					}
				`;
		} else {
			return `
					width: 22px;
					height: 22px;

					& ~ svg {
						width: 12px;
						height: 12px;
					}

					& ~ em {
						width: 8px;
						height: 8px;
					}
				`;
		}
	}}}

	&:checked ~ svg,
	&:checked ~ em {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`;

function Input({ ...props }: InputProps) {
	if (props.type === "checkbox" || props.type === "radio") {
		return (
			<StyledInputWrapper $fullWidth={props.$fullWidth} type={props.type}>
				<StyledIconWrapper>
					<StyledRadioCheckboxInput {...props} />
					{!props.disabled && props.type === "checkbox" ? (
						<IconCheck />
					) : (
						<em />
					)}
				</StyledIconWrapper>
				{props.$label && (
					<StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>
				)}
			</StyledInputWrapper>
		);
	}

	return (
		<StyledInputWrapper $fullWidth={props.$fullWidth} type={props.type}>
			{props.$label && (
				<StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>
			)}
			<StyledInput {...props} />
		</StyledInputWrapper>
	);
}

export { Input };
