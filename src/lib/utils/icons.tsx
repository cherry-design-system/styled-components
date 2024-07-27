"use client";
import React from "react";
import { useTheme } from "styled-components";
import { Theme } from "./theme";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  theme?: Theme;
}

function IconCheck({ ...props }: IconProps) {
  const theme: Theme = useTheme() as Theme;
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 2L4.4 8L2 5.75"
        stroke={theme.colors.primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrow({ ...props }: IconProps) {
  const theme: Theme = useTheme() as Theme;
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2L8 8L14 2"
        stroke={theme.colors.primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCalendar({ ...props }: IconProps) {
  const theme: Theme = useTheme() as Theme;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.primary}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

export { IconCheck, IconArrow, IconCalendar };
