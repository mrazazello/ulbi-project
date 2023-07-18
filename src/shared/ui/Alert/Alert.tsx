import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./alert.module.scss";

export enum AlertTypeEnum {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

interface IProps {
  className?: string;
  title?: string;
  message: string;
  type?: AlertTypeEnum;
}

export const Alert: FC<IProps> = (props) => {
  const { className, title, message, type = AlertTypeEnum.INFO } = props;

  return (
    <div className={classNames(cls.alert, {}, [className, cls[type]])}>
      {title && <div className={cls.title}>{title}</div>}
      <p>{message}</p>
    </div>
  );
};
