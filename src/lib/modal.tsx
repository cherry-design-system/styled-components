"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { Icon } from "./icon";
import { IconButton } from "./icon-button";
import { Theme, mq, styledH5, styledText, useOnClickOutside } from "./utils";

export interface ModalProps {
  children: React.ReactNode;
  $isOpen: boolean;
  $onClose: () => void;
  $title?: string;
  $width?: number;
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

const StyledModal = styled.div<{
  $isOpen: boolean;
  $width?: number;
  theme: Theme;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => rgba(theme.colors.primary, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1010;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  & .modal-inner {
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.spacing.radius.lg};
    padding: 20px;
    max-width: calc(100% - 40px);
    width: 100%;
    margin: auto;
    position: relative;
    transform: translateY(40px);
    transition: all 0.3s ease;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: translateY(0);
      `}

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

function Modal({ children, $isOpen, $onClose, $title, $width }: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const elmRef = useRef<HTMLSpanElement>(null);
  const isClient = useIsClient();

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

  // Portals are client-only; render nothing on the server and during the first
  // client render so hydration matches, then portal once on the client.
  if (!isClient) return null;

  // Render into document.body so the fixed-position overlay is lifted out of
  // any transformed/overflow-clipped ancestor and always sits on top.
  return createPortal(
    <StyledModal $isOpen={$isOpen} $width={$width}>
      <div className="modal-inner" ref={wrapperRef}>
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
        {$title && <StyledModalTitle>{$title}</StyledModalTitle>}
        <StyledModalContent>{children}</StyledModalContent>
      </div>
    </StyledModal>,
    document.body,
  );
}

export { Modal };
