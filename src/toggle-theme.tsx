import React, { useContext } from "react";
import { useTheme } from "styled-components";
import { theme as themeLight, themeDark, ThemeContext, Toggle } from "./lib";

function ToggleTheme() {
  const theme = useTheme();
  const { setTheme } = useContext(ThemeContext);

  return (
    <Toggle
      $label="Toggle Theme"
      onChange={() => {
        if (theme.isDark) {
          setTheme(themeLight);
          localStorage.theme = "light";
        } else {
          setTheme(themeDark);
          localStorage.theme = "dark";
        }
      }}
    />
  );
}

export { ToggleTheme };
