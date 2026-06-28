"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  mq,
  generateGapStyles,
  generateJustifyContentStyles,
  generateAlignItemsStyles,
  generateAlignContentStyles,
  generateDirectionStyles,
  fullWidthStyles,
} from "./utils";

type JustifyContentType =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignItemsType =
  "stretch" | "center" | "flex-start" | "flex-end" | "baseline";

type AlignContentType =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type DirectionType = "row" | "column" | "row-reverse" | "column-reverse";

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
  $alignItems?: AlignItemsType;
  $xsAlignItems?: AlignItemsType;
  $smAlignItems?: AlignItemsType;
  $mdAlignItems?: AlignItemsType;
  $lgAlignItems?: AlignItemsType;
  $xlAlignItems?: AlignItemsType;
  $xxlAlignItems?: AlignItemsType;
  $xxxlAlignItems?: AlignItemsType;
  $alignContent?: AlignContentType;
  $xsAlignContent?: AlignContentType;
  $smAlignContent?: AlignContentType;
  $mdAlignContent?: AlignContentType;
  $lgAlignContent?: AlignContentType;
  $xlAlignContent?: AlignContentType;
  $xxlAlignContent?: AlignContentType;
  $xxxlAlignContent?: AlignContentType;
  $wrap?: "wrap" | "nowrap" | "wrap-reverse";
  $gap?: GapType;
  $xsGap?: GapType;
  $smGap?: GapType;
  $mdGap?: GapType;
  $lgGap?: GapType;
  $xlGap?: GapType;
  $xxlGap?: GapType;
  $xxxlGap?: GapType;
  $direction?: DirectionType;
  $xsDirection?: DirectionType;
  $smDirection?: DirectionType;
  $mdDirection?: DirectionType;
  $lgDirection?: DirectionType;
  $xlDirection?: DirectionType;
  $xxlDirection?: DirectionType;
  $xxxlDirection?: DirectionType;
  $fullWidth?: boolean;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "stretch"};
  align-content: ${({ $alignContent }) => $alignContent || "stretch"};
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
  ${({ $xsAlignItems }) =>
    $xsAlignItems && generateAlignItemsStyles("xs", $xsAlignItems)}
  ${({ $xsAlignContent }) =>
    $xsAlignContent && generateAlignContentStyles("xs", $xsAlignContent)}
  ${({ $xsDirection }) =>
    $xsDirection && generateDirectionStyles("xs", $xsDirection)}
	${({ $smGap }) => $smGap !== undefined && generateGapStyles("sm", $smGap)}
	${({ $smJustifyContent }) =>
    $smJustifyContent && generateJustifyContentStyles("sm", $smJustifyContent)}
  ${({ $smAlignItems }) =>
    $smAlignItems && generateAlignItemsStyles("sm", $smAlignItems)}
  ${({ $smAlignContent }) =>
    $smAlignContent && generateAlignContentStyles("sm", $smAlignContent)}
  ${({ $smDirection }) =>
    $smDirection && generateDirectionStyles("sm", $smDirection)}
	${({ $mdGap }) => $mdGap !== undefined && generateGapStyles("md", $mdGap)}
	${({ $mdJustifyContent }) =>
    $mdJustifyContent && generateJustifyContentStyles("md", $mdJustifyContent)}
  ${({ $mdAlignItems }) =>
    $mdAlignItems && generateAlignItemsStyles("md", $mdAlignItems)}
  ${({ $mdAlignContent }) =>
    $mdAlignContent && generateAlignContentStyles("md", $mdAlignContent)}
  ${({ $mdDirection }) =>
    $mdDirection && generateDirectionStyles("md", $mdDirection)}
	${({ $lgGap }) => $lgGap !== undefined && generateGapStyles("lg", $lgGap)}
	${({ $lgJustifyContent }) =>
    $lgJustifyContent && generateJustifyContentStyles("lg", $lgJustifyContent)}
  ${({ $lgAlignItems }) =>
    $lgAlignItems && generateAlignItemsStyles("lg", $lgAlignItems)}
  ${({ $lgAlignContent }) =>
    $lgAlignContent && generateAlignContentStyles("lg", $lgAlignContent)}
  ${({ $lgDirection }) =>
    $lgDirection && generateDirectionStyles("lg", $lgDirection)}
	${({ $xlGap }) => $xlGap !== undefined && generateGapStyles("xl", $xlGap)}
	${({ $xlJustifyContent }) =>
    $xlJustifyContent && generateJustifyContentStyles("xl", $xlJustifyContent)}
  ${({ $xlAlignItems }) =>
    $xlAlignItems && generateAlignItemsStyles("xl", $xlAlignItems)}
  ${({ $xlAlignContent }) =>
    $xlAlignContent && generateAlignContentStyles("xl", $xlAlignContent)}
  ${({ $xlDirection }) =>
    $xlDirection && generateDirectionStyles("xl", $xlDirection)}
	${({ $xxlGap }) => $xxlGap !== undefined && generateGapStyles("xxl", $xxlGap)}
	${({ $xxlJustifyContent }) =>
    $xxlJustifyContent &&
    generateJustifyContentStyles("xxl", $xxlJustifyContent)}
  ${({ $xxlAlignItems }) =>
    $xxlAlignItems && generateAlignItemsStyles("xxl", $xxlAlignItems)}
  ${({ $xxlAlignContent }) =>
    $xxlAlignContent && generateAlignContentStyles("xxl", $xxlAlignContent)}
  ${({ $xxlDirection }) =>
    $xxlDirection && generateDirectionStyles("xxl", $xxlDirection)}
	${({ $xxxlGap }) =>
    $xxxlGap !== undefined && generateGapStyles("xxxl", $xxxlGap)}
	${({ $xxxlJustifyContent }) =>
    $xxxlJustifyContent &&
    generateJustifyContentStyles("xxxl", $xxxlJustifyContent)}
  ${({ $xxxlAlignItems }) =>
    $xxxlAlignItems && generateAlignItemsStyles("xxxl", $xxxlAlignItems)}
  ${({ $xxxlAlignContent }) =>
    $xxxlAlignContent && generateAlignContentStyles("xxxl", $xxxlAlignContent)}
  ${({ $xxxlDirection }) =>
    $xxxlDirection && generateDirectionStyles("xxxl", $xxxlDirection)}
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
