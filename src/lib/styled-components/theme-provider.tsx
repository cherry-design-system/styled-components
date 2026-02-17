"use client";
import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "../utils";

interface ThemeContextProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: () => {},
});

function CherryThemeProvider({
  children,
  theme,
  themeDark,
}: {
  children: React.ReactNode;
  theme: Theme;
  themeDark?: Theme;
}) {
  const [currentTheme, setTheme] = useState(theme);
  useEffect(() => {
    if (!themeDark) return setTheme(theme);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme(themeDark);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(theme);
    }
  }, [theme, themeDark]);
  const GlobalStylesComponent = GlobalStyles(currentTheme);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ setTheme }}>
        <GlobalStylesComponent />
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
}

export { CherryThemeProvider };
