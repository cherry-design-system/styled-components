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
	margin: auto auto 20px;
	position: sticky;
	top: 20px;
	z-index: 100;
	box-shadow:
		0px 10px 10px 0px rgba(0, 0, 0, 0.1),
		0px 4px 4px 0px rgba(0, 0, 0, 0.05),
		0px 1px 0px 0px rgba(0, 0, 0, 0.05);

	${mq("lg")} {
		max-width: 800px;
	}
`;

export default function Header() {
	return (
		<>
			<StyledHeader>
				<Container $lgPadding="20px">
					<Link href="/">
						<Image
							src="/logo.svg"
							alt="Cherry Logo"
							width={150}
							height={38}
						/>
					</Link>
				</Container>
			</StyledHeader>
		</>
	);
}
