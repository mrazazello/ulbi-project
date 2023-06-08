import { FC } from "react";
import cls from "./preloader.module.scss";

interface IProps {
  text?: string;
}

export const Preloader: FC<IProps> = (props) => {
  const { text } = props;

  return (
    <div className={cls.loaderContainer}>
      <div className={cls.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
      {text && <div>{text}</div>}
    </div>
  );
};
