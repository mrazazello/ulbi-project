import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./code.module.scss";
import { Button, ButtonThemeEnum } from "../Button/Button";

interface IProps {
  className?: string;
  code: string;
}

export const Code: FC<IProps> = (props) => {
  const { className, code } = props;

  const onCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        theme={ButtonThemeEnum.SECONDARY}
        className={cls.btn}
        onClick={onCopy}
      >
        Copy
      </Button>
      <code>{code}</code>
    </pre>
  );
};
