import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeEnum;
  size?: ButtonSizeEnum;
}

export enum ButtonThemeEnum {
  CLEAR = "clear",
  TRANSPARENT = "transparent",
  NORMAL = "normal",
}

export enum ButtonSizeEnum {
  SMALL = "small",
  REGULAR = "regular",
  BIG = "big",
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonThemeEnum.CLEAR,
    size = ButtonSizeEnum.REGULAR,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
