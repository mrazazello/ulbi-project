import { FC, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeEnum,
} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) ||
  ThemeEnum.LIGHT;

const ContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

  const defaultValue = {
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
