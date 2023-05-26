import { Link } from "react-router-dom";

import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme, themeToggle } = useTheme();

  return (
    <>
      <AppRouter />
      <div className={classNames("app", {}, [theme])}>
        <div>
          <Link to="/">Main page</Link>
          <Link to="/about">About page</Link>
        </div>
        <div>
          <button onClick={themeToggle}>change theme</button>
        </div>
      </div>
    </>
  );
};

export default App;
