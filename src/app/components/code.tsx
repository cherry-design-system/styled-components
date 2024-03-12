"use client";
import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Theme, mq } from "@/app/theme";

interface CodeProps {
	children?: React.ReactNode;
	theme?: Theme;
}

const TopBar = styled.div<CodeProps>`
	background: #0d1117;
	border-top-left-radius: ${({ theme }) => theme.spacing.radius.lg};
	border-top-right-radius: ${({ theme }) => theme.spacing.radius.lg};
	border-bottom: solid 1px ${({ theme }) => rgba(theme.colors.light, 0.2)};
	height: 33px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	gap: 5px;
	padding: 10px;
`;

const Dot = styled.span<{ theme: Theme }>`
	margin: auto 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: ${({ theme }) => rgba(theme.colors.light, 0.2)};
`;

const Body = styled.div<{ theme: Theme }>`
	background: #0d1117;
	border-bottom-left-radius: ${({ theme }) => theme.spacing.radius.lg};
	border-bottom-right-radius: ${({ theme }) => theme.spacing.radius.lg};
	color: ${({ theme }) => theme.colors.light};
	padding: 20px;
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: ${({ theme }) => theme.fontSizes.code.xs};
	line-height: ${({ theme }) => theme.lineHeights.code.xs};
	text-align: left;
	overflow-x: auto;

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.code.lg};
		line-height: ${({ theme }) => theme.lineHeights.code.lg};
	}

	& .hljs {
		color: #c9d1d9;
		background: #0d1117;
	}

	& .hljs-doctag,
	& .hljs-keyword,
	& .hljs-meta .hljs-keyword,
	& .hljs-template-tag,
	& .hljs-template-variable,
	& .hljs-type,
	& .hljs-variable.language_ {
		color: #ff7b72;
	}

	& .hljs-title,
	& .hljs-title.class_,
	& .hljs-title.class_.inherited__,
	& .hljs-title.function_ {
		color: #d2a8ff;
	}

	& .hljs-attr,
	& .hljs-attribute,
	& .hljs-literal,
	& .hljs-meta,
	& .hljs-number,
	& .hljs-operator,
	& .hljs-selector-attr,
	& .hljs-selector-class,
	& .hljs-selector-id,
	& .hljs-variable {
		color: #79c0ff;
	}

	& .hljs-meta .hljs-string,
	& .hljs-regexp,
	& .hljs-string {
		color: #a5d6ff;
	}

	& .hljs-built_in,
	& .hljs-symbol {
		color: #ffa657;
	}

	& .hljs-code,
	& .hljs-comment,
	& .hljs-formula {
		color: #8b949e;
	}

	& .hljs-name,
	& .hljs-quote,
	& .hljs-selector-pseudo,
	& .hljs-selector-tag {
		color: #7ee787;
	}

	& .hljs-subst {
		color: #c9d1d9;
	}

	& .hljs-section {
		color: #1f6feb;
		font-weight: 700;
	}

	& .hljs-bullet {
		color: #f2cc60;
	}

	& .hljs-emphasis {
		color: #c9d1d9;
		font-style: italic;
	}

	& .hljs-strong {
		color: #c9d1d9;
		font-weight: 700;
	}

	& .hljs-addition {
		color: #aff5b4;
		background-color: #033a16;
	}

	& .hljs-deletion {
		color: #ffdcd7;
		background-color: #67060c;
	}
`;

function Code({ children, ...props }: CodeProps) {
	return (
		<div>
			<TopBar {...props}>
				<Dot />
				<Dot />
				<Dot />
			</TopBar>
			<Body>{children}</Body>
		</div>
	);
}

export { Code };
