import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Preloader } from "shared/ui/Preloader/Preloader";

const AppRouter = () => {
  return (
    <Suspense fallback={<Preloader text="Loading content" />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="pageWrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
