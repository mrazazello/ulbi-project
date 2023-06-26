import { useCallback, useState } from "react";

import { LangSwitcher } from "features/LangSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
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

import { t } from "i18next";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { ButtonThemeEnum } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./navBar.module.scss";

type PropsType = {
  className?: string;
};

export const NavBar = ({ className }: PropsType) => {
  const [isAuthorize, setAuthorise] = useState(false);

  const toggleAuthorize = useCallback(() => {
    setAuthorise((prev) => !prev);
  }, []);

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
      <Button theme={ButtonThemeEnum.SECONDARY} onClick={toggleAuthorize}>
        {t("Enter")}
      </Button>
      <Modal isOpen={isAuthorize} onClose={toggleAuthorize}>
        Авторизация!!
      </Modal>
    </nav>
  );
};
