"use client";
import React from "react";
import styled from "styled-components";
import { theme as defaultTheme, Theme, generateColSpanStyles } from "./utils";

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	$span?: number;
	$xsSpan?: number;
	$smSpan?: number;
	$mdSpan?: number;
	$lgSpan?: number;
	$xlSpan?: number;
	$xxlSpan?: number;
	$xxxlSpan?: number;
	theme?: Theme;
}

const StyledCol = styled.div<ColProps>`
	${({ $span }) =>
		$span &&
		`
		grid-column: span ${$span};
	`}

	${({ $xsSpan }) => $xsSpan && generateColSpanStyles("xs", $xsSpan)}
	${({ $smSpan }) => $smSpan && generateColSpanStyles("sm", $smSpan)}
	${({ $mdSpan }) => $mdSpan && generateColSpanStyles("md", $mdSpan)}
	${({ $lgSpan }) => $lgSpan && generateColSpanStyles("lg", $lgSpan)}
	${({ $xlSpan }) => $xlSpan && generateColSpanStyles("xl", $xlSpan)}
	${({ $xxlSpan }) => $xxlSpan && generateColSpanStyles("xxl", $xxlSpan)}
	${({ $xxxlSpan }) => $xxxlSpan && generateColSpanStyles("xxxl", $xxxlSpan)}
`;

function Col({ theme = defaultTheme, ...props }: ColProps) {
	return (
		<StyledCol {...props} theme={theme}>
			{props.children}
		</StyledCol>
	);
}

export { Col };
