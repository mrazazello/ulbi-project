import { LangSwitcher } from "features/LangSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

import {
  BarChart,
  Heart,
  PlayBtn,
  ThreeDots,
  Wallet,
} from "react-bootstrap-icons";

import cls from "./navBar.module.scss";

type PropsType = {
  className?: string;
};

export const NavBar = ({ className }: PropsType) => {
  return (
    <nav className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.mainMenu}>
        <AppLink to="/">
          <PlayBtn width={24} height={24} />
          Start
        </AppLink>
        <AppLink to="/about">
          <Heart width={24} height={24} />
          About
        </AppLink>
        <AppLink to="/about">
          <BarChart width={24} height={24} />
          Progress
        </AppLink>
        <AppLink to="/about">
          <Wallet width={24} height={24} />
          Orders
        </AppLink>
        <AppLink to="/about">
          <ThreeDots width={24} height={24} />
          More
        </AppLink>
      </div>
      <LangSwitcher />
      <ThemeSwitcher />
    </nav>
  );
};
