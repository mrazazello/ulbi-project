import { IStateSchema } from "app/providers/storeProvider";

export const getProfileForm = (state: IStateSchema) => state.profile?.form;
