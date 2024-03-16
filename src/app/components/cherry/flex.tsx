"use client";
import React from "react";
import styled from "styled-components";
import {
	Theme,
	mq,
	generateGapStyles,
	generateJustifyContentStyles,
} from "./utils";

type JustifyContentType =
	| "center"
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around"
	| "space-evenly";

type GapType = number | "none";

interface FlexProps extends React.AllHTMLAttributes<FlexProps> {
	children?: React.ReactNode;
	$justifyContent?: JustifyContentType;
	$xsJustifyContent?: JustifyContentType;
	$smJustifyContent?: JustifyContentType;
	$mdJustifyContent?: JustifyContentType;
	$lgJustifyContent?: JustifyContentType;
	$xlJustifyContent?: JustifyContentType;
	$xxlJustifyContent?: JustifyContentType;
	$xxxlJustifyContent?: JustifyContentType;
	$wrap?: "wrap" | "nowrap" | "wrap-reverse";
	$gap?: GapType;
	$xsGap?: GapType;
	$smGap?: GapType;
	$mdGap?: GapType;
	$lgGap?: GapType;
	$xlGap?: GapType;
	$xxlGap?: GapType;
	$xxxlGap?: GapType;
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
