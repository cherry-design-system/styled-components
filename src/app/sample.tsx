"use client";
import styled from "styled-components";
import { Theme, mq } from "@/app/theme";

export const StyledSample = styled.div<{ theme: Theme }>`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.light};
	padding: 20px;
	font-weight: 600;

	${mq("lg")} {
		padding: 40px;
	}
`;
