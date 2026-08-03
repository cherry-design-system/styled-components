"use client";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { Icon, IconProps } from "./icon";
import { Theme, styledSmall } from "./utils";

export type CalloutType = "note" | "info" | "warning" | "danger" | "success";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  $type?: CalloutType;
  /** Overrides the icon the type would pick, or supplies one when untyped. */
  $icon?: IconProps;
  /** Renders without an icon. */
  $hideIcon?: boolean;
}

// Callout tints are alert-semantic (note-blue, warning-amber, danger-red) and
// deliberately independent of the brand palette, so a white-label theme can
// recolor everything else without a danger callout turning reassuring.
type Tint = { border: string; background: string; text: string };

const calloutTints: Record<CalloutType, { light: Tint; dark: Tint }> = {
  note: {
    light: { border: "#0ea5e933", background: "#f0f9ff80", text: "#0c4a6e" },
    dark: { border: "#0ea5e94d", background: "#0ea5e91a", text: "#bae6fd" },
  },
  info: {
    light: { border: "#71717a33", background: "#fafafa80", text: "#18181b" },
    dark: { border: "#71717a4d", background: "#71717a1a", text: "#e4e4e7" },
  },
  warning: {
    light: { border: "#f59e0b33", background: "#fffbeb80", text: "#78350f" },
    dark: { border: "#f59e0b4d", background: "#f59e0b1a", text: "#fde68a" },
  },
  danger: {
    light: { border: "#ef444433", background: "#fef2f280", text: "#7f1d1d" },
    dark: { border: "#ef44444d", background: "#ef44441a", text: "#fecaca" },
  },
  success: {
    light: { border: "#10b98133", background: "#ecfdf580", text: "#064e3b" },
    dark: { border: "#10b9814d", background: "#10b9811a", text: "#a7f3d0" },
  },
};

const calloutIcons: Record<CalloutType, IconProps> = {
  note: "CircleAlert",
  info: "Info",
  warning: "TriangleAlert",
  danger: "OctagonAlert",
  success: "Check",
};

const tintStyles = (tint: Tint) => css`
  border-color: ${tint.border};
  background: ${tint.background};

  & .callout-icon svg,
  & .callout-content,
  & .callout-content p {
    color: ${tint.text};
  }
`;

const StyledCallout = styled.div<{ theme: Theme; $type?: CalloutType }>`
  background: ${({ theme }) => theme.colors.light};
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  padding: 20px;
  margin: 0;
  max-width: 100%;
  color: ${({ theme }) => theme.colors.grayDark};
  display: flex;
  ${({ theme }) => styledSmall(theme)};

  & .callout-icon {
    display: flex;
    flex-shrink: 0;
    margin: 3px 10px 0 0;

    & svg {
      width: 16px;
      height: 16px;
    }
  }

  & .callout-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;

    & > *:first-child {
      margin-top: 0;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }

  /* Light values are the default; dark mode is applied twice on purpose, once
     from the theme object and once from a \`dark\` class on <html>, so the tint
     is right both for apps that swap the theme and for apps that resolve the
     mode in CSS before hydration. Same approach as the filled Button. */
  ${({ $type, theme }) =>
    $type &&
    css`
      ${tintStyles(calloutTints[$type].light)};
      ${theme.isDark && tintStyles(calloutTints[$type].dark)};

      :root.dark & {
        ${tintStyles(calloutTints[$type].dark)};
      }
    `}
`;

function LocalCallout(
  { children, $type, $icon, $hideIcon, ...props }: CalloutProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const iconName = $icon ?? ($type ? calloutIcons[$type] : undefined);

  return (
    <StyledCallout $type={$type} {...props} ref={ref}>
      {!$hideIcon && iconName && (
        <span className="callout-icon">
          <Icon name={iconName} size={16} />
        </span>
      )}
      <span className="callout-content">{children}</span>
    </StyledCallout>
  );
}

const Callout = forwardRef(LocalCallout);

export { Callout };
