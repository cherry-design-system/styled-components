"use client";
import React from "react";
import styled from "styled-components";
import { theme as defaultTheme, Theme, mq, generatePaddingStyles } from "./utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  $fluid?: boolean;
  $textAlign?: "right" | "left" | "center";
  $padding?: number | "none";
  $xsPadding?: number | "none";
  $smPadding?: number | "none";
  $mdPadding?: number | "none";
  $lgPadding?: number | "none";
  $xlPadding?: number | "none";
  $xxlPadding?: number | "none";
  $xxxlPadding?: number | "none";
  theme?: Theme;
}

const StyledContainer = styled.div<ContainerProps>`
  margin: auto;
  width: 100%;
  max-width: ${({ theme, $fluid }) => ($fluid ? `100%` : theme.spacing.maxWidth.xs)};
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign}`};
  padding: ${({ $padding, theme }) => ($padding && `${$padding}px`) || theme.spacing.padding.xs};

  ${mq("lg")} {
    padding: ${({ $padding, theme }) => ($padding && `${$padding}px`) || theme.spacing.padding.lg};
  }

  ${mq("xxxl")} {
    max-width: ${({ theme, $fluid }) => ($fluid ? `100%` : theme.spacing.maxWidth.xxxl)};
  }

  ${({ $xsPadding }) => $xsPadding && generatePaddingStyles("xs", $xsPadding)}
  ${({ $smPadding }) => $smPadding && generatePaddingStyles("sm", $smPadding)}
	${({ $mdPadding }) => $mdPadding && generatePaddingStyles("md", $mdPadding)}
	${({ $lgPadding }) => $lgPadding && generatePaddingStyles("lg", $lgPadding)}
	${({ $xlPadding }) => $xlPadding && generatePaddingStyles("xl", $xlPadding)}
	${({ $xxlPadding }) => $xxlPadding && generatePaddingStyles("xxl", $xxlPadding)}
	${({ $xxxlPadding }) => $xxxlPadding && generatePaddingStyles("xxxl", $xxxlPadding)}
`;

function Container({ theme = defaultTheme, ...props }: ContainerProps) {
  return (
    <StyledContainer {...props} theme={theme}>
      {props.children}
    </StyledContainer>
  );
}

export { Container };
