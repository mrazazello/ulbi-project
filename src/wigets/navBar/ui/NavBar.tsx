import { memo, useCallback, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "wigets/LangSwitcher";
import { ThemeSwitcher } from "wigets/ThemeSwitcher";

import { getUserAuthData, userActions } from "entities/user";
import { LoginModal } from "features/AuthByUsername";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { navBarItems } from "../model/NavBarItems";
import { NavBarItem } from "./NavBarItem";
import cls from "./navBar.module.scss";

type PropsType = {
  className?: string;
};

const NavBarComponent = ({ className }: PropsType) => {
  const [isAuthorize, setAuthorise] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const toggleAuthorize = useCallback(() => {
    setAuthorise((prev) => !prev);
  }, []);

  const toggleLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      <nav className={cls.mainMenu}>
        {navBarItems.map((item) => (
          <NavBarItem key={item.url} item={item} />
        ))}
      </nav>
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
      {isAuthorize && (
        <LoginModal isOpen={isAuthorize} onClose={() => setAuthorise(false)} />
      )}
    </header>
  );
};

// NavBar.displayName = "NavBar";
export const NavBar = memo(NavBarComponent);
export const NavBarWithoutMemo = NavBarComponent;
