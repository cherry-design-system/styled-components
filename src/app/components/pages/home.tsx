"use client";

import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Theme, mq } from "@/app/theme";
import {
	Button,
	Col,
	Container,
	Flex,
	Grid,
	Input,
	LinkButton,
	MaxWidth,
	Range,
	Select,
	Space,
	Textarea,
	Toggle,
} from "@/app/components/cherry";
import Content from "@/app/docs/snippets/demo.mdx";
import {
	IconDiscord,
	IconFigma,
	IconGitHub,
} from "@/app/components/cherry/utils/icons";
import { IconLink } from "@/app/components/icon-link";
import { Footer } from "@/app/components/footer";
import {
	styledH1,
	styledH3,
	styledHero2,
	styledStrong,
	styledText,
} from "@/app/components/cherry/utils/typography";

const gridDecoration = css`
	position: relative;

	&::before {
		content: "";
		display: block;
		position: absolute;
		width: 100vw;
		max-width: 100vw;
		background: url("/grid.svg") no-repeat center center;
		z-index: -1;
		background-size: 100%;
		height: 357px;
		left: 50%;
		top: 50%;
		aspect-ratio: 1440 / 357;
		transform: translate(-50%, -50%);
	}
`;

const StyledIntro = styled.h1<{ theme: Theme }>`
	max-width: 900px;
	margin: auto;
	${({ theme }) => styledHero2(theme)};

	${gridDecoration};
`;

const GridDecoration = styled.span<{ theme: Theme }>`
	${gridDecoration};

	&::before {
		transform: translate(-50%, -50%) rotate(180deg);
	}
`;

const StyledParagraph = styled.p<{ theme: Theme }>`
	max-width: 700px;
	margin: auto;
	${({ theme }) => styledText(theme)};
`;

const StyledH2 = styled.h2<{ theme: Theme }>`
	max-width: 900px;
	margin: auto;
	${({ theme }) => styledH3(theme)};
`;

interface TileProps {
	theme?: Theme;
	$variant: "primary" | "secondary" | "tertiary";
}

const Tile = styled.div<TileProps>`
	${({ theme, $variant }) =>
		$variant === "primary" && `background: ${theme.colors.primaryLight};`}
	${({ theme, $variant }) =>
		$variant === "secondary" &&
		`background: ${theme.colors.secondaryLight};`}
	${({ theme, $variant }) =>
		$variant === "tertiary" && `background: ${theme.colors.tertiaryLight};`}
	padding: 20px;
	border-radius: ${({ theme }) => theme.spacing.radius.lg};
	box-shadow: ${({ theme }) => theme.shadows.sm};
	text-align: center;
	display: flex;
	flex-direction: column;
`;

const TileImage = styled.div<{ theme: Theme }>`
	width: 93px;
	height: 93px;
	margin: 20px auto;
`;

const StyledStrong = styled.div<{ theme: Theme }>`
	display: block;
	font-weight: 700;
	${({ theme }) => styledStrong(theme)};
`;
const TileContent = styled.div<{ theme: Theme }>`
	background: ${({ theme }) => theme.colors.light};
	padding: 20px;
	border-radius: ${({ theme }) => theme.spacing.radius.lg};
	text-align: left;
	flex-grow: 1;
`;

const StyledH3 = styled.h3<{ theme: Theme }>`
	max-width: 900px;
	margin: auto;
	${({ theme }) => styledH1(theme)};
`;

function Home() {
	return (
		<>
			<Container $textAlign="center">
				<Space $size={40} />
				<StyledIntro>Design system for the modern web.</StyledIntro>
				<Space $size={40} />
				<StyledParagraph>
					The Cherry Design System is a versatile foundation for
					projects. It offers a white label base, ready-to-use Figma
					designs, React components, theming support and is open
					source. Explore the documentation to create delightful user
					interfaces.{" "}
				</StyledParagraph>
				<Space $size={40} />
				<LinkButton href="/docs">Get Started</LinkButton>
				<Space $size={80} />
				<Flex $justifyContent="center">
					<Image src="figma.svg" alt="Figma" width={28} height={42} />
					<Image src="react.svg" alt="React" width={38} height={42} />
				</Flex>
				<Space $size={80} />
				<MaxWidth $xs={640}>
					<GridDecoration>
						<Content />
					</GridDecoration>
				</MaxWidth>
				<Space $size={100} />
				<StyledH2>Streamline Your Design with Cherry</StyledH2>
				<Space $size={20} />
				<StyledParagraph>
					For every serious project, a robust design system is
					essential. It lays the foundation for consistent and
					cohesive user interfaces. Whether you’re building a web app,
					mobile app, or any digital product, having a well-defined
					set of basic elements is crucial. These elements include
					typography, buttons, form input components, and more.
				</StyledParagraph>
				<Space $size={20} />
				<LinkButton href="/docs" $outline>
					Get Started
				</LinkButton>
				<Space $size={100} />
				<Grid $xsCols={1} $lgCols={3}>
					<Tile $variant="primary">
						<TileImage>
							<Image
								src="w-figma.svg"
								alt="Figma Icon"
								width={48}
								height={71}
							/>
						</TileImage>
						<TileContent>
							<StyledStrong>Design</StyledStrong>
							<Space $size={10} />
							<StyledParagraph>
								Cherry Figma Design includes all the fundamental
								elements of an interface, well organised and
								it’s completely free.
							</StyledParagraph>
						</TileContent>
					</Tile>
					<Tile $variant="secondary">
						<TileImage>
							<Image
								src="w-react.svg"
								alt="React Icon"
								width={84}
								height={93}
							/>
						</TileImage>
						<TileContent>
							<StyledStrong>Code</StyledStrong>
							<Space $size={10} />
							<StyledParagraph>
								All Cherry element seamlessly translates
								into open-source React components, making
								implementation a breeze.
							</StyledParagraph>
						</TileContent>
					</Tile>
					<Tile $variant="tertiary">
						<TileImage>
							<Image
								src="w-rocket.svg"
								alt="Rocket Icon"
								width={77}
								height={77}
							/>
						</TileImage>
						<TileContent>
							<StyledStrong>Scale</StyledStrong>
							<Space $size={10} />
							<StyledParagraph>
								Whether you’re tweaking, adding features, or
								expanding your project, Cherry ensures that your
								design remains harmonious.
							</StyledParagraph>
						</TileContent>
					</Tile>
				</Grid>
				<Space $size={100} />
				<MaxWidth $xs={845}>
					<Grid $xsCols={1} $lgCols={3} $gap={20}>
						<Col $xsSpan={1} $lgSpan={2}>
							<Grid $xsCols={1} $lgCols={2} $gap={20}>
								<Input placeholder="Placeholder" $fullWidth />
								<Select $fullWidth>
									<option>Select</option>
								</Select>
								<Col $lgSpan={2}>
									<Flex
										$xsGap={10}
										$lgGap={20}
										$wrap="nowrap"
										$justifyContent="space-between"
									>
										<Input
											type="checkbox"
											id="checkbox-1"
										/>
										<Input
											type="checkbox"
											id="checkbox-2"
											defaultChecked
										/>
										<Input
											type="radio"
											id="radio-2"
											name="demo-radio"
										/>
										<Input
											type="radio"
											id="radio-3"
											name="demo-radio"
											defaultChecked
										/>
										<Range />
										<Toggle />
										<Toggle defaultChecked />
									</Flex>
								</Col>
							</Grid>
						</Col>
						<Textarea $fullWidth defaultValue="Textarea" />
					</Grid>
					<Space $size={20} />
					<Grid $xsCols={1} $lgCols={2} $gap={20}>
						<Col>
							<Flex $wrap="nowrap" $gap={20}>
								<Button $fullWidth>Button</Button>
								<Button $variant="secondary" $fullWidth>
									Button
								</Button>
								<Button $variant="tertiary" $fullWidth>
									Button
								</Button>
							</Flex>
						</Col>
						<Col>
							<Flex $wrap="nowrap" $gap={20}>
								<Button $outline $fullWidth>
									Button
								</Button>
								<Button
									$variant="secondary"
									$outline
									$fullWidth
								>
									Button
								</Button>
								<Button $variant="tertiary" $outline $fullWidth>
									Button
								</Button>
							</Flex>
						</Col>
					</Grid>
				</MaxWidth>
				<Space $size={100} />
				<StyledH3>Join the community</StyledH3>
				<Space $size={40} />
				<StyledParagraph>
					Ready to be part of something great? Join our vibrant
					community! Connect with fellow designers and developers on
					Discord, explore our Figma community template, star our
					GitHub repository, and engage in discussions. Together,
					we’ll build a better web!
				</StyledParagraph>
				<Space $size={100} />
				<Flex $justifyContent="center">
					<IconLink
						href="https://www.figma.com/community/file/943862931766586094?ref=cherry.design"
						$bgColor="#000000"
						$label="Figma"
					>
						<IconFigma className="figma" />
					</IconLink>
					<IconLink
						href="https://github.com/cherry-design-system/styled-components?ref=cherry.design"
						$bgColor="#000000"
						$label="GitHub"
					>
						<IconGitHub />
					</IconLink>
					<IconLink
						href="https://discord.gg/gm8Mz5Pe8u?ref=cherry.design"
						$bgColor="#7289DA"
						$label="Discord"
					>
						<IconDiscord />
					</IconLink>
				</Flex>
				<Space $size={100} />
				<LinkButton $variant="secondary" href="/docs">
					Get Started
				</LinkButton>
			</Container>
			<Footer />
		</>
	);
}

export { Home };
