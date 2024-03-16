"use client";
import React from "react";
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
	margin: auto;

	${({ $size }) => `
		${$size && styles($size)};
	`}
	${(props) => responsiveStyles(props)}
`;

function MaxWidth({ ...props }: MaxWidthProps) {
	return <StyledMaxWidth {...props}>{props.children}</StyledMaxWidth>;
}

export { MaxWidth };
