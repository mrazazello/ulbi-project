import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeEnum,
} from "./ThemeContext";

interface UseThemeResult {
  theme: ThemeEnum;
  themeToggle: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    // const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    let newTheme;

    switch (theme) {
      case ThemeEnum.LIGHT:
        newTheme = ThemeEnum.DARK;
        break;
      case ThemeEnum.DARK:
        newTheme = ThemeEnum.ORANGE;
        break;
      case ThemeEnum.ORANGE:
        newTheme = ThemeEnum.LIGHT;
        break;
      default:
        newTheme = ThemeEnum.LIGHT;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || ThemeEnum.LIGHT,
    themeToggle,
  };
};
