import { IStateSchema } from "app/providers/storeProvider";

export const getArticleError = (state: IStateSchema) =>
  state.articleDetail?.error;
