"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Theme, mq } from "@/app/theme";
import { Container } from "@/app/components/cherry/container";

const StyledHeader = styled.header<{ theme: Theme }>`
	background: ${({ theme }) => theme.colors.light};
	border-radius: 100px;
	max-width: calc(100% - 40px);
	margin: 20px auto 0;
	position: sticky;
	top: 20px;
	z-index: 100;
	box-shadow:
		0px 10px 10px 0px rgba(0, 0, 0, 0.1),
		0px 4px 4px 0px rgba(0, 0, 0, 0.05),
		0px 1px 0px 0px rgba(0, 0, 0, 0.05);

	${mq("lg")} {
		margin: 40px auto 0;
		max-width: 800px;
	}

	& a {
		display: inline-flex;
	}
`;

const StyledBg = styled.span<{ theme: Theme }>`
	width: 100vw;
	height: 100svh;
	background: url("/bg.jpg");
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	opacity: 0.5;
`;

export default function Header() {
	return (
		<>
			<StyledBg />
			<StyledHeader>
				<Container $lgPadding={20}>
					<Link href="/">
						<Image
							src="/logo.svg"
							alt="Cherry Logo"
							width={150}
							height={38}
							priority
						/>
					</Link>
				</Container>
			</StyledHeader>
		</>
	);
}
