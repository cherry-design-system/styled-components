"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: React.ReactNode;
	$fluid?: boolean;
	$textAlign?: "right" | "left" | "center";
	$padding?: string;
	theme?: Theme;
}

const StyledContainer = styled.div<ContainerProps>`
	margin: auto;
	width: 100%;
	max-width: ${({ theme, $fluid }) =>
		$fluid ? `100%` : theme.spacing.maxWidth.xs};
	text-align: ${({ $textAlign }) => $textAlign};
	padding: ${({ $padding, theme }) =>
		$padding ? $padding : theme.spacing.padding.xs};

	${mq("lg")} {
		padding: ${({ $padding, theme }) =>
			$padding ? $padding : theme.spacing.padding.lg};
	}

	${mq("xxxl")} {
		max-width: ${({ theme, $fluid }) =>
			$fluid ? `100%` : theme.spacing.maxWidth.xxxl};
	}
`;

function Container({ ...props }: ContainerProps) {
	return <StyledContainer {...props}>{props.children}</StyledContainer>;
}

export { Container };
