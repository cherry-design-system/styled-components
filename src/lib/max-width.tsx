"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { mq } from "./utils";

interface MaxWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  $size?: number;
  $xs?: number;
  $sm?: number;
  $md?: number;
  $lg?: number;
  $xl?: number;
  $xxl?: number;
  $xxxl?: number;
  $m0?: boolean;
}

const styles = ($size: number) => `max-width: ${$size}px;`;

const breakpointKeys = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"] as const;

function responsiveStyles(props: MaxWidthProps) {
  const propMap: Record<string, number | undefined> = {
    xs: props.$xs,
    sm: props.$sm,
    md: props.$md,
    lg: props.$lg,
    xl: props.$xl,
    xxl: props.$xxl,
    xxxl: props.$xxxl,
  };

  return breakpointKeys
    .filter((key) => propMap[key] !== undefined)
    .map((key) => mq(key) + `{ ${styles(propMap[key]!)} }`)
    .join("");
}

const StyledMaxWidth = styled.div<MaxWidthProps>`
  display: block;
  margin: ${({ $m0 }) => ($m0 ? "0" : "auto")};

  ${({ $size }) => `
		${$size && styles($size)};
	`}
  ${(props) => responsiveStyles(props)}
`;

function LocalMaxWidth(
  { ...props }: MaxWidthProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <StyledMaxWidth {...props} ref={ref}>
      {props.children}
    </StyledMaxWidth>
  );
}

const MaxWidth = forwardRef(LocalMaxWidth);

export { MaxWidth };
