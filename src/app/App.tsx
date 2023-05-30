import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames";
import { NavBar } from "wigets/navBar";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <NavBar />
        <AppRouter />
      </div>
    </>
  );
};

export default App;
