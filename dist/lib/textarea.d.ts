import React from "react";
import { Theme } from "./utils";
interface TextareaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
    children?: React.ReactNode;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
declare function Textarea({ theme, ...props }: TextareaProps): React.JSX.Element;
export { Textarea };
