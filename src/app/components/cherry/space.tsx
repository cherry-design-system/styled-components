"use client";
import React from "react";
import styled from "styled-components";
import { mq } from "@/app/theme";

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
	$horizontal
		? `
				display: inline-block;
				max-height: 0;
				min-width: ${$size}px;
				max-width: ${$size}px;`
		: `
				display: block;
				min-height: ${$size}px;
				max-height: ${$size}px;
		  `;

const StyledSpace = styled.span<SpaceProps>`
	${({ $xs, $horizontal }) =>
		$xs &&
		`
			${mq("xs")} {
				${styles($xs, $horizontal || false)};
				${$xs === "none" && `display: none;`};
			}
		`};
	${({ $sm, $horizontal }) =>
		$sm &&
		`
			${mq("sm")} {
				${styles($sm, $horizontal || false)};
				${$sm === "none" && `display: none;`};
			}
		`};
	${({ $md, $horizontal }) =>
		$md &&
		`
			${mq("md")} {
				${styles($md, $horizontal || false)};
				${$md === "none" && `display: none;`};
			}
		`};
	${({ $lg, $horizontal }) =>
		$lg &&
		`
			${mq("lg")} {
				${styles($lg, $horizontal || false)};
				${$lg === "none" && `display: none;`};
			}
		`};
	${({ $xl, $horizontal }) =>
		$xl &&
		`
			${mq("xl")} {
				${styles($xl, $horizontal || false)};
				${$xl === "none" && `display: none;`};
			}
		`};
	${({ $xxl, $horizontal }) =>
		$xxl &&
		`
			${mq("xxl")} {
				${styles($xxl, $horizontal || false)};
				${$xxl === "none" && `display: none;`};
			}
		`};
	${({ $xxxl, $horizontal }) =>
		$xxxl &&
		`
			${mq("xxxl")} {
				${styles($xxxl, $horizontal || false)};
				${$xxxl === "none" && `display: none;`};
			}
		`};

	${({ $horizontal, $size }) => `
		${$size && styles($size, $horizontal || false)};
		${$size === "none" && `display: none;`};
	`}
`;

function Space({ ...props }: SpaceProps) {
	return <StyledSpace {...props} />;
}

export { Space };
