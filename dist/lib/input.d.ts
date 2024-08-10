import { default as React } from 'react';
import { Theme } from './utils';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    $icon?: React.ReactNode;
    $iconPosition?: "left" | "right";
    theme?: Theme;
}
export declare const StyledInputWrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, InputProps>> & string;
export declare const StyledLabel: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, InputProps>> & string;
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
