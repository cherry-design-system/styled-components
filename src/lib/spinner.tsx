"use client";
import styled, { keyframes } from "styled-components";

import { Icon, IconProps } from "./icon";

export interface SpinnerProps {
  /** Lucide icon to rotate. */
  name?: IconProps;
  color?: string;
  size?: number;
  className?: string;
  "aria-label"?: string;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(Icon)`
  /* The icon strokes with currentColor; resolve it from the theme rather
     than inheritance so the spinner stays visible on either mode's surface
     (inherited page color does not flip with the theme object). An explicit
     color prop still wins - it sets the stroke attribute directly. */
  color: ${({ theme }) => theme.colors.dark};
  animation: ${spin} 1s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Spinner = ({ name = "LoaderCircle", ...props }: SpinnerProps) => (
  <StyledSpinner name={name} {...props} />
);

export { Spinner };
