import { default as React } from 'react';
import { Theme } from './utils';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    className?: string;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
declare function Range({ ...props }: InputProps): React.JSX.Element;
export { Range };
