import { css } from "styled-components";
import { Breakpoints, Theme, mq } from "@/app/theme";

export const resetButton = css`
	appearance: none;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	outline: none;
`;

export const resetInput = css`
	cursor: text;
	min-width: 100px;
`;

export const fullWidthStyles = (fullWidth: boolean) => {
	if (fullWidth) {
		return css`
			width: 100%;
		`;
	}
};

export const statusBorderStyles = (
	$error: boolean,
	$success: boolean,
	theme: Theme,
) => {
	if ($error) {
		return css`
			border-color: ${theme?.colors.error};
		`;
	}

	if ($success) {
		return css`
			border-color: ${theme?.colors.success};
		`;
	}
};

export const formElementHeightStyles = ($size?: "default" | "big") => {
	if ($size === "big") {
		return css`
			height: 60px;
		`;
	}

	return css`
		height: 50px;
	`;
};

export const generateGapStyles = (
	size: keyof Breakpoints<number>,
	gap: number | "none",
) => css`
	${mq(size)} {
		gap: ${gap === "none" ? "0" : `${gap}px`};
	}
`;

export const generateColsStyles = (
	size: keyof Breakpoints<number>,
	cols: number,
) => css`
	${mq(size)} {
		grid-template-columns: repeat(${cols || 3}, minmax(0, 1fr));
	}
`;

export const generateColSpanStyles = (
	size: keyof Breakpoints<number>,
	span: number,
) => css`
	${mq(size)} {
		grid-column: span ${span};
	}
`;

export const generatePaddingStyles = (
	size: keyof Breakpoints<number>,
	padding: number | "none",
) => css`
	${mq(size)} {
		padding: ${padding === "none" ? "0" : `${padding}px`};
	}
`;

export const generateJustifyContentStyles = (
	size: keyof Breakpoints<number>,
	justifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly",
) => css`
	${mq(size)} {
		justify-content: ${justifyContent && `${justifyContent}`};
	}
`;
