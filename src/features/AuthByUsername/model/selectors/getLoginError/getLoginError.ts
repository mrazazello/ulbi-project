import { IStateSchema } from "app/providers/storeProvider";

export const getLoginError = (state: IStateSchema) => state?.loginForm?.error;
