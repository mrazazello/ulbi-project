import { FC, InputHTMLAttributes, memo, useEffect, useRef } from "react";

import { classNames } from "shared/lib/classNames";
import cls from "./input.module.scss";

export enum InputSizeEnum {
  SMALL = "small",
  REGULAR = "regular",
  BIG = "big",
}
type HTMLInputPropsType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
>;
interface IProps extends HTMLInputPropsType {
  autofocus?: boolean;
  placeholder?: string;
  className?: string;
  name: string;
  theme?: InputSizeEnum;
  value?: string;
  onChange?: (value: string) => void;
}

const InputComponent: FC<IProps> = (props) => {
  const {
    autofocus = false,
    placeholder,
    className,
    name,
    theme = InputSizeEnum.REGULAR,
    value,
    onChange,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={cls.inputWrapper}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        className={classNames(cls.input, {}, [className, cls[theme]])}
        name={name}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        ref={inputRef}
      />
    </div>
  );
};

export const Input = memo(InputComponent);
export const InputWithoutMemo = InputComponent;
