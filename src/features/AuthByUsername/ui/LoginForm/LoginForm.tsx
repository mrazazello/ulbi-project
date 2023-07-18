import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";
import { Preloader } from "shared/ui/Preloader/Preloader";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginUserByName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./loginForm.module.scss";

interface IProps {
  className?: string;
}

export const LoginForm: FC<IProps> = (props: IProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const handleUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const handleUserPassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserPassword(value));
    },
    [dispatch]
  );

  const hanleSubmit = useCallback(() => {
    dispatch(loginUserByName({ username, password }));
  }, [dispatch, username, password]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      {error && <Alert type={AlertTypeEnum.ERROR} message={t(error)} />}
      <Input
        autofocus={true}
        placeholder={t("username")}
        name="username"
        className={cls.input}
        onChange={handleUserName}
        value={username}
      />
      <Input
        placeholder={t("password")}
        name="password"
        className={cls.input}
        onChange={handleUserPassword}
        value={password}
      />
      <Button
        theme={ButtonThemeEnum.PRIMARY}
        disabled={isLoading}
        onClick={hanleSubmit}
      >
        {t("log in")}
      </Button>
    </div>
  );
};

// LoginForm.displayName = "LoginForm";
