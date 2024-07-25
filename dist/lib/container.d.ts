import { default as React } from 'react';
import { Theme } from './utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    $fluid?: boolean;
    $textAlign?: "right" | "left" | "center";
    $padding?: number | "none";
    $xsPadding?: number | "none";
    $smPadding?: number | "none";
    $mdPadding?: number | "none";
    $lgPadding?: number | "none";
    $xlPadding?: number | "none";
    $xxlPadding?: number | "none";
    $xxxlPadding?: number | "none";
    ref?: React.Ref<HTMLDivElement>;
    theme?: Theme;
}
declare const Container: React.ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & React.RefAttributes<unknown>>;
export { Container };
