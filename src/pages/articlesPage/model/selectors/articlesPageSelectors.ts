import { IStateSchema } from "app/providers/storeProvider";
import { ArticleSortFieldEnum, ArticleViewEnum } from "entities/Article";

export const getArticlesPageIsLoading = (state: IStateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesPageError = (state: IStateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageNum = (state: IStateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesPageLimit = (state: IStateSchema) =>
  state.articlesPage?.limit || 9;

export const getArticlesPageHasMore = (state: IStateSchema) =>
  state.articlesPage?.hasMore;

export const getArticlesPageInited = (state: IStateSchema) =>
  state.articlesPage?._inited;

export const getArticlesPageView = (state: IStateSchema) =>
  state.articlesPage?.view || ArticleViewEnum.LIST;

export const getArticlesPageOrder = (state: IStateSchema) =>
  state.articlesPage?.order ?? "asc";

export const getArticlesPageSort = (state: IStateSchema) =>
  state.articlesPage?.sort ?? ArticleSortFieldEnum.CREATED;

export const getArticlesPageSearch = (state: IStateSchema) =>
  state.articlesPage?.search ?? "";
