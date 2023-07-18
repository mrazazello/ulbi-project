import { IStateSchema } from "app/providers/storeProvider";

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
