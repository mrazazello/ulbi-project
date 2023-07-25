import { IStateSchema } from "app/providers/storeProvider";

export const getLoginPassword = (state: IStateSchema) =>
  state?.loginForm?.password || "";
