import { IStateSchema } from "app/providers/storeProvider";
import { ArticleViewEnum } from "entities/Article/model/types/article";

export const getArticlesPageIsLoading = (state: IStateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesPageError = (state: IStateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageView = (state: IStateSchema) =>
  state.articlesPage?.view || ArticleViewEnum.LIST;
