"use client";
import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";

import { X } from "lucide-react";
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
  /** Joins the modal stack (default true): a Modal or `useModalLayer` cover
      opened over this one hides it until it closes again. Pass false to let
      this modal and the ones over it show at the same time. */
  $stack?: boolean;
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

// The modal stack: every open Modal (and every full-page cover registered
// with useModalLayer), in the order they opened. Only the top one shows. A
// modal under another keeps its backdrop while its card sinks out, then the
// new card rises in over that same backdrop; under a cover the whole modal
// fades away. Covered modals stay mounted, so a half-filled form survives,
// and come back when everything above them has closed. Module state, shared
// by every Modal in the app (one copy of the package, one stack).
type LayerKind = "modal" | "cover";

let layers: readonly { id: string; kind: LayerKind }[] = [];
const layerListeners = new Set<() => void>();

function subscribeLayers(listener: () => void) {
  layerListeners.add(listener);
  return () => {
    layerListeners.delete(listener);
  };
}

function setLayers(next: typeof layers) {
  layers = next;
  for (const listener of layerListeners) listener();
}

// Bit flags, so the store snapshot is a primitive and stays stable.
const COVERED = 1; // another layer sits above
const UNDER_COVER = 2; // a cover sits somewhere above
const STACKED = 4; // opened directly over a modal, sharing its backdrop

function layerFlags(id: string) {
  const index = layers.findIndex((layer) => layer.id === id);
  if (index === -1) return 0;
  let flags = 0;
  if (index < layers.length - 1) flags |= COVERED;
  if (layers.slice(index + 1).some((layer) => layer.kind === "cover")) {
    flags |= UNDER_COVER;
  }
  if (index > 0 && layers[index - 1].kind === "modal") flags |= STACKED;
  return flags;
}

// Before paint, so the layer underneath never shows next to the new one.
// useEffect on the server, where neither runs, to keep React quiet.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function useLayer(open: boolean, kind: LayerKind) {
  const id = useId();

  useIsomorphicLayoutEffect(() => {
    if (!open) return;
    setLayers([...layers, { id, kind }]);
    return () => setLayers(layers.filter((layer) => layer.id !== id));
  }, [open, id, kind]);

  return useSyncExternalStore(
    subscribeLayers,
    () => layerFlags(id),
    () => 0,
  );
}

/**
 * Puts a full-page layer that is not a Modal (an outage screen, a sign-in
 * wall) on the modal stack while `open`, so an open Modal fades away under
 * it and returns once it is gone. Returns whether another layer covers it.
 */
function useModalLayer(open: boolean): boolean {
  return (useLayer(open, "cover") & COVERED) !== 0;
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

// Stacking: the whole modal leaves under a cover; the card alone leaves under
// another modal and comes back (or a stacked card arrives) once the card it
// replaces is gone, hence the delay on cardIn.
const overlayHide = keyframes`
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
`;

const cardOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(40px); visibility: hidden; }
`;

const cardGone = keyframes`
  from { opacity: 0; visibility: hidden; }
  to { opacity: 0; visibility: hidden; }
`;

const cardIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

type ModalLayerState = "covered" | "under-cover" | "arriving";

const StyledModal = styled.div<{
  $isClosing: boolean;
  $layer?: ModalLayerState;
  $cardAway: boolean;
  $bare: boolean;
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
  /* Covered, stacked or back on top, the overlay keeps the same fade-in
     animation name, so it never restarts and the backdrop holds still. */
  animation: ${({ $isClosing, $layer }) =>
    $isClosing
      ? overlayFadeOut
      : $layer === "under-cover"
        ? overlayHide
        : overlayFadeIn}
    0.3s ease both;

  /* A stacked modal shares the backdrop of the one under it; if that one
     closes first, this one takes the backdrop over as the other fades. */
  transition: background-color 0.3s ease;

  ${({ $bare }) =>
    $bare &&
    css`
      background: transparent;
    `}

  ${({ $isClosing, $layer }) =>
    ($isClosing || $layer === "covered" || $layer === "under-cover") &&
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
    animation: ${({ $isClosing, $layer, $cardAway }) =>
      $isClosing
        ? css`
            ${$cardAway ? cardGone : innerSinkOut} 0.3s ease both
          `
        : $layer === "covered" || $layer === "under-cover"
          ? css`
              ${cardOut} 0.3s ease both
            `
          : $layer === "arriving"
            ? css`
                ${cardIn} 0.3s ease 0.3s both
              `
            : css`
                ${innerRiseIn} 0.3s ease both
              `};

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
  $stack = true,
}: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const elmRef = useRef<HTMLSpanElement>(null);
  const isClient = useIsClient();

  // Stays true while the exit animation plays so the DOM isn't removed until
  // the animation completes. It flips to false only in the onAnimationEnd
  // handler (an event callback, not an effect), which satisfies React 19
  // lint rules.
  const [shouldRender, setShouldRender] = useState($isOpen);

  // Once it has been covered or stacked, its card always arrives after the
  // one it replaces has left; `arrived` once that card is in place again.
  const [hasStacked, setHasStacked] = useState(false);
  const [arrived, setArrived] = useState(false);

  // When $isOpen goes false -> true, render immediately. This runs during
  // render (not in an effect) and only reads props/state, which is safe.
  if ($isOpen && !shouldRender) {
    setShouldRender(true);
    setHasStacked(false);
    setArrived(false);
  }

  // Where it sits on the stack. It leaves the stack as soon as it closes, so
  // the exit animation keeps the last place it had while open.
  const live = useLayer($isOpen && $stack, "modal");
  const [shown, setShown] = useState(live);
  if ($isOpen && live !== shown) setShown(live);
  const flags = $isOpen ? live : shown;
  const covered = (flags & COVERED) !== 0;
  const underCover = (flags & UNDER_COVER) !== 0;
  const stacked = (flags & STACKED) !== 0;

  if ($isOpen && (covered || stacked) && !hasStacked) setHasStacked(true);
  if ($isOpen && covered && arrived) setArrived(false);

  // Closed under a cover: nothing of it shows, so it goes at once.
  if (!$isOpen && shouldRender && underCover) setShouldRender(false);

  const layer: ModalLayerState | undefined = underCover
    ? "under-cover"
    : covered
      ? "covered"
      : hasStacked
        ? "arriving"
        : undefined;

  // Its card is out of sight (covered, or not back yet): closing then only
  // fades the backdrop.
  const cardAway = covered || (hasStacked && !arrived);

  const isClosing = !$isOpen && shouldRender;

  // Escape and clicks outside belong to the layer on top.
  const closeModal = useCallback(() => {
    if (!covered) $onClose();
  }, [$onClose, covered]);

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
      $layer={layer}
      $cardAway={cardAway}
      $bare={stacked}
      $width={$width}
      className={className}
      style={style}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className="modal-inner"
        ref={wrapperRef}
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget && layer === "arriving") {
            setArrived(true);
          }
        }}
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
              <Icon icon={X} />
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

export { Modal, useModalLayer };
