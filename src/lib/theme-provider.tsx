"use client";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/app/theme";
import { GlobalStyles } from "@/app/components/cherry/global";

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<StyledThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</StyledThemeProvider>
	);
}
