import { default as React } from 'react';
import { Theme } from './utils';

interface TextareaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
    children?: React.ReactNode;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
    rows?: number;
    ref?: React.Ref<HTMLTextAreaElement>;
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & React.RefAttributes<unknown>>;
export { Textarea };
