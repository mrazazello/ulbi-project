import { IStateSchema } from "app/providers/storeProvider";

export const getArticleCommentsIsLoading = (state: IStateSchema) =>
  state.articleDetailsComments?.isLoading;

export const getArticleCommentsError = (state: IStateSchema) =>
  state.articleDetailsComments?.error;
