import { FC, HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./card.module.scss";

export enum CardThemeEnum {
  NORMAL = "normal",
  OUTLINE = "outline",
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardThemeEnum;
}

export const Card: FC<IProps> = (props) => {
  const {
    className,
    children,
    theme = CardThemeEnum.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
