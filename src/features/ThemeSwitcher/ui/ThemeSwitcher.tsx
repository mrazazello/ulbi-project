import { ThemeEnum, useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames";
import { Button, ThemeButtonEnum } from "shared/ui/Button/Button";

import DarkIcon from "../assets/dark-mode-toggle-icon.svg";
import LightIcon from "../assets/light-mode-toggle-icon.svg";

import cls from "./themeSwitcher.module.scss";

interface IProps {
  className?: string;
}

export const ThemeSwitcher = (props: IProps) => {
  const { theme, themeToggle } = useTheme();
  const { className } = props;

  return (
    <Button
      theme={ThemeButtonEnum.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={themeToggle}
    >
      {theme === ThemeEnum.LIGNT ? (
        <DarkIcon height={30} />
      ) : (
        <LightIcon height={30} />
      )}
    </Button>
  );
};
