"use client";
import {
  DynamicIcon as LucideDynamicIcon,
  iconNames,
  type IconName as LucideDynamicName,
} from "lucide-react/dynamic";
import type { icons } from "lucide-react";

// This module is the `cherry-styled-components/dynamic` subpath and the only
// place the library touches lucide's dynamic import map (one dynamic import
// per icon, which bundlers turn into one small chunk per icon). It is a build
// entry of its own and nothing on the main entry imports it, so only apps
// that import the subpath carry that map. Keep it that way.

/**
 * A lucide icon referenced by name: the PascalCase export name
 * (`"ArrowRight"`) or lucide's own kebab-case id (`"arrow-right"`).
 */
export type IconName = keyof typeof icons | LucideDynamicName;

export interface DynamicIconProps {
  /** The icon, by name. An unknown name renders nothing. */
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
  "aria-label"?: string;
}

const KEBAB_NAMES = new Set<string>(iconNames);

// lucide derives every PascalCase export from its kebab id by capitalising
// each segment ("arrow-down-a-z" -> "ArrowDownAZ"), so the same transform
// applied to the caller's spelling and looked up in reverse accepts exactly
// the names the `icons` map has.
function toPascal(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

const KEBAB_BY_PASCAL = new Map<string, LucideDynamicName>(
  iconNames.map((name) => [toPascal(name), name]),
);

function resolveIconName(name: string): LucideDynamicName | null {
  if (KEBAB_NAMES.has(name)) return name as LucideDynamicName;
  return KEBAB_BY_PASCAL.get(toPascal(name)) ?? null;
}

/**
 * Renders a lucide icon chosen at runtime (CMS content, user settings). The
 * glyph is fetched on demand through `lucide-react/dynamic`, so it appears
 * after hydration once its chunk has loaded, and never in server-rendered
 * HTML. For any icon known when the code is written, use
 * `<Icon icon={Glyph} />` from the main entry instead. In a `$icon`-style
 * prop, pass it as an element: `$icon={<DynamicIcon name={n} />}`.
 */
export function DynamicIcon({
  name,
  "aria-label": ariaLabel,
  ...props
}: DynamicIconProps) {
  const iconName = resolveIconName(name);
  if (!iconName) return null;
  return (
    <LucideDynamicIcon
      name={iconName}
      {...props}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : undefined}
    />
  );
}
