import React from "react";

export const STORAGE_THEME_KEY = "theme";

export enum Theme {
  LIGNT = "light",
  DARK = "dark",
}

interface themeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_KEY = "theme";
export const ThemeContext = React.createContext<themeContextProps>({});
