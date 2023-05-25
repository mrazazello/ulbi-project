import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  theme: Theme;
  themeToggle: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    const newTheme = theme === Theme.LIGNT ? Theme.DARK : Theme.LIGNT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    themeToggle,
  };
};
