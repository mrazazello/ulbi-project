import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/themeProvider";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames";
import { NavBar } from "wigets/navBar";
import { SideBar } from "wigets/sideBar";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <Suspense fallback="loading lang">
          <NavBar />
          <div className="mainLayout">
            <SideBar />
            <AppRouter />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default App;
