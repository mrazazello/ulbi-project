import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";

import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";

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
import { Input } from "shared/ui/Input/Input";
import cls from "./loginForm.module.scss";

export interface ILoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerListType = {
  loginForm: loginReducer,
};

const LoginFormComponent: FC<ILoginFormProps> = (props) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // const [test, settest] = useState(0);

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
    const res = await dispatch(loginUserByName({ username, password }));
    if (res.meta.requestStatus === "fulfilled" && onSuccess) {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, {}, [className])}>
        {error && <Alert type={AlertTypeEnum.ERROR} message={t(error)} />}
        {/* <button onClick={() => settest(test + 1)}>{test}</button> */}
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
    </DynamicModuleLoader>
  );
};
// LoginForm.displayName = "LoginForm";

export default memo(LoginFormComponent);
export const LoginFormWithoutMemo = LoginFormComponent;
