"use client";
import React from "react";
import styled from "styled-components";
import { Container, ContainerProps } from "./container";
import { theme as defaultTheme } from "./utils";

const StylesBox = styled(Container)<ContainerProps>`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
`;

function Box({ theme = defaultTheme, ...props }: ContainerProps) {
  return (
    <StylesBox {...props} theme={theme}>
      {props.children}
    </StylesBox>
  );
}

export { Box };
