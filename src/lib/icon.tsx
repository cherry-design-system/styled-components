"use client";
import { isValidElement, type ComponentType, type ReactElement } from "react";

/**
 * The props Cherry hands to an icon component. Every `lucide-react` export
 * satisfies this, and so does any SVG component that takes a `size`.
 */
export interface IconGlyphProps {
  size?: number;
  color?: string;
  className?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
  role?: "img";
}

/**
 * An icon component: `import { ArrowRight } from "lucide-react"`, or a
 * component of your own that accepts `IconGlyphProps`.
 */
export type IconComponent = ComponentType<IconGlyphProps>;

/**
 * What a component's `$icon`-style prop accepts: an `IconComponent`, which
 * the component renders through `Icon` at the size it chooses, or a rendered
 * element such as `<DynamicIcon name={n} />`, which is used as given.
 */
export type IconSource = IconComponent | ReactElement;

export interface IconProps {
  /** An imported lucide component, or any component taking `IconGlyphProps`. */
  icon: IconComponent;
  color?: string;
  size?: number;
  className?: string;
  "aria-label"?: string;
}

/**
 * Renders one icon component. It costs exactly that glyph and renders on the
 * server. Decorative unless labelled; a labelled glyph is announced as an
 * image. For an icon chosen at runtime, see `DynamicIcon` in the
 * `cherry-styled-components/dynamic` subpath.
 */
const Icon = ({
  icon: Glyph,
  color,
  size,
  className,
  "aria-label": ariaLabel,
}: IconProps) => (
  <Glyph
    color={color}
    size={size}
    className={className}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    role={ariaLabel ? "img" : undefined}
  />
);

/**
 * Renders an `IconSource`: an element as given, a component through `Icon`
 * with `props`. For components that forward a `$icon`-style prop.
 */
export function renderIcon(
  source: IconSource,
  props?: Omit<IconProps, "icon">,
): ReactElement {
  return isValidElement(source) ? source : <Icon icon={source} {...props} />;
}

export { Icon };
