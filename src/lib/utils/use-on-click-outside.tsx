"use client";
import { RefObject, useEffect, useRef } from "react";

export function useOnClickOutside(
  refs: RefObject<HTMLElement | null>[],
  cb: () => void,
) {
  // Callers typically pass inline arrays and callbacks, so keep the latest
  // values in a ref and subscribe to the document only once per mount.
  const latest = useRef({ refs, cb });

  useEffect(() => {
    latest.current = { refs, cb };
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const { refs, cb } = latest.current;
      // Unattached refs are ignored: a click counts as outside unless it
      // lands inside a currently mounted ref target.
      if (
        refs.every(
          (ref) => !ref.current || !ref.current.contains(event.target as Node),
        )
      ) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}
