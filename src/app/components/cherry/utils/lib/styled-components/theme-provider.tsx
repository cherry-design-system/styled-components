"use client";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/app/components/cherry/utils";

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
