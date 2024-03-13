"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { rgba } from "polished";
import Link from "next/link";
import { Theme, mq } from "@/app/theme";
import { Col, Container, Flex, Grid, Space } from "@/app/components/cherry";
import { IconLink } from "@/app/components/icon-link";
import { IconDribbble, IconThreads } from "@/app/components/cherry/utils/icons";

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
	font-size: ${({ theme }) => theme.fontSizes.text.xs};
	line-height: ${({ theme }) => theme.lineHeights.text.xs};
	text-align: center;

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.text.lg};
		line-height: ${({ theme }) => theme.lineHeights.text.lg};
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

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<StyledFooter>
			<Container $lgPadding={20}>
				<Space $size={40} />
				<Grid $xsCols={1} $lgCols={2}>
					<StyledParagraph $align="left">
						Designed and developed by{" "}
						<a href="#" target="_blank">
							Riangle
						</a>
						.<br />
						Created by{" "}
						<a href="#" target="_blank">
							Luan Gjokaj
						</a>
						.
					</StyledParagraph>
					<Flex
						$xsJustifyContent="center"
						$lgJustifyContent="flex-end"
					>
						<Space $xs={20} $lg="none" />
						<IconLink href="#" $bgColor="#000000" $label="Threads">
							<IconThreads />
						</IconLink>
						<IconLink href="#" $bgColor="#EA4C89" $label="Dribbble">
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
						Copyright © {year} Cherry. All rights reserved
					</StyledParagraph>
				</Grid>
				<Space $size={40} />
			</Container>
		</StyledFooter>
	);
}
