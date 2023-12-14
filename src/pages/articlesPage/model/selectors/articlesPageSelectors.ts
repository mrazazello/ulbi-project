import { IStateSchema } from "app/providers/storeProvider";
import { ArticleViewEnum } from "entities/Article/model/types/article";

export const getArticlesPageIsLoading = (state: IStateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesPageError = (state: IStateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageView = (state: IStateSchema) =>
  state.articlesPage?.view || ArticleViewEnum.LIST;

export const getArticlesPageNum = (state: IStateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesPageLimit = (state: IStateSchema) =>
  state.articlesPage?.limit || 9;

export const getArticlesPageHasMore = (state: IStateSchema) =>
  state.articlesPage?.hasMore;
