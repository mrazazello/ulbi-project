import { ThemeEnum, useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";

import DarkIcon from "../assets/dark-mode-toggle-icon.svg";
import LightIcon from "../assets/light-mode-toggle-icon.svg";

interface IProps {
  className?: string;
}

export const ThemeSwitcher = (props: IProps) => {
  const { theme, themeToggle } = useTheme();
  const { className } = props;

  return (
    <Button
      theme={ButtonThemeEnum.CLEAR}
      className={classNames("", {}, [className])}
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
