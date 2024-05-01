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
}
declare function MaxWidth({ ...props }: MaxWidthProps): React.JSX.Element;
export { MaxWidth };
