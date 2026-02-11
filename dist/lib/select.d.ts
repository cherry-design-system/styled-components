import { default as React } from 'react';
import { IStyledComponent } from 'styled-components';
import { Theme } from './utils';
interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    $wrapperClassName?: string;
    $label?: string;
    $size?: "default" | "big" | "small";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
export declare const StyledIconWrapper: IStyledComponent<"web", SelectProps>;
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export { Select };
