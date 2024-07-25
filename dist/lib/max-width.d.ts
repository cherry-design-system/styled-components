import { default as React } from 'react';

interface MaxWidthProps extends React.HTMLAttributes<HTMLDivElement> {
    $size?: number;
    $xs?: number;
    $sm?: number;
    $md?: number;
    $lg?: number;
    $xl?: number;
    $xxl?: number;
    $xxxl?: number;
    ref?: React.Ref<HTMLDivElement>;
}
declare const MaxWidth: React.ForwardRefExoticComponent<Omit<MaxWidthProps, "ref"> & React.RefAttributes<unknown>>;
export { MaxWidth };
