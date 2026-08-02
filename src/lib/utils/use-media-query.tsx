"use client";
import { useCallback, useSyncExternalStore } from "react";
import { Breakpoints, breakpoints } from "./theme";

/**
 * Subscribes to a media query. Returns `false` on the server and during the
 * first client render so hydration matches, then re-renders with the real
 * match. Pass a full media query string, e.g. "(max-width: 991px)".
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/**
 * True while the viewport is narrower than the named breakpoint, i.e. the
 * inverse of the `mq()` helper's min-width query. Handy for behavior (not
 * styling) that has to change below a breakpoint, such as a side panel turning
 * into a full-screen modal.
 */
export function useBelowBreakpoint(size: keyof Breakpoints) {
  return useMediaQuery(`(max-width: ${breakpoints[size] - 1}px)`);
}
