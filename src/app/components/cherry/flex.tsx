"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";
import {
	generateGapStyles,
	generateJustifyContentStyles,
} from "@/app/components/cherry/utils/mixins";

interface FlexProps extends React.AllHTMLAttributes<FlexProps> {
	children?: React.ReactNode;
	$justifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$xsJustifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$smJustifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$mdJustifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$lgJustifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$xlJustifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$xxlJustifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	$xxxlJustifyContent?:
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
	${({ $xsJustifyContent }) =>
		$xsJustifyContent &&
		generateJustifyContentStyles("xs", $xsJustifyContent)}
	${({ $smGap }) => $smGap && generateGapStyles("sm", $smGap)}
	${({ $smJustifyContent }) =>
		$smJustifyContent &&
		generateJustifyContentStyles("sm", $smJustifyContent)}
	${({ $mdGap }) => $mdGap && generateGapStyles("md", $mdGap)}
	${({ $mdJustifyContent }) =>
		$mdJustifyContent &&
		generateJustifyContentStyles("md", $mdJustifyContent)}
	${({ $lgGap }) => $lgGap && generateGapStyles("lg", $lgGap)}
	${({ $lgJustifyContent }) =>
		$lgJustifyContent &&
		generateJustifyContentStyles("lg", $lgJustifyContent)}
	${({ $xlGap }) => $xlGap && generateGapStyles("xl", $xlGap)}
	${({ $xlJustifyContent }) =>
		$xlJustifyContent &&
		generateJustifyContentStyles("xl", $xlJustifyContent)}
	${({ $xxlGap }) => $xxlGap && generateGapStyles("xxl", $xxlGap)}
	${({ $xxlJustifyContent }) =>
		$xxlJustifyContent &&
		generateJustifyContentStyles("xxl", $xxlJustifyContent)}
	${({ $xxxlGap }) => $xxxlGap && generateGapStyles("xxxl", $xxxlGap)}
	${({ $xxxlJustifyContent }) =>
		$xxxlJustifyContent &&
		generateJustifyContentStyles("xxxl", $xxxlJustifyContent)}
`;

function Flex({ ...props }: FlexProps) {
	return <StyledFlex {...props}>{props.children}</StyledFlex>;
}

export { Flex };
