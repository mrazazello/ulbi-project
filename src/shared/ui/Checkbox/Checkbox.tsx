import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./checkbox.module.scss";

interface IProps {
  className?: string;
  placeholder: string;
  name: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: FC<IProps> = (props) => {
  const {
    className,
    name,
    value,
    placeholder,
    checked = false,
    onChange,
  } = props;

  const [isChecked, setChecked] = useState(checked);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!isChecked);
    onChange?.(e.target.checked);
  };

  return (
    <div className={classNames(cls.checkbox, {}, [className])}>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChangeHandler}
        />
        <div className={cls.icon} />
        {placeholder}
      </label>
    </div>
  );
};
