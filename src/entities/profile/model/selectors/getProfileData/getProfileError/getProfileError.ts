import { IStateSchema } from "app/providers/storeProvider";

export const getProfileError = (state: IStateSchema) => state.profile?.error;
