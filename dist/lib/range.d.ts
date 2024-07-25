import { default as React } from 'react';
import { Theme } from './utils';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    className?: string;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    theme?: Theme;
}
declare const Range: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<unknown>>;
export { Range };
