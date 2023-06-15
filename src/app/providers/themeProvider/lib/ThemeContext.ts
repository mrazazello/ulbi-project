import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

interface IThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
