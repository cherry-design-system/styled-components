"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq, generateColsStyles, generateGapStyles } from "./utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	$gap?: number | "none";
	$xsGap?: number | "none";
	$smGap?: number | "none";
	$mdGap?: number | "none";
	$lgGap?: number | "none";
	$xlGap?: number | "none";
	$xxlGap?: number | "none";
	$xxxlGap?: number | "none";
	$cols?: number;
	$xsCols?: number;
	$smCols?: number;
	$mdCols?: number;
	$lgCols?: number;
	$xlCols?: number;
	$xxlCols?: number;
	$xxxlCols?: number;
	theme?: Theme;
}

const StyledGrid = styled.div<GridProps>`
	display: grid;
	grid-template-columns: ${({ $cols }) =>
		`repeat(${$cols || 3}, minmax(0, 1fr))`};
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

	${({ $xsCols }) => $xsCols && generateColsStyles("xs", $xsCols)}
	${({ $smCols }) => $smCols && generateColsStyles("sm", $smCols)}
	${({ $mdCols }) => $mdCols && generateColsStyles("md", $mdCols)}
	${({ $lgCols }) => $lgCols && generateColsStyles("lg", $lgCols)}
	${({ $xlCols }) => $xlCols && generateColsStyles("xl", $xlCols)}
	${({ $xxlCols }) => $xxlCols && generateColsStyles("xxl", $xxlCols)}
	${({ $xxxlCols }) => $xxxlCols && generateColsStyles("xxxl", $xxxlCols)}
`;

function Grid({ ...props }: GridProps) {
	return <StyledGrid {...props}>{props.children}</StyledGrid>;
}

export { Grid };
