import React from "react";
import { Theme } from "./utils";
interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
export declare const StyledIconWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, SelectProps>>;
declare function Select({ theme, ...props }: SelectProps): React.JSX.Element;
export { Select };
