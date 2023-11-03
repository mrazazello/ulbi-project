import { FC, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./select.module.scss";

export interface SelectOption {
  label: string;
  value: string;
}

interface IProps {
  placeholder?: string;
  className?: string;
  options: SelectOption[];
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<IProps> = (props: IProps) => {
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
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => {
    return options.map((item) => (
      <option key={item.value}>{item.value}</option>
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
