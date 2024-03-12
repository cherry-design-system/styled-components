"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";
import {
	Button,
	Container,
	Flex,
	MaxWidth,
	Space,
} from "@/app/components/cherry";
import Content from "@/app/docs/snippets/home.mdx";

const StyledIntro = styled.h1<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.hero2.xs};
	line-height: ${({ theme }) => theme.lineHeights.hero2.xs};
	max-width: 900px;
	margin: auto;

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.hero2.lg};
		line-height: ${({ theme }) => theme.lineHeights.hero2.lg};
	}
`;

const StyledParagraph = styled.p<{ theme: Theme }>`
	max-width: 700px;
	margin: auto;
	font-size: ${({ theme }) => theme.fontSizes.text.xs};
	line-height: ${({ theme }) => theme.lineHeights.text.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.text.lg};
		line-height: ${({ theme }) => theme.lineHeights.text.lg};
	}
`;

function Home() {
	return (
		<Container $textAlign="center">
			<Space $size={40} />
			<StyledIntro>Design system for the modern web.</StyledIntro>
			<Space $size={40} />
			<StyledParagraph>
				The Cherry Design System is a versatile foundation for projects.
				It offers a white label base, ready-to-use Figma designs, React
				components, theming support and is open source. Explore the
				documentation to create delightful user interfaces.{" "}
			</StyledParagraph>
			<Space $size={40} />
			<Button>Get Started</Button>
			<Space $size={80} />
			<Flex $justifyContent="center">
				<Image src="figma.svg" alt="Figma" width={28} height={42} />
				<Image src="react.svg" alt="React" width={38} height={42} />
			</Flex>
			<Space $size={80} />
			<MaxWidth $xs={640}>
				<Content />
			</MaxWidth>
		</Container>
	);
}

export { Home };
