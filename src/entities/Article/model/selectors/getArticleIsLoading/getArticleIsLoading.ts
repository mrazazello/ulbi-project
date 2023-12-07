import { IStateSchema } from "app/providers/storeProvider";

export const getArticleIsLoading = (state: IStateSchema) =>
  state.articleDetail?.isLoading;
