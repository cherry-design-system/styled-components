import { default as React } from 'react';
import { IStyledComponent } from 'styled-components';
import { Theme } from './utils';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    $wrapperClassName?: string;
    $label?: string;
    $size?: "default" | "big" | "small";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    $icon?: React.ReactNode;
    $iconPosition?: "left" | "right";
    theme?: Theme;
}
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    $label?: string;
    $size?: "default" | "big" | "small";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
export declare const StyledInputWrapper: IStyledComponent<"web", React.HTMLAttributes<HTMLSpanElement> & Pick<InputProps, "$label" | "$fullWidth" | "type">>;
export declare const StyledLabel: IStyledComponent<"web", LabelProps>;
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
