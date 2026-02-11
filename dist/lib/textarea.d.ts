import { default as React } from 'react';
import { Theme } from './utils';
interface TextareaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
    children?: React.ReactNode;
    $wrapperClassName?: string;
    $label?: string;
    $size?: "default" | "big" | "small";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
    rows?: number;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
