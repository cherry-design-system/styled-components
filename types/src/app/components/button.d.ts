import React from "react";
import { Theme } from "./utils";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    $variant?: "primary" | "secondary" | "tertiary";
    $size?: "default" | "big";
    $outline?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
interface LinkButtonProps extends ButtonProps {
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
}
declare function Button({ $variant, ...props }: ButtonProps): React.JSX.Element;
declare function LinkButton({ $variant, theme, ...props }: LinkButtonProps): React.JSX.Element;
export { Button, LinkButton };
