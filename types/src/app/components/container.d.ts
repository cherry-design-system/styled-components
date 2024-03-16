import React from "react";
import { Theme } from "./utils";
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
    theme?: Theme;
}
declare function Container({ ...props }: ContainerProps): React.JSX.Element;
export { Container };
