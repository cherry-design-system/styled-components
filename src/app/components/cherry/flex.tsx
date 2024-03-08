"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";

interface FlexProps extends React.AllHTMLAttributes<FlexProps> {
	children?: React.ReactNode;
	$justifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$wrap?: "wrap" | "nowrap" | "wrap-reverse";
	$gap?: string;
	theme?: Theme;
}

const StyledFlex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${({ $justifyContent }) =>
		$justifyContent || "flex-start"};
	flex-wrap: ${({ $wrap }) => $wrap || "wrap"};
	gap: ${({ $gap, theme }) => $gap || theme.spacing.gridGap.xs};

	${mq("lg")} {
		gap: ${({ $gap, theme }) => $gap || theme.spacing.gridGap.lg};
	}
`;

function Flex({ ...props }: FlexProps) {
	return <StyledFlex {...props}>{props.children}</StyledFlex>;
}

export { Flex };
