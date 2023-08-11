import { CSSProperties, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./avatar.module.scss";

interface IProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export const Avatar: FC<IProps> = (props) => {
  const { src, alt, size = 100, className } = props;

  const styles: CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <img
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
      src={src}
      alt={alt}
    />
  );
};
