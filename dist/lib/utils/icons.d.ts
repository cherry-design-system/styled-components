import React from "react";
import { Theme } from "./theme";
interface IconProps extends React.SVGProps<SVGSVGElement> {
    theme?: Theme;
}
declare function IconCheck({ theme, ...props }: IconProps): React.JSX.Element;
declare function IconArrow({ theme, ...props }: IconProps): React.JSX.Element;
declare function IconGitHub({ theme, ...props }: IconProps): React.JSX.Element;
declare function IconDiscord({ theme, ...props }: IconProps): React.JSX.Element;
declare function IconDribbble({ theme, ...props }: IconProps): React.JSX.Element;
declare function IconThreads({ theme, ...props }: IconProps): React.JSX.Element;
declare function IconFigma({ theme, className, ...props }: IconProps): React.JSX.Element;
export { IconCheck, IconArrow, IconGitHub, IconDiscord, IconDribbble, IconThreads, IconFigma, };
