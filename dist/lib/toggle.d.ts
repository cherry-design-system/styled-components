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
    ref?: React.Ref<HTMLInputElement>;
}
declare const Toggle: React.ForwardRefExoticComponent<Omit<ToggleProps, "ref"> & React.RefAttributes<unknown>>;
export { Toggle };
