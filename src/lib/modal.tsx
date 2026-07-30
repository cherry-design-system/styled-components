"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";

import { Icon } from "./icon";
import { IconButton } from "./icon-button";
import {
  Theme,
  alpha,
  mq,
  styledH5,
  styledText,
  useOnClickOutside,
} from "./utils";

export interface ModalProps {
  children: React.ReactNode;
  $isOpen: boolean;
  $onClose: () => void;
  $title?: string;
  $width?: number;
  $hideCloseButton?: boolean;
  /** Escape hatches for app-level restyling, both applied to the overlay
      root. Note that wrapping with styled(Modal) does NOT work for the $-props
      API (styled-components strips transient props before they reach the
      wrapped component), so restyle by targeting a passed class instead. The
      inner parts expose stable class hooks: .modal-inner, .modal-close,
      .modal-title, .modal-content. */
  className?: string;
  style?: React.CSSProperties;
}

// Hydration-safe client detection: returns the server value (false) during the
// first client render so it matches SSR, then re-renders to true on the client.
// This lets us defer the document.body portal until after hydration without a
// setState-in-effect, avoiding both hydration mismatches and lint warnings.
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

// The modal mounts on open and unmounts once the exit animation finishes, so
// closed modals keep nothing in the DOM and children (e.g. forms) reset their
// state between openings. Keyframes (rather than transitions) make the enter
// motion play on mount and give the exit a definite end event to unmount on.
const overlayFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const overlayFadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const innerRiseIn = keyframes`
  from { transform: translateY(40px); }
  to { transform: translateY(0); }
`;

const innerSinkOut = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(40px); }
`;

const StyledModal = styled.div<{
  $isClosing: boolean;
  $width?: number;
  theme: Theme;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => alpha(theme.colors.primary, 50)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1010;
  animation: ${({ $isClosing }) =>
    $isClosing ? overlayFadeOut : overlayFadeIn}
    0.3s ease both;

  ${({ $isClosing }) =>
    $isClosing &&
    css`
      pointer-events: none;
    `}

  & .modal-inner {
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.spacing.radius.lg};
    padding: 20px;
    max-width: calc(100% - 40px);
    width: 100%;
    margin: auto;
    position: relative;
    animation: ${({ $isClosing }) => ($isClosing ? innerSinkOut : innerRiseIn)}
      0.3s ease both;

    ${mq("lg")} {
      max-width: 500px;

      ${({ $width }) =>
        $width &&
        css`
          max-width: ${$width}px;
        `}
    }
  }
`;

const StyledModalClose = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

const StyledModalTitle = styled.h2<{ theme: Theme }>`
  /* Divider colour via a top-level CSS variable so the nested ::after rule stays
     theme-independent and the line tracks light/dark on toggle (a direct theme
     interpolation inside &::after freezes on the last-rendered theme). */
  --divider-color: ${({ theme }) => theme.colors.grayLight};
  margin: 0 0 15px 0;
  padding: 0 0 15px 0;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;
  ${({ theme }) => styledH5(theme)};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--divider-color);
  }
`;

const StyledModalContent = styled.div<{ theme: Theme }>`
  max-height: calc(100svh - 200px);
  overflow-y: auto;
  /* overflow-y: auto clips on every edge, so a button at the edge of the scroll
     content would otherwise have its 4px focus/active box-shadow ring sliced off.
     The 5px padding holds the ring (and the scrollbar) inside the clip box on all
     four sides; the matching -5px margin reabsorbs that gutter into .modal-inner's
     20px so the content still sits at exactly 20px on every side. */
  padding: 5px;
  margin: -5px;
  /* var keeps the nested "& hr" rule theme-independent so the rule isn't
     re-injected per theme and frozen on the last one. */
  --divider-color: ${({ theme }) => theme.colors.grayLight};
  ${({ theme }) => styledText(theme)};

  & hr {
    margin: 20px 0;
    border: none;
    border-bottom: solid 1px var(--divider-color);
  }
`;

function Modal({
  children,
  $isOpen,
  $onClose,
  $title,
  $width,
  $hideCloseButton,
  className,
  style,
}: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const elmRef = useRef<HTMLSpanElement>(null);
  const isClient = useIsClient();

  // Stays true while the exit animation plays so the DOM isn't removed until
  // the animation completes. It flips to false only in the onAnimationEnd
  // handler (an event callback, not an effect), which satisfies React 19
  // lint rules.
  const [shouldRender, setShouldRender] = useState($isOpen);

  // When $isOpen goes false -> true, render immediately. This runs during
  // render (not in an effect) and only reads props/state, which is safe.
  if ($isOpen && !shouldRender) {
    setShouldRender(true);
  }

  const isClosing = !$isOpen && shouldRender;

  const closeModal = useCallback(() => {
    $onClose();
  }, [$onClose]);

  useEffect(() => {
    if (!$isOpen) return;

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [$isOpen, closeModal]);

  useOnClickOutside([elmRef, wrapperRef], $isOpen ? closeModal : () => {});

  const handleAnimationEnd = useCallback(
    (event: React.AnimationEvent<HTMLDivElement>) => {
      // Only the overlay's own fade marks the end of the exit; ignore the
      // bubbled animation events from .modal-inner.
      if (event.target !== event.currentTarget) return;
      if (!$isOpen) {
        setShouldRender(false);
      }
    },
    [$isOpen],
  );

  // Portals are client-only; render nothing on the server and during the first
  // client render so hydration matches, then portal once on the client. While
  // fully closed, render nothing at all so children unmount and reset their
  // state between openings.
  if (!isClient || !shouldRender) return null;

  // Render into document.body so the fixed-position overlay is lifted out of
  // any transformed/overflow-clipped ancestor and always sits on top.
  return createPortal(
    <StyledModal
      $isClosing={isClosing}
      $width={$width}
      className={className}
      style={style}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className="modal-inner"
        ref={wrapperRef}
        role="dialog"
        aria-modal="true"
        aria-label={$title}
      >
        {!$hideCloseButton && (
          <span ref={elmRef}>
            <StyledModalClose
              $size="small"
              onClick={closeModal}
              className="modal-close"
              aria-label="Close Modal"
            >
              <Icon name="X" />
            </StyledModalClose>
          </span>
        )}
        {$title && (
          <StyledModalTitle className="modal-title">{$title}</StyledModalTitle>
        )}
        <StyledModalContent className="modal-content">
          {children}
        </StyledModalContent>
      </div>
    </StyledModal>,
    document.body,
  );
}

export { Modal };
