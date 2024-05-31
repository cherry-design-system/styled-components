"use client";
import React from "react";
import styled from "styled-components";
import { Container, ContainerProps } from "./container";
import { theme as defaultTheme } from "./utils";

const StyledBox = styled(Container)<ContainerProps>`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
`;

function Box({ theme = defaultTheme, ...props }: ContainerProps) {
  return (
    <StyledBox {...props} theme={theme}>
      {props.children}
    </StyledBox>
  );
}

export { Box };
