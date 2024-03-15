"use client";
import React from "react";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";
import { styledText } from "@/app/components/cherry/utils/typography";

interface ContentProps {
	children: React.ReactNode;
	theme?: Theme;
}

const StyledContent = styled.div<ContentProps>`
	& p,
	& ul,
	& ol {
		margin: 20px 0;
		${({ theme }) => styledText(theme)};
	}

	& ul {
		& > li {
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
		& > li {
			position: relative;
			padding: 0;
			counter-increment: item;
			padding: 0 0 0 15px;
			text-indent: -15px;

			&::before {
				content: counter(item) ".";
				display: inline;
				margin: 0 4px 0 0;
				font-weight: 700;
				color: ${({ theme }) => theme.colors.primaryLight};
			}
		}
	}

	& a[class],
	& button,
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6,
	& img {
		margin: 20px 0;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	& h1:first-of-type {
		margin-top: 0;
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

	& img {
		max-width: 100%;
		border-radius: ${({ theme }) => theme.spacing.padding.xs};
		box-shadow: ${({ theme }) => theme.shadows.lg};
		transition: all 0.3s ease;
	}

	& a {
		@media (hover: hover) {
			&:hover {
				& img {
					box-shadow: ${({ theme }) => theme.shadows.md};
				}
			}
		}
	}
`;

function Content({ children }: ContentProps) {
	return <StyledContent>{children}</StyledContent>;
}

export { Content };
