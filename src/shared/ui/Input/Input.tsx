import { FC } from "react";

import { classNames } from "shared/lib/classNames";
import cls from "./input.module.scss";

export enum InputSizeEnum {
  SMALL = "small",
  REGULAR = "regular",
  BIG = "big",
}

interface IProps {
  className?: string;
  name: string;
  size?: InputSizeEnum;
}

export const Input: FC<IProps> = (props) => {
  const { className, name, size = InputSizeEnum.REGULAR } = props;
  return (
    <input
      className={classNames(cls.input, {}, [className, cls[size]])}
      name={name}
    />
  );
};
