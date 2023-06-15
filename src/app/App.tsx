import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/themeProvider";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames";
import { NavBar } from "wigets/navBar";
import { SideBar } from "wigets/sideBar";

import { Preloader } from "shared/ui/Preloader/Preloader";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, ["appLayout", theme])}>
      <Suspense fallback={<Preloader text="Loading lang" />}>
        <NavBar className="navBarOrder" />
        <div className="mainLayout">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
