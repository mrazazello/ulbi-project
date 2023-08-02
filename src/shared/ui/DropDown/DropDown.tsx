import { autoUpdate, flip, shift, useFloating } from "@floating-ui/react-dom";
import { ReactNode, useRef, useState } from "react";
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
  children: ReactNode;
}

export const DropDown = (props: IProps) => {
  const { className, menuItems, children } = props;
  const [isOpen, setOpen] = useState(false);
  const dropDonwRef = useRef<HTMLDivElement>(null);
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
          {menuItems.length > 0 && (
            <ul>
              {menuItems.map((item) => (
                <li key={item.key}>{item.label}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
