"use client";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { Icon, IconProps } from "./icon";
import { Theme, darkFilledTextRule, filledTextColor } from "./utils";

export type AvatarSize = "small" | "default" | "big";
export type AvatarColor = "primary" | "secondary" | "tertiary" | "gray";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  $size?: AvatarSize;
  /** Image URL. Falls back to initials, then to the icon, if absent. */
  $src?: string;
  $alt?: string;
  /** Full name or label; the first letters of its first two words are shown. */
  $name?: string;
  /** Fallback icon used when there is no image and no name. */
  $icon?: IconProps;
  $color?: AvatarColor;
}

const avatarSizes: Record<AvatarSize, { box: number; icon: number }> = {
  small: { box: 28, icon: 14 },
  default: { box: 36, icon: 18 },
  big: { box: 48, icon: 24 },
};

const avatarColors: Record<AvatarColor, (theme: Theme) => string> = {
  primary: (theme) => theme.colors.primary,
  secondary: (theme) => theme.colors.secondary,
  tertiary: (theme) => theme.colors.tertiary,
  gray: (theme) => theme.colors.grayDark,
};

// First letter of the first two words: "Ada Lovelace" -> "AL", "cherry" -> "C".
function toInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase();
}

const StyledAvatar = styled.span<{
  theme: Theme;
  $size?: AvatarSize;
  $color?: AvatarColor;
}>`
  ${({ theme, $size = "default", $color = "primary" }) => {
    const { box } = avatarSizes[$size];

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
      width: ${box}px;
      height: ${box}px;
      border-radius: 50%;
      background: ${avatarColors[$color](theme)};
      color: ${filledTextColor(theme)};
      font-size: ${Math.round(box * 0.38)}px;
      line-height: 1;
      font-weight: 600;
      user-select: none;
      ${darkFilledTextRule(theme)};

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    `;
  }};
`;

function LocalAvatar(
  {
    $size = "default",
    $src,
    $alt,
    $name,
    $icon = "User",
    $color,
    ...props
  }: AvatarProps,
  ref: React.Ref<HTMLSpanElement>,
) {
  const initials = $name ? toInitials($name) : "";
  // An image or initials already carry the identity; the icon fallback needs
  // an accessible name (with a role, so the label on a span is announced).
  const fallbackLabel = $src || initials ? undefined : ($alt ?? $name);

  return (
    <StyledAvatar
      $size={$size}
      $color={$color}
      role={fallbackLabel ? "img" : undefined}
      aria-label={fallbackLabel}
      {...props}
      ref={ref}
    >
      {$src ? (
        <img src={$src} alt={$alt ?? $name ?? ""} />
      ) : initials ? (
        initials
      ) : (
        <Icon name={$icon} size={avatarSizes[$size].icon} />
      )}
    </StyledAvatar>
  );
}

const Avatar = forwardRef(LocalAvatar);

export { Avatar };
