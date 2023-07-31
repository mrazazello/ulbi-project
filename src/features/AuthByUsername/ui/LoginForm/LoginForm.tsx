import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";
import { Preloader } from "shared/ui/Preloader/Preloader";

import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginUserByName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/useAppDispatch";
import cls from "./loginForm.module.scss";

export interface ILoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducerListType = {
  loginForm: loginReducer,
};

const LoginFormComponent: FC<ILoginFormProps> = (props: ILoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const handleSubmit = useCallback(async () => {
    const res = await dispatch(
      loginUserByName({ username, password })
    ).unwrap();
    if (res.username && onSuccess) {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {isLoading ? (
        <Preloader />
      ) : (
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
            onClick={handleSubmit}
          >
            {t("log in")}
          </Button>
        </div>
      )}
    </DynamicModuleLoader>
  );
};
// LoginForm.displayName = "LoginForm";

export default memo(LoginFormComponent);
export const LoginFormWithoutMemo = LoginFormComponent;
