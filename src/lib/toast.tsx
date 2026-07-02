"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { Icon } from "./icon";
import { IconButton } from "./icon-button";
import { Theme } from "./utils";

export type ToastColor = "info" | "success" | "error" | "warning";

export interface ToastConfig {
  color?: ToastColor;
  autoHide?: number;
}

type Toast = {
  text: string;
  status: "hidden" | "visible";
  color: ToastColor;
  autoHide: number;
};

const statusIcons: Record<
  ToastColor,
  React.ComponentProps<typeof Icon>["name"]
> = {
  success: "CircleCheck",
  error: "CircleX",
  warning: "TriangleAlert",
  info: "Info",
};

const ToastNotificationsContext = createContext<{
  notifications: Toast[];
  addNotification: (text: string, config?: ToastConfig) => void;
}>({
  notifications: [],
  addNotification: () => null,
});

function useToastNotifications() {
  return useContext(ToastNotificationsContext);
}

interface ToastNotificationsProviderProps {
  children: React.ReactNode;
}

function ToastNotificationsProvider({
  children,
}: ToastNotificationsProviderProps) {
  const [notifications, setNotifications] = useState<Toast[]>([]);

  const addNotification = (text: string, config?: ToastConfig) => {
    setNotifications((prev) => [
      ...prev,
      {
        text,
        status: "hidden",
        color: config?.color || "info",
        autoHide: config?.autoHide || 0,
      },
    ]);
    // Mount hidden first, then flip to visible on the next tick so the
    // enter transition (grow + fade) actually plays.
    setTimeout(() => {
      setNotifications((prev) =>
        prev.map((toast) =>
          toast.status === "hidden" ? { ...toast, status: "visible" } : toast,
        ),
      );
    }, 50);
  };

  return (
    <ToastNotificationsContext.Provider
      value={{ notifications, addNotification }}
    >
      {children}
    </ToastNotificationsContext.Provider>
  );
}

export const StyledNotifications = styled.ul<{
  theme: Theme;
  $align?: "center" | "left" | "right";
  $bottom?: boolean;
}>`
  position: fixed;
  z-index: 99999;
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ $align }) =>
    $align === "center" &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ $align }) =>
    $align === "right" &&
    css`
      right: 20px;
    `}

  ${({ $align }) =>
    $align === "left" &&
    css`
      left: 20px;
    `}

  ${({ $bottom }) =>
    $bottom
      ? css`
          bottom: 20px;
        `
      : css`
          top: 20px;
        `}

  & li {
    justify-content: center;
    display: flex;
    margin: 0;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-20px);
    padding: 0;
    /* Collapsed by default so enter AND exit animate the occupied space.
       max-height (unlike height: auto) is transitionable. No overflow
       clipping (it would shear the pill's shadow): instead the exit fades
       the pill out FIRST, then collapses the now-invisible space. */
    max-height: 0;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      max-height 0.25s ease 0.15s,
      margin 0.25s ease 0.15s;

    ${({ $align }) =>
      $align === "right" &&
      css`
        justify-content: flex-end;
      `}

    ${({ $align }) =>
      $align === "left" &&
      css`
        justify-content: flex-start;
      `}

    & .item {
      display: inline-flex;
      /* Center everything: a single-line message sits centered against the icon
         and close button; a wrapped multi-line message centers as a block. */
      align-items: center;
      gap: 10px;
      max-width: min(420px, calc(100vw - 40px));
      padding: 10px 10px 10px 18px;
      margin: 0;
      border-radius: ${({ theme }) => theme.spacing.radius.xl};
      background: ${({ theme }) => theme.colors.light};
      border: solid 1px ${({ theme }) => theme.colors.grayLight};
      box-shadow: ${({ theme }) =>
        theme.isDark ? theme.shadows.sm : theme.shadows.xs};
      color: ${({ theme }) => theme.colors.dark};
      font-size: ${({ theme }) => theme.fontSizes.small.lg};
      line-height: ${({ theme }) => theme.lineHeights.small.lg};
      font-weight: 500;

      /* Status icon, tinted to the semantic color. */
      & .status-icon {
        display: inline-flex;
        flex-shrink: 0;

        & svg {
          width: 20px;
          height: 20px;
          color: ${({ theme }) => theme.colors.info};
        }
      }

      /* The message grows to fill the row and wraps onto multiple lines when
         long; min-width:0 lets it shrink inside the flex row, and
         overflow-wrap breaks very long unbroken strings (e.g. URLs) instead of
         overflowing the pill. */
      & .message {
        flex: 1;
        min-width: 0;
        line-height: 1.5;
        overflow-wrap: anywhere;
      }

      & .close-button {
        flex-shrink: 0;
      }
    }

    &.error {
      & .item .status-icon svg {
        color: ${({ theme }) => theme.colors.error};
      }
    }

    &.success {
      & .item .status-icon svg {
        color: ${({ theme }) => theme.colors.success};
      }
    }

    &.warning {
      & .item .status-icon svg {
        color: ${({ theme }) => theme.colors.warning};
      }
    }

    &.info {
      & .item .status-icon svg {
        color: ${({ theme }) => theme.colors.info};
      }
    }

    &.visible {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
      /* Headroom for multi-line messages — this is the transition target, not a
         fixed height, so a tall value just lets long toasts grow without being
         clipped. */
      max-height: 320px;
      /* Enter mirrors the exit: grow the space first, then fade in. */
      transition:
        max-height 0.25s ease,
        margin 0.25s ease,
        opacity 0.2s ease 0.15s,
        transform 0.2s ease 0.15s;

      ${({ $bottom }) =>
        $bottom
          ? css`
              margin-top: 10px;
            `
          : css`
              margin-bottom: 10px;
            `}
    }

    &.static {
      position: relative;
      z-index: 10;
    }
  }
`;

export interface ToastNotificationsProps {
  $align?: "center" | "left" | "right";
  $bottom?: boolean;
}

function ToastNotifications({
  $align = "center",
  $bottom,
}: ToastNotificationsProps) {
  const { notifications } = useToastNotifications();

  return (
    <StyledNotifications $align={$align} $bottom={$bottom}>
      {notifications.map((notification, i) => (
        <NotificationItem key={i} {...notification} />
      ))}
    </StyledNotifications>
  );
}

function NotificationItem(notification: Toast) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!notification.autoHide) return;
    const timeout = setTimeout(() => setVisible(false), notification.autoHide);
    return () => clearTimeout(timeout);
  }, [notification.autoHide]);

  return (
    <li
      className={[
        visible ? notification.status : "hidden",
        notification.color,
        !notification.autoHide && "static",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="item">
        <span className="status-icon">
          <Icon name={statusIcons[notification.color] || statusIcons.info} />
        </span>
        <span className="message">{notification.text}</span>
        <IconButton
          $size="small"
          className="close-button"
          aria-label="Dismiss notification"
          onClick={() => setVisible(false)}
        >
          <Icon name="X" />
        </IconButton>
      </span>
    </li>
  );
}

export {
  ToastNotifications,
  ToastNotificationsContext,
  ToastNotificationsProvider,
  useToastNotifications,
};
