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
	${({ $horizontal, $size, $xs, $sm, $md, $lg, $xl, $xxl, $xxxl }) => `
		${$size && styles($size, $horizontal || false)};
		${$size === "none" && `display: none;`};
		${
			$xs &&
			`
			${mq("xs")} {
				${$size && styles($xs, $horizontal || false)};
			}
		`
		};
		${
			$xs === "none" &&
			`
			${mq("xs")} {
				display: none;
			}
		`
		};
		${
			$sm &&
			`
			${mq("sm")} {
				${$size && styles($sm, $horizontal || false)};
			}
		`
		};
		${
			$sm === "none" &&
			`
			${mq("sm")} {
				display: none;
			}
		`
		};
		${
			$md &&
			`
			${mq("md")} {
				${$size && styles($md, $horizontal || false)};
			}
		`
		};
		${
			$md === "none" &&
			`
			${mq("md")} {
				display: none;
			}
		`
		};
		${
			$lg &&
			`
			${mq("lg")} {
				${$size && styles($lg, $horizontal || false)};
			}
		`
		};
		${
			$lg === "none" &&
			`
			${mq("lg")} {
				display: none;
			}
		`
		};
		${
			$xl &&
			`
			${mq("xl")} {
				${$size && styles($xl, $horizontal || false)};
			}
		`
		};
		${
			$xl === "none" &&
			`
			${mq("xl")} {
				display: none;
			}
		`
		};
		${
			$xxl &&
			`
			${mq("xxl")} {
				${$size && styles($xxl, $horizontal || false)};
			}
		`
		};
		${
			$xxl === "none" &&
			`
			${mq("xxl")} {
				display: none;
			}
		`
		};
		${
			$xxxl &&
			`
			${mq("xxxl")} {
				${$size && styles($xxxl, $horizontal || false)};
			}
		`
		};
		${
			$xxxl === "none" &&
			`
			${mq("xxxl")} {
				display: none;
			}
		`
		};
	`}
`;

function Space({ ...props }: SpaceProps) {
	return <StyledSpace {...props} />;
}

export { Space };
