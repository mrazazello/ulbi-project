import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./text.module.scss";

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

interface IProps {
  className?: string;
  text: string;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: IProps) => {
  const { className, text, align = TextAlign.LEFT, size = TextSize.M } = props;

  const mods = {
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return <p className={classNames(cls.text, mods, [className])}>{text}</p>;
});

Text.displayName = "Text";
