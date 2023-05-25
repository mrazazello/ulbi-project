import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum Theme {
  LIGNT = "light",
  DARK = "dark",
}

interface themeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<themeContextProps>({});
