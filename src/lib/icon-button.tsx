"use client";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { Theme, alpha, resetButton, shade, tint } from "./utils";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  "aria-label": string;
  $size?: "default" | "big" | "small";
  $error?: boolean;
  $active?: boolean;
}

const iconButtonSizes = {
  small: { box: 24, icon: 12 },
  default: { box: 28, icon: 14 },
  big: { box: 32, icon: 16 },
};

export const iconButtonStyles = (
  theme: Theme,
  $size?: "default" | "big" | "small",
  $error?: boolean,
  disabled?: boolean,
  $active?: boolean,
) => {
  const { box, icon } = iconButtonSizes[$size ?? "default"];

  return css`
    ${resetButton};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    width: ${box}px;
    height: ${box}px;
    border-radius: 50%;
    background: ${theme.colors.light};
    border: solid 2px ${theme.colors.grayLight};
    color: ${$error ? theme.colors.error : theme.colors.grayDark};
    box-shadow: 0 0 0 0px
      ${$error ? tint(theme.colors.error, 10) : theme.colors.primaryLight};
    transition: all 0.3s ease;

    & svg {
      width: ${icon}px;
      height: ${icon}px;
    }

    ${
      !disabled &&
      ($error
        ? css`
            border-color: ${theme.colors.error};

            &:hover {
              border-color: ${shade(theme.colors.error, 10)};
              color: ${shade(theme.colors.error, 10)};
            }

            &:focus {
              box-shadow: 0 0 0 4px ${tint(theme.colors.error, 10)};
            }

            &:active {
              box-shadow: 0 0 0 2px ${tint(theme.colors.error, 10)};
            }
          `
        : css`
            &:hover {
              border-color: ${theme.colors.primary};
              color: ${theme.colors.primary};
            }

            &:focus {
              box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
              border-color: ${theme.colors.primary};
            }

            &:active {
              box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
            }
          `)
    }

    /* "On" state (dropzone open, preview active, …): primary border + tint
       on top of the base look. Reflected on aria-pressed for assistive tech. */
    ${
      !disabled &&
      $active &&
      css`
        border-color: ${theme.colors.primary};
        background: ${alpha(theme.colors.primary, theme.isDark ? 18 : 10)};
        color: ${theme.colors.primary};

        /* Mode resolved from a \`dark\` class on <html> rather than the theme
           object (no-flash static rendering): same tint, applied pre-hydration. */
        :root.dark & {
          background: ${alpha(theme.colors.primary, 18)};
        }
      `
    }

    ${
      disabled &&
      css`
        cursor: not-allowed;
        background: ${theme.colors.grayLight};
        border-color: ${theme.colors.grayLight};
        color: ${theme.colors.gray};
      `
    }
  `;
};

const StyledIconButton = styled.button<IconButtonProps>`
  ${({ theme, $size, $error, disabled, $active }) =>
    iconButtonStyles(theme, $size, $error, disabled, $active)}
`;

function LocalIconButton(
  { ...props }: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <StyledIconButton
      type="button"
      aria-pressed={props.$active === undefined ? undefined : props.$active}
      {...props}
      ref={ref}
    />
  );
}

const IconButton = forwardRef(LocalIconButton);

export { IconButton };
