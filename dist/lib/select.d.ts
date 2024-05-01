import { Theme } from './utils';
import { default as React } from 'react';

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    $label?: string;
    $size?: "default" | "big";
    $error?: boolean;
    $success?: boolean;
    $fullWidth?: boolean;
    theme?: Theme;
}
export declare const StyledIconWrapper: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, SelectProps>>;
declare function Select({ ...props }: SelectProps): React.JSX.Element;
export { Select };
