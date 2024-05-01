import { Theme } from '../utils';
import { default as React } from 'react';

interface ThemeContextProps {
    setTheme: any;
}
export declare const ThemeContext: React.Context<ThemeContextProps>;
declare function CherryThemeProvider({ children, theme, themeDark, }: {
    children: React.ReactNode;
    theme: Theme;
    themeDark?: Theme;
}): React.JSX.Element;
export { CherryThemeProvider };
