"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	docsComponentsNav,
	docsFigmaNav,
	docsIntroNav,
} from "@/app/navs/documentation";
import { Theme, mq } from "@/app/theme";
import { Space } from "@/app/components/cherry";
import { resetButton } from "@/app/components/cherry/utils/mixins";

interface Props {
	theme?: Theme;
	$isActive?: boolean;
}

const StyledSidebar = styled.nav<Props>`
	position: fixed;
	overflow-y: auto;
	max-height: 100svh;
	padding: 0 20px 0 0;
	width: 100%;
	background: ${({ theme }) => theme.colors.light};
	z-index: 99;
	top: 0;
	height: 100%;
	padding-top: 130px;
	padding-bottom: 20px;
	opacity: 0;
	pointer-events: none;
	transition: all 0.3s ease;
	transform: translateY(30px);

	${mq("lg")} {
		width: 155px;
		left: calc(50% - 477px);
		top: 0;
		background: transparent;
		padding-top: 40px;
		padding-bottom: 40px;
		opacity: 1;
		pointer-events: all;
		transform: translateY(0);
	}

	${mq("xl")} {
		width: 250px;
		left: calc(50% - 570px);
	}

	${({ $isActive }) =>
		$isActive &&
		css`
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		`}
`;

const StyledSidebarList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const StyledStrong = styled.strong<{ theme: Theme }>`
	font-weight: 600;
	font-size: ${({ theme }) => theme.fontSizes.strong.xs};
	line-height: ${({ theme }) => theme.lineHeights.strong.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.strong.lg};
		line-height: ${({ theme }) => theme.lineHeights.strong.lg};
	}
`;

const StyledSidebarListItem = styled.li`
	clear: both;
`;

const StyledSidebarListItemLink = styled(Link)<Props>`
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSizes.strong.xs};
	line-height: 2.1;
	color: ${({ theme }) => theme.colors.primary};
	padding: 0 0 0 20px;
	display: flex;
	transition: all 0.3s ease;
	border-left: solid 1px ${({ theme }) => theme.colors.grayLight};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.strong.lg};
		line-height: 2.1;
	}

	@media (hover: hover) {
		&:hover {
			color: ${({ theme }) => theme.colors.primaryDark};
			border-color: ${({ theme }) => theme.colors.info};
		}
	}

	${({ $isActive, theme }) =>
		$isActive &&
		`
			color: ${theme.colors.dark};
			border-color: ${theme.colors.info};
	`};
`;

const StyleMobileBar = styled.button<Props>`
	${resetButton};
	position: sticky;
	top: 20px;
	font-size: ${({ theme }) => theme.fontSizes.strong.lg};
	line-height: ${({ theme }) => theme.fontSizes.strong.lg};
	background: ${({ theme }) => theme.colors.light};
	box-shadow: ${({ theme }) => theme.shadows.sm};
	color: ${({ theme }) => theme.colors.primary};
	padding: 30px;
	border-radius: 100px;
	margin: 0 0 20px 0;
	z-index: 100;
	font-weight: 600;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	max-width: calc(100vw - 40px);

	${mq("lg")} {
		display: none;
	}

	${({ $isActive }) => $isActive && `position: fixed; `};
`;

const StyledMobileBurger = styled.span<Props>`
	display: block;
	margin: auto 0;
	width: 18px;
	height: 18px;
	position: relative;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.light};
	position: relative;

	&::before,
	&::after {
		content: "";
		display: block;
		position: absolute;
		width: 18px;
		height: 3px;
		border-radius: 3px;
		background: ${({ theme }) => theme.colors.primary};
		transition: all 0.3s ease;
	}

	&::before {
		top: 3px;
	}

	&::after {
		bottom: 3px;
	}

	${({ $isActive }) =>
		$isActive &&
		css`
			&::before {
				transform: translateY(5px) rotate(45deg);
			}

			&::after {
				transform: translateY(-4px) rotate(-45deg);
			}
		`};
`;

const StyleMobileLabelTitle = styled.span`
	display: flex;
	margin: auto 0 auto 10px;
`;

function Sidebar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const allDocs = [...docsIntroNav, ...docsFigmaNav, ...docsComponentsNav];
	const pathname = usePathname();
	const current = allDocs.find((obj) => obj.url === pathname);

	return (
		<>
			<StyleMobileBar
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				$isActive={isMobileMenuOpen}
			>
				<StyledMobileBurger $isActive={isMobileMenuOpen} />
				{current ? (
					<StyleMobileLabelTitle>
						{current.title}
					</StyleMobileLabelTitle>
				) : (
					""
				)}
			</StyleMobileBar>

			<StyledSidebar $isActive={isMobileMenuOpen}>
				<StyledSidebarList>
					<StyledSidebarListItem>
						<StyledStrong>Getting Started</StyledStrong>
						<Space $size={20} />
					</StyledSidebarListItem>
					{docsIntroNav.map((item, index) => {
						return (
							<StyledSidebarListItem key={index}>
								<StyledSidebarListItemLink
									href={item.url}
									$isActive={pathname === item.url}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.title}
								</StyledSidebarListItemLink>
							</StyledSidebarListItem>
						);
					})}
					<StyledSidebarListItem>
						<Space $size={20} />
						<StyledStrong>Design</StyledStrong>
						<Space $size={20} />
					</StyledSidebarListItem>
					{docsFigmaNav.map((item, index) => {
						return (
							<StyledSidebarListItem key={index}>
								<StyledSidebarListItemLink
									href={item.url}
									$isActive={pathname === item.url}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.title}
								</StyledSidebarListItemLink>
							</StyledSidebarListItem>
						);
					})}
					<StyledSidebarListItem>
						<Space $size={20} />
						<StyledStrong>Develop</StyledStrong>
						<Space $size={20} />
					</StyledSidebarListItem>
					{docsComponentsNav.map((item, index) => {
						return (
							<StyledSidebarListItem key={index}>
								<StyledSidebarListItemLink
									href={item.url}
									$isActive={pathname === item.url}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.title}
								</StyledSidebarListItemLink>
							</StyledSidebarListItem>
						);
					})}
				</StyledSidebarList>
			</StyledSidebar>
		</>
	);
}

export { Sidebar };
