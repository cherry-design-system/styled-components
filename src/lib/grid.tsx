"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { mq, generateColsStyles, generateGapStyles } from "./utils";

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
}

const StyledGrid = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $cols }) =>
    `repeat(${$cols || 3}, minmax(0, 1fr))`};
  gap: ${({ $gap, theme }) =>
    $gap !== undefined && $gap !== "none"
      ? `${$gap}px`
      : theme.spacing.gridGap.xs};

  ${mq("lg")} {
    gap: ${({ $gap, theme }) =>
      $gap !== undefined && $gap !== "none"
        ? `${$gap}px`
        : theme.spacing.gridGap.lg};
  }

  ${({ $xsGap }) => $xsGap !== undefined && generateGapStyles("xs", $xsGap)}
  ${({ $smGap }) => $smGap !== undefined && generateGapStyles("sm", $smGap)}
	${({ $mdGap }) => $mdGap !== undefined && generateGapStyles("md", $mdGap)}
	${({ $lgGap }) => $lgGap !== undefined && generateGapStyles("lg", $lgGap)}
	${({ $xlGap }) => $xlGap !== undefined && generateGapStyles("xl", $xlGap)}
	${({ $xxlGap }) => $xxlGap !== undefined && generateGapStyles("xxl", $xxlGap)}
	${({ $xxxlGap }) =>
    $xxxlGap !== undefined && generateGapStyles("xxxl", $xxxlGap)}

	${({ $xsCols }) => $xsCols && generateColsStyles("xs", $xsCols)}
	${({ $smCols }) => $smCols && generateColsStyles("sm", $smCols)}
	${({ $mdCols }) => $mdCols && generateColsStyles("md", $mdCols)}
	${({ $lgCols }) => $lgCols && generateColsStyles("lg", $lgCols)}
	${({ $xlCols }) => $xlCols && generateColsStyles("xl", $xlCols)}
	${({ $xxlCols }) => $xxlCols && generateColsStyles("xxl", $xxlCols)}
	${({ $xxxlCols }) => $xxxlCols && generateColsStyles("xxxl", $xxxlCols)}
`;

function LocalGrid({ ...props }: GridProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <StyledGrid {...props} ref={ref}>
      {props.children}
    </StyledGrid>
  );
}

const Grid = forwardRef(LocalGrid);

export { Grid };
