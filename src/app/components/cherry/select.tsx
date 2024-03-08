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
import { IconArrow } from "./utils/icons";

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
			? `min-width: 220px;
			font-size: ${theme.fontSizes.inputBig.lg};
			line-height: ${theme.lineHeights.inputBig.lg};
	`
			: `min-width: 200px;
			font-size: ${theme.fontSizes.input.lg};
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

export const StyledIconWrapper = styled.span<SelectProps>`
	position: relative;

	& svg {
		position: absolute;
		top: 50%;
		right: 15px;
		transform: translateY(-50%) rotate(0);
		transition: all 0.3s ease;
	}

	& select:active ~ svg,
	& select:focus ~ svg {
		transform: translateY(-50%) rotate(180deg);
	}
`;

function Select({ ...props }: SelectProps) {
	return (
		<StyledInputWrapper $fullWidth={props.$fullWidth}>
			{props.$label && (
				<StyledLabel htmlFor={props.id}>{props.$label}</StyledLabel>
			)}
			<StyledIconWrapper>
				<StyledSelect {...props}>{props.children}</StyledSelect>
				<IconArrow />
			</StyledIconWrapper>
		</StyledInputWrapper>
	);
}

export { Select };
