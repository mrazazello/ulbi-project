import { FC, useState } from "react";
import { STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(STORAGE_THEME_KEY) as Theme) || Theme.LIGNT;

const ContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

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
