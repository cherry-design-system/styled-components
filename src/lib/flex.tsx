"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  mq,
  generateGapStyles,
  generateJustifyContentStyles,
  fullWidthStyles,
} from "./utils";

type JustifyContentType =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type GapType = number | "none";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
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
  $direction?: "row" | "column" | "row-reverse" | "column-reverse";
  $fullWidth?: boolean;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  flex-wrap: ${({ $wrap }) => $wrap || "wrap"};
  gap: ${({ $gap, theme }) =>
    $gap !== undefined && $gap !== "none"
      ? `${$gap}px`
      : theme.spacing.gridGap.xs};
  flex-direction: ${({ $direction }) => $direction || "row"};

  ${mq("lg")} {
    gap: ${({ $gap, theme }) =>
      $gap !== undefined && $gap !== "none"
        ? `${$gap}px`
        : theme.spacing.gridGap.lg};
  }

  ${({ $xsGap }) => $xsGap !== undefined && generateGapStyles("xs", $xsGap)}
  ${({ $xsJustifyContent }) =>
    $xsJustifyContent && generateJustifyContentStyles("xs", $xsJustifyContent)}
	${({ $smGap }) => $smGap !== undefined && generateGapStyles("sm", $smGap)}
	${({ $smJustifyContent }) =>
    $smJustifyContent && generateJustifyContentStyles("sm", $smJustifyContent)}
	${({ $mdGap }) => $mdGap !== undefined && generateGapStyles("md", $mdGap)}
	${({ $mdJustifyContent }) =>
    $mdJustifyContent && generateJustifyContentStyles("md", $mdJustifyContent)}
	${({ $lgGap }) => $lgGap !== undefined && generateGapStyles("lg", $lgGap)}
	${({ $lgJustifyContent }) =>
    $lgJustifyContent && generateJustifyContentStyles("lg", $lgJustifyContent)}
	${({ $xlGap }) => $xlGap !== undefined && generateGapStyles("xl", $xlGap)}
	${({ $xlJustifyContent }) =>
    $xlJustifyContent && generateJustifyContentStyles("xl", $xlJustifyContent)}
	${({ $xxlGap }) => $xxlGap !== undefined && generateGapStyles("xxl", $xxlGap)}
	${({ $xxlJustifyContent }) =>
    $xxlJustifyContent &&
    generateJustifyContentStyles("xxl", $xxlJustifyContent)}
	${({ $xxxlGap }) =>
    $xxxlGap !== undefined && generateGapStyles("xxxl", $xxxlGap)}
	${({ $xxxlJustifyContent }) =>
    $xxxlJustifyContent &&
    generateJustifyContentStyles("xxxl", $xxxlJustifyContent)}
  ${({ $fullWidth }) => fullWidthStyles($fullWidth)}
`;

function LocalFlex({ ...props }: FlexProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <StyledFlex {...props} ref={ref}>
      {props.children}
    </StyledFlex>
  );
}

const Flex = forwardRef(LocalFlex);

export { Flex };
