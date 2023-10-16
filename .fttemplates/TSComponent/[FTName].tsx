import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./<FTName | lowercase>.module.scss";

interface IProps {
  className?: string;
}

export const [FTName]: FC<IProps> = (props) => {
  const { className } = props;

  return <div className={classNames(cls.<FTName>, {}, [className])}></div>;
};
