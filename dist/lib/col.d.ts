import React from "react";
import { Theme } from "./utils";
interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    $span?: number;
    $xsSpan?: number;
    $smSpan?: number;
    $mdSpan?: number;
    $lgSpan?: number;
    $xlSpan?: number;
    $xxlSpan?: number;
    $xxxlSpan?: number;
    theme?: Theme;
}
declare function Col({ theme, ...props }: ColProps): React.JSX.Element;
export { Col };
