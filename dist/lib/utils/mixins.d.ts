import { Breakpoints, Theme } from './theme';

export declare const resetButton: import('styled-components').RuleSet<object>;
export declare const resetInput: import('styled-components').RuleSet<object>;
export declare const fullWidthStyles: (fullWidth: boolean) => import('styled-components').RuleSet<object> | undefined;
export declare const statusBorderStyles: ($error: boolean, $success: boolean, theme: Theme) => import('styled-components').RuleSet<object> | undefined;
export declare const formElementHeightStyles: ($size?: "default" | "big") => import('styled-components').RuleSet<object>;
export declare const generateGapStyles: (size: keyof Breakpoints<number>, gap: number | "none") => import('styled-components').RuleSet<object>;
export declare const generateColsStyles: (size: keyof Breakpoints<number>, cols: number) => import('styled-components').RuleSet<object>;
export declare const generateColSpanStyles: (size: keyof Breakpoints<number>, span: number) => import('styled-components').RuleSet<object>;
export declare const generatePaddingStyles: (size: keyof Breakpoints<number>, padding: number | "none") => import('styled-components').RuleSet<object>;
export declare const generateJustifyContentStyles: (size: keyof Breakpoints<number>, justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly") => import('styled-components').RuleSet<object>;
