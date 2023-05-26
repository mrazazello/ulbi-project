import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";

export enum AppRoutesEnum {
  MAIN = "main",
  ABOUT = "about",
}

export const routePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: "/",
  [AppRoutesEnum.ABOUT]: "/about",
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
};
