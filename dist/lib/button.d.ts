import { default as React } from 'react';
import { Theme } from './utils';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    $variant?: "primary" | "secondary" | "tertiary";
    $size?: "default" | "big";
    $outline?: boolean;
    $fullWidth?: boolean;
    $icon?: React.ReactNode;
    $iconPosition?: "left" | "right";
    theme?: Theme;
}
export declare const buttonStyles: (theme: Theme, $variant?: "primary" | "secondary" | "tertiary", $size?: "default" | "big", $outline?: boolean, $fullWidth?: boolean, disabled?: boolean) => import('styled-components').RuleSet<object>;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
