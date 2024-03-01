import { Listbox } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./listBox.module.scss";

type DropdownDirection = "down" | "up";

export interface ListBoxOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

interface IProps {
  placeholder?: string;
  className?: string;
  options: ListBoxOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export const ListBox = (props: IProps) => {
  const {
    placeholder,
    className,
    options,
    value,
    onChange,
    readonly = false,
    direction = "down",
  } = props;

  const optionsMods: Record<DropdownDirection, string> = {
    down: cls.optionsDown,
    up: cls.optionsUp,
  };

  return (
    <Listbox
      as="div"
      className={classNames(cls.listbox, { [cls.readonly]: readonly }, [
        className,
      ])}
      value={value}
      onChange={onChange}
    >
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <Listbox.Button>{value}</Listbox.Button>
      <Listbox.Options
        className={classNames(cls.options, {}, [optionsMods[direction]])}
      >
        {options.map((item) => (
          <Listbox.Option
            key={item.value}
            value={item.value}
            disabled={readonly}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li
                className={classNames("", {
                  [cls.itemActive]: active,
                  [cls.itemSelected]: selected,
                })}
              >
                {item.label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

ListBox.displayName = "ListBox";
