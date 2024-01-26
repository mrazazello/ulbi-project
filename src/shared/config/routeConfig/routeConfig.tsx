import { RouteProps } from "react-router-dom";

import { ArticleDetailPage } from "pages/articleDetailPage";
import { ArticleEditPage } from "pages/articleEditPage";
import { ArticlesPage } from "pages/articlesPage";
import { FavoritesPage } from "pages/favoritesPage";
import { LoginPage } from "pages/login";
import { MainPage } from "pages/mainPage";
import { MorePage } from "pages/morePage";
import { NotFoundPage } from "pages/notFoundPage";
import { OrdersPage } from "pages/ordersPage";
import { ProfilePage } from "pages/profilePage";
import { ProgressPage } from "pages/progressPage";

export type AppRouteType = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutesEnum {
  MAIN = "main",
  FAVORITES = "favorites",
  PROGRESS = "progress",
  ORDERS = "orders",
  MORE = "more",

  NOT_FOUND = "not_found",
  LOGIN = "login",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAIL = "articles_detail",
  ARTICLE_CREATE = "articles_create",
  ARTICLE_EDIT = "articles_edit",
}

export const routePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: "/",
  [AppRoutesEnum.FAVORITES]: "/favorites",
  [AppRoutesEnum.PROGRESS]: "/progress",
  [AppRoutesEnum.ORDERS]: "/orders",
  [AppRoutesEnum.MORE]: "/more",
  [AppRoutesEnum.LOGIN]: "/login",
  [AppRoutesEnum.PROFILE]: "/profile/",
  [AppRoutesEnum.ARTICLES]: "/articles",
  [AppRoutesEnum.ARTICLE_DETAIL]: "/articles/",
  [AppRoutesEnum.ARTICLE_CREATE]: "/articles/create",
  [AppRoutesEnum.ARTICLE_EDIT]: "/articles/:id/edit",

  // all others
  [AppRoutesEnum.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutesEnum, AppRouteType> = {
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
    path: routePath.profile + ":id",
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLES]: {
    path: routePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_DETAIL]: {
    path: routePath.articles_detail + ":id",
    element: <ArticleDetailPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_CREATE]: {
    path: routePath.articles_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_EDIT]: {
    path: routePath.articles_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
