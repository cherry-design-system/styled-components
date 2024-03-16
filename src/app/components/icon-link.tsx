import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { Theme, styledStrong } from "@/app/components/cherry";

interface IconLinkProps {
	children?: React.ReactNode;
	$bgColor: string;
	$label?: string;
	theme?: Theme;
	href?: string;
}

const StyledLink = styled.a<IconLinkProps>`
	display: inline-flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.primary};
	transition: all 0.3s ease;

	@media (hover: hover) {
		&:hover {
			color: ${({ theme }) => theme.colors.primaryDark};
		}
	}
`;

const StyledIcon = styled.div<IconLinkProps>`
	width: 52px;
	height: 52px;
	border-radius: ${({ theme }) => theme.spacing.radius.lg};
	background: ${({ $bgColor }) => $bgColor};
	display: flex;
	flex-wrap: wrap;
	transform: scale(1);
	transition: all 0.3s ease;

	@media (hover: hover) {
		&:hover {
			background: ${({ $bgColor }) => lighten(0.1, $bgColor)};
		}
	}

	&:active {
		transform: scale(0.95);
	}

	& svg {
		margin: auto;
	}

	& svg:not(.figma) path {
		fill: ${({ theme }) => theme.colors.light};
	}
`;

const StyledLabel = styled.span<IconLinkProps>`
	padding: 5px 0 0;
	display: block;
	font-weight: 700;
	${({ theme }) => styledStrong(theme)};
`;

function IconLink({ ...props }: IconLinkProps) {
	return (
		<StyledLink href={props.href} target="_blank" $bgColor={props.$bgColor}>
			<StyledIcon $bgColor={props.$bgColor}>{props.children}</StyledIcon>
			{props.$label && (
				<StyledLabel $bgColor={props.$bgColor}>
					{props.$label}
				</StyledLabel>
			)}
		</StyledLink>
	);
}

export { IconLink };
