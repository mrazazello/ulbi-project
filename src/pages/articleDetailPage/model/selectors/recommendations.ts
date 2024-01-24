import { IStateSchema } from "app/providers/storeProvider";

export const getArticleRecommendationsIsLoading = (state: IStateSchema) =>
  state.articleDetailPage?.recommendations?.isLoading;

export const getArticleRecommendationsError = (state: IStateSchema) =>
  state.articleDetailPage?.recommendations?.error;
