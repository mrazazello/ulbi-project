import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./formField.module.scss";

interface IProps {
  className?: string;
  title: string;
  required?: boolean;
  error?: string;
}

export const FormField: FC<IProps> = (props) => {
  const { className, children, title, required = false, error } = props;
  return (
    <div className={classNames(cls.formField, {}, [className])}>
      <div className={cls.fieldTitle}>
        {title}
        {required && "*"}:
      </div>
      {children}
      <div className={cls.error}>{error}</div>
    </div>
  );
};
