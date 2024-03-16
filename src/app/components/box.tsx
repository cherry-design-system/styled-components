"use client";
import React from "react";
import styled from "styled-components";
import { Container, ContainerProps } from "./container";

const StylesBox = styled(Container)<ContainerProps>`
	background: ${({ theme }) => theme.colors.light};
	border-radius: ${({ theme }) => theme.spacing.radius.lg};
	border: solid 1px ${({ theme }) => theme.colors.grayLight};
`;

function Box({ ...props }: ContainerProps) {
	return <StylesBox {...props}>{props.children}</StylesBox>;
}

export { Box };
