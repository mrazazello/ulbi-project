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
        // console.log("you clicked outside");
        callback();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      // console.log("removing event listener");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open]);
}
