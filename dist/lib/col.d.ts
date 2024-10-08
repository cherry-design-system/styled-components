import { default as React } from 'react';
import { Theme } from './utils';
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
declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;
export { Col };
