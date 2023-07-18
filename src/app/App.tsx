import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/themeProvider";
import { Suspense, useEffect } from "react";
import { classNames } from "shared/lib/classNames";
import { NavBar } from "wigets/navBar";
import { SideBar } from "wigets/sideBar";

import { userActions } from "entities/user";
import { useDispatch } from "react-redux";
import { Preloader } from "shared/ui/Preloader/Preloader";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
