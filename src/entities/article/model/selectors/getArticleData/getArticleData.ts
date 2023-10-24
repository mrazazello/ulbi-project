import { IStateSchema } from "app/providers/storeProvider";

export const getArticleData = (state: IStateSchema) =>
  state.articleDetail?.data;
