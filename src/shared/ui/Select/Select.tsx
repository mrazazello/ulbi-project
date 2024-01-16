import { useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./select.module.scss";

export interface SelectOption<T extends string> {
  label: string;
  value: T;
}

interface IProps<T extends string> {
  placeholder?: string;
  className?: string;
  options: SelectOption<T>[];
  name?: string;
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: IProps<T>) => {
  const {
    placeholder,
    className,
    options,
    name,
    value,
    onChange,
    readonly = false,
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => {
    return options.map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ));
  }, [options]);

  return (
    <div className={cls.selectWrapper}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <select
        className={classNames(cls.select, { [cls.readonly]: readonly }, [
          className,
        ])}
        name={name}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
};

Select.displayName = "Select";
