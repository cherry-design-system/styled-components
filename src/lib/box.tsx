"use client";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Container, ContainerProps } from "./container";

const StyledBox = styled(Container)<ContainerProps>`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
`;

function LocalBox(
  { ...props }: ContainerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <StyledBox {...props} ref={ref}>
      {props.children}
    </StyledBox>
  );
}

const Box = forwardRef(LocalBox);

export { Box };
