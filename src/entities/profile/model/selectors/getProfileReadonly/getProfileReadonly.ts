import { IStateSchema } from "app/providers/storeProvider";

export const getProfileReadonly = (state: IStateSchema) =>
  state.profile?.readonly;
