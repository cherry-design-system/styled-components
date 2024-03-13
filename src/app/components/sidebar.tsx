"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	docsComponentsNav,
	docsFigmaNav,
	docsIntroNav,
} from "@/app/navs/documentation";
import { Theme, mq } from "@/app/theme";
import { Space } from "@/app/components/cherry";

const StyledSidebar = styled.nav<{ theme: Theme }>`
	position: fixed;
	left: calc(50% - 650px);
	top: 40px;
	overflow-y: auto;
	max-height: 100svh;
	padding: 0 20px 0 0;
	width: 250px;
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

const StyledSidebarListItem = styled.li``;

const StyledSidebarListItemLink = styled(Link)<{
	theme: Theme;
	$isActive?: boolean;
}>`
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

function Sidebar() {
	const pathname = usePathname();

	return (
		<StyledSidebar>
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
							>
								{item.title}
							</StyledSidebarListItemLink>
						</StyledSidebarListItem>
					);
				})}
			</StyledSidebarList>
		</StyledSidebar>
	);
}

export { Sidebar };
