import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./appLink.module.scss";

interface IPropsType extends LinkProps {
  className?: string;
}

export const AppLink: FC<IPropsType> = (props) => {
  const { to, children, className, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
