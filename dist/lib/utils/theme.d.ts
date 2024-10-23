export declare const breakpoints: Breakpoints;
export declare function mq(minWidth: keyof Breakpoints): string;
export declare const spacing: Spacing;
export declare const colors: Colors;
export declare const colorsDark: Colors;
export declare const shadows: Shadows;
export declare const shadowsDark: Shadows;
export declare const fonts: Fonts;
export declare const fontSizes: FontSizes;
export declare const lineHeights: LineHeights;
export declare const theme: Theme;
export declare const themeDark: Theme;
export interface Breakpoints<TNumber = number> {
    xs: TNumber;
    sm: TNumber;
    md: TNumber;
    lg: TNumber;
    xl: TNumber;
    xxl: TNumber;
    xxxl: TNumber;
}
export interface Spacing<TString = string> {
    maxWidth: {
        xs: TString;
        xxxl: TString;
    };
    padding: {
        xs: TString;
        lg: TString;
    };
    radius: {
        xs: TString;
        lg: TString;
        xl: TString;
    };
    gridGap: {
        xs: TString;
        lg: TString;
    };
}
export interface Colors<TString = string> {
    primaryLight: TString;
    primary: TString;
    primaryDark: TString;
    secondaryLight: TString;
    secondary: TString;
    secondaryDark: TString;
    tertiaryLight: TString;
    tertiary: TString;
    tertiaryDark: TString;
    grayLight: TString;
    gray: TString;
    grayDark: TString;
    success: TString;
    error: TString;
    warning: TString;
    info: TString;
    dark: TString;
    light: TString;
}
interface Shadows<TString = string> {
    xs: TString;
    sm: TString;
    md: TString;
    lg: TString;
    xl: TString;
}
export interface Fonts<TString = string> {
    head: TString;
    text: TString;
    mono: TString;
}
export interface FontSizes<TString = string> {
    hero1: {
        xs: TString;
        lg: TString;
    };
    hero2: {
        xs: TString;
        lg: TString;
    };
    hero3: {
        xs: TString;
        lg: TString;
    };
    h1: {
        xs: TString;
        lg: TString;
    };
    h2: {
        xs: TString;
        lg: TString;
    };
    h3: {
        xs: TString;
        lg: TString;
    };
    h4: {
        xs: TString;
        lg: TString;
    };
    h5: {
        xs: TString;
        lg: TString;
    };
    h6: {
        xs: TString;
        lg: TString;
    };
    text: {
        xs: TString;
        lg: TString;
    };
    strong: {
        xs: TString;
        lg: TString;
    };
    small: {
        xs: TString;
        lg: TString;
    };
    blockquote: {
        xs: TString;
        lg: TString;
    };
    code: {
        xs: TString;
        lg: TString;
    };
    button: {
        xs: TString;
        lg: TString;
    };
    buttonBig: {
        xs: TString;
        lg: TString;
    };
    input: {
        xs: TString;
        lg: TString;
    };
    inputBig: {
        xs: TString;
        lg: TString;
    };
}
export interface LineHeights<TString = string> {
    hero1: {
        xs: TString;
        lg: TString;
    };
    hero2: {
        xs: TString;
        lg: TString;
    };
    hero3: {
        xs: TString;
        lg: TString;
    };
    h1: {
        xs: TString;
        lg: TString;
    };
    h2: {
        xs: TString;
        lg: TString;
    };
    h3: {
        xs: TString;
        lg: TString;
    };
    h4: {
        xs: TString;
        lg: TString;
    };
    h5: {
        xs: TString;
        lg: TString;
    };
    h6: {
        xs: TString;
        lg: TString;
    };
    text: {
        xs: TString;
        lg: TString;
    };
    strong: {
        xs: TString;
        lg: TString;
    };
    small: {
        xs: TString;
        lg: TString;
    };
    blockquote: {
        xs: TString;
        lg: TString;
    };
    code: {
        xs: TString;
        lg: TString;
    };
    button: {
        xs: TString;
        lg: TString;
    };
    buttonBig: {
        xs: TString;
        lg: TString;
    };
    input: {
        xs: TString;
        lg: TString;
    };
    inputBig: {
        xs: TString;
        lg: TString;
    };
}
export interface Theme {
    breakpoints: Breakpoints;
    spacing: Spacing;
    colors: Colors;
    shadows: Shadows;
    fonts: Fonts;
    fontSizes: FontSizes;
    lineHeights: LineHeights;
    isDark: boolean;
}
export {};
