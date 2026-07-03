"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";

import { Icon } from "./icon";
import { IconButton } from "./icon-button";
import { Theme } from "./utils";

export type ToastColor = "info" | "success" | "error" | "warning";
export type ToastAlign = "center" | "left" | "right";

export interface ToastConfig {
  color?: ToastColor;
  autoHide?: number;
}

type Toast = {
  id: number;
  text: string;
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

// Full exit transition: 150ms while the pill fades out, then 250ms while the
// space collapses. Must match the transition timings in StyledNotificationItem.
const EXIT_DURATION_MS = 400;

const ToastNotificationsContext = createContext<{
  notifications: Toast[];
  addNotification: (text: string, config?: ToastConfig) => void;
  removeNotification: (id: number) => void;
}>({
  notifications: [],
  addNotification: () => null,
  removeNotification: () => null,
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
  const nextId = useRef(0);

  const addNotification = useCallback((text: string, config?: ToastConfig) => {
    const id = nextId.current++;
    setNotifications((prev) => [
      ...prev,
      {
        id,
        text,
        color: config?.color || "info",
        autoHide: config?.autoHide || 0,
      },
    ]);
  }, []);

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const value = useMemo(
    () => ({ notifications, addNotification, removeNotification }),
    [notifications, addNotification, removeNotification],
  );

  return (
    <ToastNotificationsContext.Provider value={value}>
      {children}
    </ToastNotificationsContext.Provider>
  );
}

export const StyledNotifications = styled.ul<{
  theme: Theme;
  $align?: ToastAlign;
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
`;

export const StyledNotificationItem = styled.li<{
  theme: Theme;
  $color: ToastColor;
  $visible: boolean;
  $static: boolean;
  $align?: ToastAlign;
  $bottom?: boolean;
}>`
  display: grid;
  /* Collapsed by default so enter AND exit animate the occupied space.
     Animating grid-template-rows (0fr to 1fr) tracks the toast's real height,
     so the space glides instead of snapping like a max-height guess would.
     No overflow clipping (it would shear the pill's shadow): instead the exit
     fades the pill out FIRST, then collapses the now-invisible space. */
  grid-template-rows: 0fr;
  justify-items: center;
  margin: 0;
  padding: 0;
  opacity: 0;
  pointer-events: none;
  /* Slide in from the edge the stack is anchored to. */
  transform: translateY(${({ $bottom }) => ($bottom ? "20px" : "-20px")});
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    grid-template-rows 0.25s ease 0.15s,
    margin 0.25s ease 0.15s;

  ${({ $align }) =>
    $align === "right" &&
    css`
      justify-items: end;
    `}

  ${({ $align }) =>
    $align === "left" &&
    css`
      justify-items: start;
    `}

  /* Unpadded grid child so the row can collapse all the way to 0: the padded
     pill inside would floor the track at its padding + border height. */
  & .item-wrapper {
    min-height: 0;
  }

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
        color: ${({ theme, $color }) => theme.colors[$color]};
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

  ${({ $visible, $bottom }) =>
    $visible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
      grid-template-rows: 1fr;
      /* Enter mirrors the exit: grow the space first, then fade in. */
      transition:
        grid-template-rows 0.25s ease,
        margin 0.25s ease,
        opacity 0.2s ease 0.15s,
        transform 0.2s ease 0.15s;

      ${
        $bottom
          ? css`
              margin-top: 10px;
            `
          : css`
              margin-bottom: 10px;
            `
      }
    `}

  ${({ $static }) =>
    $static &&
    css`
      position: relative;
      z-index: 10;
    `}
`;

export interface ToastNotificationsProps {
  $align?: ToastAlign;
  $bottom?: boolean;
}

function ToastNotifications({
  $align = "center",
  $bottom,
}: ToastNotificationsProps) {
  const { notifications } = useToastNotifications();

  return (
    <StyledNotifications $align={$align} $bottom={$bottom} aria-live="polite">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          $align={$align}
          $bottom={$bottom}
        />
      ))}
    </StyledNotifications>
  );
}

interface NotificationItemProps {
  notification: Toast;
  $align?: ToastAlign;
  $bottom?: boolean;
}

function NotificationItem({
  notification,
  $align,
  $bottom,
}: NotificationItemProps) {
  const { removeNotification } = useToastNotifications();
  const [phase, setPhase] = useState<"entering" | "visible" | "exiting">(
    "entering",
  );

  // Mount collapsed, then flip to visible after the collapsed frame has
  // painted (hence the double rAF) so the enter transition actually plays.
  useEffect(() => {
    let inner: number;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() =>
        setPhase((prev) => (prev === "entering" ? "visible" : prev)),
      );
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, []);

  useEffect(() => {
    if (!notification.autoHide) return;
    const timeout = setTimeout(
      () => setPhase("exiting"),
      notification.autoHide,
    );
    return () => clearTimeout(timeout);
  }, [notification.autoHide]);

  // Once the exit transition has finished, drop the toast from state so
  // dismissed toasts don't pile up in the DOM.
  useEffect(() => {
    if (phase !== "exiting") return;
    const timeout = setTimeout(
      () => removeNotification(notification.id),
      EXIT_DURATION_MS,
    );
    return () => clearTimeout(timeout);
  }, [phase, notification.id, removeNotification]);

  return (
    <StyledNotificationItem
      $visible={phase === "visible"}
      $color={notification.color}
      $static={!notification.autoHide}
      $align={$align}
      $bottom={$bottom}
    >
      <span className="item-wrapper">
        <span className="item">
          <span className="status-icon">
            <Icon name={statusIcons[notification.color] || statusIcons.info} />
          </span>
          <span className="message">{notification.text}</span>
          <IconButton
            $size="small"
            className="close-button"
            aria-label="Dismiss notification"
            onClick={() => setPhase("exiting")}
          >
            <Icon name="X" />
          </IconButton>
        </span>
      </span>
    </StyledNotificationItem>
  );
}

export {
  ToastNotifications,
  ToastNotificationsContext,
  ToastNotificationsProvider,
  useToastNotifications,
};
