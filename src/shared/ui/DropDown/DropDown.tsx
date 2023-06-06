import { autoUpdate, flip, shift, useFloating } from "@floating-ui/react-dom";
import { FC, ReactNode, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { useOutsideClick } from "shared/lib/useOutsideClick";

import cls from "./dropDown.module.scss";

export interface IDropDownMenuItem {
  key: string;
  label: ReactNode;
}

interface IProps {
  className?: string;
  menuItems: IDropDownMenuItem[];
}

export const DropDown: FC<IProps> = (props) => {
  const { className, menuItems, children } = props;
  const [isOpen, setOpen] = useState(false);
  const dropDonwRef = useRef<HTMLDivElement>();
  const { refs, floatingStyles } = useFloating<HTMLButtonElement>({
    placement: "bottom-start",
    middleware: [flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const loseFocus = () => {
    setOpen(false);
  };

  useOutsideClick(dropDonwRef, isOpen, loseFocus);

  return (
    <div
      className={classNames(cls.dropDown, {}, [className])}
      onClick={toggle}
      ref={dropDonwRef}
    >
      <span ref={refs.setReference}>{children}</span>
      {isOpen && (
        <div
          className={classNames(
            cls.dropDownContent,
            { [cls.open]: isOpen },
            []
          )}
          ref={refs.setFloating}
          style={floatingStyles}
        >
          {menuItems.map((item) => item.label)}
        </div>
      )}
    </div>
  );
};
