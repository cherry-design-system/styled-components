import { Theme } from './utils';
import { default as React } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    $variant?: "primary" | "secondary" | "tertiary";
    $size?: "default" | "big";
    $outline?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
export declare const buttonStyles: (theme: Theme, $variant?: "primary" | "secondary" | "tertiary", $size?: "default" | "big", $outline?: boolean, $fullWidth?: boolean, disabled?: boolean) => import('styled-components').RuleSet<object>;
declare function Button({ $variant, ...props }: ButtonProps): React.JSX.Element;
export { Button };
