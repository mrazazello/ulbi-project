import { IStateSchema } from "app/providers/storeProvider";

export const getProfileValidateErrors = (state: IStateSchema) =>
  state.profile?.validateErrors;
