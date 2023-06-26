import { useTheme } from "app/providers/themeProvider";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { Portal } from "shared/ui/Portal/Portal";
import cls from "./modal.module.scss";

interface IProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

export const Modal: FC<IProps> = (props) => {
  const { className, children, isOpen, onClose, selector } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  console.log("theme: ", theme);

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  }, [onClose]);

  const preventClose = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const escapeKeyListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", escapeKeyListener);
    } else {
      window.removeEventListener("keydown", escapeKeyListener);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [escapeKeyListener, isOpen]);

  return (
    <Portal selector={selector}>
      <div
        className={classNames(
          cls.modal,
          {
            [cls.opened]: isOpen,
            [cls.closing]: isClosing,
          },
          [className, theme]
        )}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={preventClose}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
