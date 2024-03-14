"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Theme, mq } from "@/app/theme";
import { Container, Flex } from "@/app/components/cherry";
import { IconGitHub } from "@/app/components/cherry/utils/icons";
import { Search } from "./search/Search";

const StyledHeader = styled.header<{ theme: Theme }>`
	background: ${({ theme }) => theme.colors.light};
	border-radius: 100px;
	max-width: calc(100% - 40px);
	margin: 20px auto 0;
	position: sticky;
	top: 20px;
	z-index: 100;
	box-shadow: ${({ theme }) => theme.shadows.lg};

	${mq("lg")} {
		margin: 40px auto 0;
		max-width: 600px;
	}

	& a {
		display: inline-flex;
	}
`;

const StyledBg = styled.span<{ theme: Theme }>`
	width: 100vw;
	height: 100svh;
	background: url("/gradient.png") no-repeat;
	background-position: top;
	background-size: contain;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	opacity: 0.3;
`;

const StyledNav = styled.nav<{ theme: Theme }>`
	display: flex;
	gap: 20px;
	margin: auto 0;
`;

const StyledLink = styled(Link)<{ theme: Theme }>`
	display: inline-flex;
	vertical-align: middle;
	text-decoration: none;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.primary};
	margin: auto 0;
	transition: all 0.3s ease;

	& img,
	& svg path {
		transition: all 0.3s ease;
	}

	@media (hover: hover) {
		&:hover {
			color: ${({ theme }) => theme.colors.primaryDark};

			& svg {
				& path {
					fill: ${({ theme }) => theme.colors.primaryDark};
				}
			}
		}
	}

	&:active {
		& svg,
		& img {
			transform: scale(0.95);
		}
	}
`;

export default function Header() {
	return (
		<>
			<StyledBg />
			<StyledHeader>
				<Container $lgPadding={20}>
					<Flex $justifyContent="space-between">
						<StyledLink href="/">
							<Image
								src="/logo.svg"
								alt="Cherry Logo"
								width={150}
								height={38}
								priority
							/>
						</StyledLink>

						<StyledNav>
							<StyledLink href="/docs" aria-label="Documentation">
								Docs
							</StyledLink>
							<StyledLink
								href="https://github.com/"
								target="_blank"
								aria-label="GitHub Repository"
							>
								<IconGitHub />
							</StyledLink>
						</StyledNav>
					</Flex>
				</Container>
			</StyledHeader>
			{/* <Search /> */}
		</>
	);
}
