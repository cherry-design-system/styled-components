"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: React.ReactNode;
	$fluid?: boolean;
	$textAlign?: "right" | "left" | "center";
	$xsPadding?: string;
	$smPadding?: string;
	$mdPadding?: string;
	$lgPadding?: string;
	$xlPadding?: string;
	$xxlPadding?: string;
	$xxxlPadding?: string;
	theme?: Theme;
}

const StyledContainer = styled.div<ContainerProps>`
	margin: auto;
	width: 100%;
	max-width: ${({ theme, $fluid }) =>
		$fluid ? `100%` : theme.spacing.maxWidth.xs};
	${({ $textAlign }) => $textAlign && `text-align: ${$textAlign}`};

	${mq("xs")} {
		padding: ${({ $xsPadding, theme }) =>
			$xsPadding ? $xsPadding : theme.spacing.padding.xs};
	}

	${mq("sm")} {
		${({ $smPadding }) => $smPadding && `padding: ${$smPadding}`};
	}

	${mq("md")} {
		${({ $mdPadding }) => $mdPadding && `padding: ${$mdPadding}`};
	}

	${mq("lg")} {
		padding: ${({ $lgPadding, theme }) =>
			$lgPadding ? $lgPadding : theme.spacing.padding.lg};
	}

	${mq("xl")} {
		${({ $xlPadding }) => $xlPadding && `padding: ${$xlPadding}`};
	}

	${mq("xxl")} {
		${({ $xxlPadding }) => $xxlPadding && `padding: ${$xxlPadding}`};
	}

	${mq("xxxl")} {
		${({ $xxxlPadding }) => $xxxlPadding && `padding: ${$xxxlPadding}`};
		max-width: ${({ theme, $fluid }) =>
			$fluid ? `100%` : theme.spacing.maxWidth.xxxl};
	}
`;

function Container({ ...props }: ContainerProps) {
	return <StyledContainer {...props}>{props.children}</StyledContainer>;
}

export { Container };
