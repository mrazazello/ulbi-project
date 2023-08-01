import { RouteProps } from "react-router-dom";

import { FavoritesPage } from "pages/favoritesPage";
import { LoginPage } from "pages/login";
import { MainPage } from "pages/mainPage";
import { MorePage } from "pages/morePage";
import { NotFoundPage } from "pages/notFoundPage";
import { OrdersPage } from "pages/ordersPage";
import { ProfilePage } from "pages/profilePage";
import { ProgressPage } from "pages/progressPage";

export enum AppRoutesEnum {
  MAIN = "main",
  FAVORITES = "favorites",
  PROGRESS = "progress",
  ORDERS = "orders",
  MORE = "more",

  NOT_FOUND = "not_found",
  LOGIN = "login",
  PROFILE = "profile",
}

export const routePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: "/",
  [AppRoutesEnum.FAVORITES]: "/favorites",
  [AppRoutesEnum.PROGRESS]: "/progress",
  [AppRoutesEnum.ORDERS]: "/orders",
  [AppRoutesEnum.MORE]: "/more",
  [AppRoutesEnum.LOGIN]: "/login",
  [AppRoutesEnum.PROFILE]: "/profile",

  // all others
  [AppRoutesEnum.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
  [AppRoutesEnum.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppRoutesEnum.FAVORITES]: {
    path: routePath.favorites,
    element: <FavoritesPage />,
  },
  [AppRoutesEnum.PROGRESS]: {
    path: routePath.progress,
    element: <ProgressPage />,
  },
  [AppRoutesEnum.ORDERS]: {
    path: routePath.orders,
    element: <OrdersPage />,
  },
  [AppRoutesEnum.MORE]: {
    path: routePath.more,
    element: <MorePage />,
  },

  [AppRoutesEnum.LOGIN]: {
    path: routePath.login,
    element: <LoginPage />,
  },
  [AppRoutesEnum.PROFILE]: {
    path: routePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
