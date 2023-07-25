import { IStateSchema } from "app/providers/storeProvider";

export const getLoginUsername = (state: IStateSchema) =>
  state?.loginForm?.username || "";
