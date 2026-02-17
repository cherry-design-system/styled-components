"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { generateColSpanStyles } from "./utils";

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

function LocalCol({ ...props }: ColProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <StyledCol {...props} ref={ref}>
      {props.children}
    </StyledCol>
  );
}

const Col = forwardRef(LocalCol);

export { Col };
