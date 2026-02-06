import { default as React } from 'react';
import { Theme } from './utils';
interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    type?: "checkbox" | "radio";
    $wrapperClassName?: string;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;
export { Toggle };
