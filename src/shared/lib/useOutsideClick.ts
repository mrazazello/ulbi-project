import { RefObject, useEffect } from "react";

export function useOutsideClick(
  ref: RefObject<Node>,
  open: boolean,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event &&
        ref.current &&
        event.target instanceof Element &&
        open &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open, callback]);
}
