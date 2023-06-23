import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/aboutPage";
import { LoginPage } from "pages/login";
import { MainPage } from "pages/mainPage";
import { NotFoundPage } from "pages/notFoundPage";

export enum AppRoutesEnum {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
  LOGIN = "login",
}

export const routePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: "/",
  [AppRoutesEnum.ABOUT]: "/about",
  [AppRoutesEnum.LOGIN]: "/login",
  [AppRoutesEnum.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
  [AppRoutesEnum.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppRoutesEnum.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
  [AppRoutesEnum.LOGIN]: {
    path: routePath.login,
    element: <LoginPage />,
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
