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
    ref?: React.Ref<HTMLDivElement>;
    theme?: Theme;
}
declare const Col: React.ForwardRefExoticComponent<Omit<ColProps, "ref"> & React.RefAttributes<unknown>>;
export { Col };
