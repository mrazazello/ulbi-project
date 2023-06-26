import { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeEnum,
} from "../lib/ThemeContext";

interface Props {
  initialTheme?: ThemeEnum;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) ||
  ThemeEnum.LIGHT;

const ContextProvider: FC<Props> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<ThemeEnum>(initialTheme || defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
