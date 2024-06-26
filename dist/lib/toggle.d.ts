import { default as React } from 'react';
import { Theme } from './utils';

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    type?: "checkbox" | "radio";
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
declare function Toggle({ type, ...props }: ToggleProps): React.JSX.Element;
export { Toggle };
