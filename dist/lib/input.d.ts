import React from "react";
import { Theme } from "./utils";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
export declare const StyledInputWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, InputProps>>;
export declare const StyledLabel: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, InputProps>>;
declare function Input({ theme, ...props }: InputProps): React.JSX.Element;
export { Input };
