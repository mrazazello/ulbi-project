import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum ThemeEnum {
  LIGNT = "light",
  DARK = "dark",
}

interface themeContextProps {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<themeContextProps>({});
