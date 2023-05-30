import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
}

export enum ThemeButtonEnum {
  CLEAR = "clear",
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeButtonEnum.CLEAR,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
