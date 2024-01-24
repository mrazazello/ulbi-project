import { IStateSchema } from "app/providers/storeProvider";

export const getArticleCommentsIsLoading = (state: IStateSchema) =>
  state.articleDetailPage?.comments?.isLoading;

export const getArticleCommentsError = (state: IStateSchema) =>
  state.articleDetailPage?.comments?.error;
