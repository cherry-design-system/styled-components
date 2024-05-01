import { Theme } from './utils';
import { default as React } from 'react';

interface TextareaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
    children?: React.ReactNode;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
declare function Textarea({ ...props }: TextareaProps): React.JSX.Element;
export { Textarea };
