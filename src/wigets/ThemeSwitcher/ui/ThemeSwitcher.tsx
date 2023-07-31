import { Moon, Sun } from "react-bootstrap-icons";

import { ThemeEnum, useTheme } from "app/providers/themeProvider";
import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";

interface IProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: IProps) => {
  const { theme, themeToggle } = useTheme();
  const { className } = props;

  return (
    <Button
      theme={ButtonThemeEnum.CLEAR}
      className={classNames("", {}, [className])}
      onClick={themeToggle}
      square
    >
      {theme === ThemeEnum.LIGHT ? <Sun /> : <Moon />}
    </Button>
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";
