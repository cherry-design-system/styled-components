"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Breakpoints, mq } from "./utils";

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

const styles = ($size: number | "none") => `max-width: ${$size}px;`;

function responsiveStyles(props: any) {
  return Object.keys(props)
    .filter((key) => key.startsWith("$"))
    .map((key) => {
      const size = key.substring(1) as keyof Breakpoints<number>;
      return props[key] && mq(size) + `{ ${styles(props[key])} }`;
    })
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
