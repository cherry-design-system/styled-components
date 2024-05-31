import { default as React } from 'react';
import { Theme } from './utils';

type JustifyContentType = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type GapType = number | "none";
interface FlexProps extends React.AllHTMLAttributes<FlexProps> {
    children?: React.ReactNode;
    $justifyContent?: JustifyContentType;
    $xsJustifyContent?: JustifyContentType;
    $smJustifyContent?: JustifyContentType;
    $mdJustifyContent?: JustifyContentType;
    $lgJustifyContent?: JustifyContentType;
    $xlJustifyContent?: JustifyContentType;
    $xxlJustifyContent?: JustifyContentType;
    $xxxlJustifyContent?: JustifyContentType;
    $wrap?: "wrap" | "nowrap" | "wrap-reverse";
    $gap?: GapType;
    $xsGap?: GapType;
    $smGap?: GapType;
    $mdGap?: GapType;
    $lgGap?: GapType;
    $xlGap?: GapType;
    $xxlGap?: GapType;
    $xxxlGap?: GapType;
    $direction?: "row" | "column" | "row-reverse" | "column-reverse";
    theme?: Theme;
}
declare function Flex({ theme, ...props }: FlexProps): React.JSX.Element;
export { Flex };
