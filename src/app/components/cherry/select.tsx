"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "@/app/theme";
import { StyledInputWrapper, StyledLabel } from "@/app/components/cherry/input";
import {
	formElementHeightStyles,
	fullWidthStyles,
	resetButton,
	resetInput,
	statusBorderStyles,
} from "@/app/components/cherry/utils/mixins";
import { IconArrow } from "@/app/components/cherry/utils/icons";

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
	children?: React.ReactNode;
	$label?: string;
	$size?: "default" | "big";
	$error?: boolean;
	$success?: boolean;
	$fullWidth?: boolean;
	theme?: Theme;
}

const StyledSelect = styled.select<SelectProps>`
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

export const StyledIconWrapper = styled.span<SelectProps>`
	position: relative;
	${({ $fullWidth }) => fullWidthStyles($fullWidth ? true : false)}

	& svg {
		position: absolute;
		top: 50%;
		right: 15px;
		transform: translateY(-50%) rotate(0);
		transition: all 0.3s ease;
		pointer-events: none;
	}

	& select:active:not([disabled]) ~ svg,
	& select:focus:not([disabled]) ~ svg {
		transform: translateY(-50%) rotate(180deg);
	}
`;

function Select({ ...props }: SelectProps) {
	return (
		<StyledInputWrapper $fullWidth={props.$fullWidth}>
			{props.$label && (
				<StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>
			)}
			<StyledIconWrapper $fullWidth={props.$fullWidth}>
				<StyledSelect {...props}>{props.children}</StyledSelect>
				<IconArrow />
			</StyledIconWrapper>
		</StyledInputWrapper>
	);
}

export { Select };
