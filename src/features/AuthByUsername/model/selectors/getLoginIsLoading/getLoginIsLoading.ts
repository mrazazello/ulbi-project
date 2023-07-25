import { IStateSchema } from "app/providers/storeProvider";

export const getLoginIsLoading = (state: IStateSchema) =>
  state?.loginForm?.isLoading || false;
