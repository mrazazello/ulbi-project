import { IStateSchema } from "app/providers/storeProvider";

export const getProfileIsLoading = (state: IStateSchema) =>
  state.profile?.isLoading;
