import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import {
  AppRouteType,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { Preloader } from "shared/ui/Preloader/Preloader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
  const renderWithWraper = (route: AppRouteType) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>{route.element}</RequireAuth>
          ) : (
            route.element
          )
        }
      />
    );
  };

  return (
    <div className="pageWrapper">
      <Suspense fallback={<Preloader text="Loading content" />}>
        <Routes>{Object.values(routeConfig).map(renderWithWraper)}</Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
