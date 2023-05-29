import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames";
import { NavBar } from "wigets/navBar";

import "./styles/index.scss";

const App = () => {
  const { theme, themeToggle } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <NavBar />
        <div>
          <button onClick={themeToggle}>change theme</button>
        </div>
        <AppRouter />
      </div>
    </>
  );
};

export default App;
