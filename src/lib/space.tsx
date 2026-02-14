"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Breakpoints, mq } from "./utils";

interface SpaceProps {
  $size?: number | "none";
  $xs?: number | "none";
  $sm?: number | "none";
  $md?: number | "none";
  $lg?: number | "none";
  $xl?: number | "none";
  $xxl?: number | "none";
  $xxxl?: number | "none";
  $horizontal?: boolean;
}

const styles = ($size: number | "none", $horizontal: boolean) =>
  $size === "none"
    ? `display: none;`
    : $horizontal
      ? `display: inline-block;
			max-height: 0;
			min-width: ${$size}px;
			max-width: ${$size}px;`
      : `display: block;
			min-height: ${$size}px;
			max-height: ${$size}px;`;

function responsiveStyles(props: any) {
  return Object.keys(props)
    .filter((key) => key.startsWith("$"))
    .map((key) => {
      const size = key.substring(1) as keyof Breakpoints<number>;
      return (
        props[key] &&
        mq(size) + `{ ${styles(props[key], props.$horizontal || false)} }`
      );
    })
    .join("");
}

const StyledSpace = styled.span<SpaceProps>`
  ${({ $horizontal, $size }) =>
    $size ? styles($size, $horizontal || false) : ""}
  ${(props) => responsiveStyles(props)}
`;

function LocalSpace({ ...props }: SpaceProps, ref: React.Ref<HTMLSpanElement>) {
  return <StyledSpace {...props} ref={ref} />;
}

const Space = forwardRef(LocalSpace);

export { Space };
