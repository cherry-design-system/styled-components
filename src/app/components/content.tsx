"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";

interface ContentProps {
	children: React.ReactNode;
	theme?: Theme;
}

const StyledContent = styled.div<ContentProps>`
	& p,
	& ul,
	& ol {
		font-size: ${({ theme }) => theme.fontSizes.text.xs};
		line-height: ${({ theme }) => theme.lineHeights.text.xs};
		margin: 10px 0;

		${mq("lg")} {
			font-size: ${({ theme }) => theme.fontSizes.text.lg};
			line-height: ${({ theme }) => theme.lineHeights.text.lg};
		}
	}

	& ul {
		& li {
			position: relative;
			padding: 0 0 0 15px;

			&::before {
				content: "";
				display: block;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background: ${({ theme }) => theme.colors.primaryLight};
				position: absolute;
				top: 7px;
				left: 0;

				${mq("lg")} {
					top: 9px;
				}
			}
		}
	}

	& ol {
		& li {
			position: relative;
			padding: 0;
			counter-increment: item;
			display: flex;
			flex-wrap: nowrap;

			&::before {
				content: counter(item) ".";
				display: block;
				margin: 0 4px 0 0;
				font-weight: 700;
				color: ${({ theme }) => theme.colors.primaryLight};
			}
		}
	}

	& a[class],
	& button {
		margin: 10px 0;
	}

	& a:not([class]) {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: 500;
		text-decoration: underline;
		transition: all 0.3s ease;

		@media (hover: hover) {
			&:hover {
				color: ${({ theme }) => theme.colors.primaryDark};
			}
		}
	}
`;

function Content({ children }: ContentProps) {
	return <StyledContent>{children}</StyledContent>;
}

export { Content };
