import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./checkbox.module.scss";

interface IProps {
  className?: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Checkbox: FC<IProps> = (props) => {
  const { className, name, value, placeholder, onChange } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.checkbox, {}, [className])}>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={onChangeHandler}
        />
        <div className={cls.icon} />
        {placeholder}
      </label>
    </div>
  );
};
