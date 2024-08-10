import { default as React } from 'react';
import { Theme } from '../utils';
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
