import { IStateSchema } from "app/providers/storeProvider";

export const getProfileData = (state: IStateSchema) => state.profile?.data;
