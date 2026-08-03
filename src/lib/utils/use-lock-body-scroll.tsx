"use client";
import { useEffect } from "react";

// Module-level refcount so overlapping locks (a modal opened from inside an
// already-locked chat panel, say) compose: the body is only released once the
// last holder lets go. The pre-lock inline value is captured on the first lock
// and restored on the last, so a page that sets its own body overflow keeps it.
let lockCount = 0;
let previousOverflow = "";

/**
 * Freezes body scrolling while `isLocked` is true. Safe to nest: the body is
 * restored only when every active lock has been released.
 */
export function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    if (lockCount === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        document.body.style.overflow = previousOverflow;
      }
    };
  }, [isLocked]);
}
