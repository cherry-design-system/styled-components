"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";
import { generateGapStyles } from "@/app/components/cherry/utils/mixins";

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
	$gap?: number | "none";
	$xsGap?: number | "none";
	$smGap?: number | "none";
	$mdGap?: number | "none";
	$lgGap?: number | "none";
	$xlGap?: number | "none";
	$xxlGap?: number | "none";
	$xxxlGap?: number | "none";
	theme?: Theme;
}

const StyledFlex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${({ $justifyContent }) =>
		$justifyContent || "flex-start"};
	flex-wrap: ${({ $wrap }) => $wrap || "wrap"};
	gap: ${({ $gap, theme }) =>
		($gap && `${$gap}px`) || theme.spacing.gridGap.xs};

	${mq("lg")} {
		gap: ${({ $gap, theme }) =>
			($gap && `${$gap}px`) || theme.spacing.gridGap.lg};
	}

	${({ $xsGap }) => $xsGap && generateGapStyles("xs", $xsGap)}
	${({ $smGap }) => $smGap && generateGapStyles("sm", $smGap)}
	${({ $mdGap }) => $mdGap && generateGapStyles("md", $mdGap)}
	${({ $lgGap }) => $lgGap && generateGapStyles("lg", $lgGap)}
	${({ $xlGap }) => $xlGap && generateGapStyles("xl", $xlGap)}
	${({ $xxlGap }) => $xxlGap && generateGapStyles("xxl", $xxlGap)}
	${({ $xxxlGap }) => $xxxlGap && generateGapStyles("xxxl", $xxxlGap)}
`;

function Flex({ ...props }: FlexProps) {
	return <StyledFlex {...props}>{props.children}</StyledFlex>;
}

export { Flex };
