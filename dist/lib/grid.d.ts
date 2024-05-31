import { default as React } from 'react';
import { Theme } from './utils';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    $gap?: number | "none";
    $xsGap?: number | "none";
    $smGap?: number | "none";
    $mdGap?: number | "none";
    $lgGap?: number | "none";
    $xlGap?: number | "none";
    $xxlGap?: number | "none";
    $xxxlGap?: number | "none";
    $cols?: number;
    $xsCols?: number;
    $smCols?: number;
    $mdCols?: number;
    $lgCols?: number;
    $xlCols?: number;
    $xxlCols?: number;
    $xxxlCols?: number;
    theme?: Theme;
}
declare function Grid({ theme, ...props }: GridProps): React.JSX.Element;
export { Grid };
