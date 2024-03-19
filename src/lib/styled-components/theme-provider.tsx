"use client";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils";

function CherryThemeProvider({
	children,
	theme,
}: {
	children: any;
	theme?: any;
}) {
	const GlobalStylesComponent = GlobalStyles(theme);

	return (
		<StyledThemeProvider theme={theme}>
			<GlobalStylesComponent />
			{children}
		</StyledThemeProvider>
	);
}

export { CherryThemeProvider };
