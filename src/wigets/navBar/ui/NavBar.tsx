import { ThemeSwitcher } from "features/ThemeSwitcher";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./navBar.module.scss";

type PropsType = {
  className?: string;
};

export const NavBar = ({ className }: PropsType) => {
  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <ThemeSwitcher className="suka" />
      <div className={cls.links}>
        <AppLink to="/">Main page</AppLink>
        <AppLink to="/about">About page</AppLink>
      </div>
    </div>
  );
};
