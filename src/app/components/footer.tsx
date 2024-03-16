"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { rgba } from "polished";
import Link from "next/link";
import {
	Theme,
	mq,
	IconDribbble,
	IconThreads,
	styledSmall,
	styledText,
	Col,
	Container,
	Flex,
	Grid,
	Space,
} from "@/app/components/cherry";
import { IconLink } from "@/app/components/icon-link";

const StyledFooter = styled.footer<{ theme: Theme }>`
	background: ${({ theme }) => rgba(theme.colors.primaryLight, 0.2)};
	margin-top: 60px;
`;

const StyledParagraph = styled.p<{
	theme: Theme;
	$align: "left" | "right" | "center";
}>`
	margin: auto 0;
	color: ${({ theme }) => theme.colors.grayDark};
	text-align: center;
	${({ theme }) => styledText(theme)};

	${mq("lg")} {
		text-align: ${({ $align }) => $align};
	}

	& a {
		color: ${({ theme }) => theme.colors.primary};
		transition: all 0.3s ease;
		text-decoration: none;
		font-weight: 700;

		@media (hover: hover) {
			&:hover {
				color: ${({ theme }) => theme.colors.primaryDark};
			}
		}
	}
`;

const StyledLinkWrapper = styled.span<{ theme: Theme }>`
	margin: auto;

	${mq("lg")} {
		margin: 0;
	}
`;

const StyledLink = styled(Link)<{ theme: Theme }>`
	transition: all 0.3s ease;
	display: inline-block;
	margin: auto;

	${mq("lg")} {
		margin: auto 0;
	}

	& img,
	& svg path {
		transition: all 0.3s ease;
	}

	&:active {
		& svg,
		& img {
			transform: scale(0.95);
		}
	}
`;

const StyledHr = styled.hr<{ theme: Theme }>`
	margin: 0;
	border: none;
	height: 1px;
	width: 100%;
	background: ${({ theme }) => rgba(theme.colors.primaryLight, 0.5)};
`;

function Footer() {
	const year = new Date().getFullYear();
	return (
		<StyledFooter>
			<Container $lgPadding={20}>
				<Space $size={40} />
				<Grid $xsCols={1} $lgCols={2}>
					<StyledParagraph $align="left">
						Designed and developed by{" "}
						<a
							href="https://www.riangle.com/?ref=cherry.design"
							target="_blank"
						>
							Riangle
						</a>
						.<br />
						Created by{" "}
						<a
							href="https://www.threads.net/@luangjokaj?ref=cherry.design"
							target="_blank"
						>
							Luan Gjokaj
						</a>
						.
					</StyledParagraph>
					<Flex
						$xsJustifyContent="center"
						$lgJustifyContent="flex-end"
					>
						<Space $xs={20} $lg="none" />
						<IconLink
							href="https://www.threads.net/@luangjokaj?ref=cherry.design"
							$bgColor="#000000"
							$label="Threads"
						>
							<IconThreads />
						</IconLink>
						<IconLink
							href="https://dribbble.com/luangjokaj?ref=cherry.design"
							$bgColor="#EA4C89"
							$label="Dribbble"
						>
							<IconDribbble />
						</IconLink>
					</Flex>
				</Grid>
				<Space $size={40} />
				<StyledHr />
				<Space $size={40} />
				<Grid $xsCols={1} $lgCols={2}>
					<StyledLinkWrapper>
						<StyledLink href="/">
							<Image
								src="/logo.svg"
								alt="Cherry Logo"
								width={150}
								height={38}
							/>
						</StyledLink>
					</StyledLinkWrapper>
					<StyledParagraph $align="right">
						Copyright © {year} Cherry. All rights reserved.
					</StyledParagraph>
				</Grid>
				<Space $size={40} />
			</Container>
		</StyledFooter>
	);
}

function DocsFooter() {
	const year = new Date().getFullYear();
	const StyledFooter = styled.footer<{ theme: Theme }>`
		border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
		margin-top: 20px;
		padding: 20px 0 0;
		${({ theme }) => styledSmall(theme)};

		${mq("lg")} {
			margin-top: 40px;
			padding: 40px 0 0;
		}
	`;
	const StyledParagraph = styled.p<{ theme: Theme }>`
		color: ${({ theme }) => theme.colors.gray};
	`;
	const StyledLink = styled.a<{ theme: Theme }>`
		font-weight: 500;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.primary};
		transition: all 0.3s ease;

		@media (hover: hover) {
			&:hover {
				color: ${({ theme }) => theme.colors.primaryDark};
			}
		}

		${mq("lg")} {
			text-align: right;
		}
	`;

	return (
		<StyledFooter>
			<Grid $xsCols={1} $lgCols={3}>
				<Col $lgSpan={2}>
					<StyledParagraph>
						Copyright © {year} Cherry. All rights reserved.
					</StyledParagraph>
				</Col>
				<StyledLink
					href="https://github.com/cherry-design-system/styled-components?ref=cherry.design"
					target="_blank"
				>
					Edit this page on GitHub
				</StyledLink>
			</Grid>
		</StyledFooter>
	);
}

export { Footer, DocsFooter };
