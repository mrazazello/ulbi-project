import { CSSProperties, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./skeleton.module.scss";

interface IProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  round?: string;
}

export const Skeleton: FC<IProps> = (props) => {
  const { className, width, height, round } = props;

  const css: CSSProperties = {
    width: width,
    height: height,
    borderRadius: round,
  };

  return (
    <div
      style={css}
      className={classNames(cls.Skeleton, {}, [className])}
    ></div>
  );
};
