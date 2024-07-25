import { default as React } from 'react';

interface SpaceProps {
    $size?: number | "none";
    $xs?: number | "none";
    $sm?: number | "none";
    $md?: number | "none";
    $lg?: number | "none";
    $xl?: number | "none";
    $xxl?: number | "none";
    $xxxl?: number | "none";
    $horizontal?: boolean;
    ref?: React.Ref<HTMLSpanElement>;
}
declare const Space: React.ForwardRefExoticComponent<Omit<SpaceProps, "ref"> & React.RefAttributes<unknown>>;
export { Space };
