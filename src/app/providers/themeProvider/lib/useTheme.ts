import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeEnum,
  ThemeContext,
} from "./ThemeContext";

interface UseThemeResult {
  theme: ThemeEnum;
  themeToggle: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    const newTheme =
      theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    themeToggle,
  };
};
