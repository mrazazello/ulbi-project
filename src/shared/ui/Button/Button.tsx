import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./button.module.scss";

export enum ButtonThemeEnum {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSizeEnum {
  SMALL = "small",
  REGULAR = "regular",
  BIG = "big",
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeEnum;
  size?: ButtonSizeEnum;
  square?: boolean;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonThemeEnum.CLEAR,
    size = ButtonSizeEnum.REGULAR,
    square = false,
    disabled = false,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(
        cls.button,
        { [cls.square]: square, [cls.disabled]: disabled },
        [className, cls[theme], cls[size]]
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
