import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./loginForm.module.scss";

interface IProps {
  className?: string;
}

export const LoginForm: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autofocus={true}
        placeholder={t("username")}
        name="username"
        className={cls.input}
      />
      <Input
        placeholder={t("password")}
        name="password"
        className={cls.input}
      />
      <Button theme={ButtonThemeEnum.PRIMARY}>{t("log in")}</Button>
    </div>
  );
};
