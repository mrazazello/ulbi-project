import { useCallback, useRef } from "react";

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const timerRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: any[]) => {
      // console.log("args: ", ...args);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
