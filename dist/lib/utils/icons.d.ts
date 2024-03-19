import React from "react";
import { Theme } from "./theme";
interface IconProps extends React.SVGProps<SVGSVGElement> {
    theme?: Theme;
}
declare function IconCheck({ ...props }: IconProps): React.JSX.Element;
declare function IconArrow({ ...props }: IconProps): React.JSX.Element;
export { IconCheck, IconArrow };
