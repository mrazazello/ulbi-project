import { useCallback, useState } from "react";

import { LangSwitcher } from "wigets/LangSwitcher";
import { ThemeSwitcher } from "wigets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button/Button";

import {
  BarChart,
  Heart,
  PlayBtn,
  ThreeDots,
  Wallet,
} from "react-bootstrap-icons";

import { getUserAuthData, userActions } from "entities/user";
import { LoginModal } from "features/AuthByUsername";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { ButtonThemeEnum } from "shared/ui/Button/Button";
import cls from "./navBar.module.scss";

type PropsType = {
  className?: string;
};

export const NavBar = ({ className }: PropsType) => {
  const [isAuthorize, setAuthorise] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const toggleAuthorize = useCallback(() => {
    setAuthorise((prev) => !prev);
  }, []);

  const toggleLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <nav className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.mainMenu}>
        <AppLink to={routePath.main}>
          <PlayBtn width={24} height={24} />
          Start
        </AppLink>
        <AppLink to={routePath.about}>
          <Heart width={24} height={24} />
          About
        </AppLink>
        <AppLink to={routePath.login}>
          <BarChart width={24} height={24} />
          Login
        </AppLink>
        <AppLink to={routePath.about}>
          <Wallet width={24} height={24} />
          Orders
        </AppLink>
        <AppLink to={routePath.about}>
          <ThreeDots width={24} height={24} />
          More
        </AppLink>
      </div>
      <LangSwitcher />
      <ThemeSwitcher />
      {authData?.username ? (
        <Button theme={ButtonThemeEnum.SECONDARY} onClick={toggleLogout}>
          {t("log out")}
        </Button>
      ) : (
        <Button theme={ButtonThemeEnum.SECONDARY} onClick={toggleAuthorize}>
          {t("log in")}
        </Button>
      )}
      <LoginModal isOpen={isAuthorize} onClose={() => setAuthorise(false)} />
    </nav>
  );
};
