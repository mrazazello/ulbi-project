import { FC, InputHTMLAttributes, memo, useEffect, useRef } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./input.module.scss";

export enum InputSizeEnum {
  SMALL = "small",
  REGULAR = "regular",
  BIG = "big",
}
type HTMLInputPropsType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "readOnly"
>;
interface IProps extends HTMLInputPropsType {
  autofocus?: boolean;
  placeholder?: string;
  className?: string;
  name: string;
  theme?: InputSizeEnum;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const InputComponent: FC<IProps> = (props: IProps) => {
  const {
    autofocus = false,
    placeholder,
    className,
    name,
    theme = InputSizeEnum.REGULAR,
    value,
    onChange,
    readonly = false,
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
        className={classNames(cls.input, { [cls.readonly]: readonly }, [
          className,
          cls[theme],
        ])}
        name={name}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
        ref={inputRef}
      />
    </div>
  );
};

InputComponent.displayName = "Input";

export const Input = memo(InputComponent);
export const InputWithoutMemo = InputComponent;
