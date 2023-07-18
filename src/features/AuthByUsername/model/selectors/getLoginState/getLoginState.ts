import { IStateSchema } from "app/providers/storeProvider";

export const getLoginState = (state: IStateSchema) => state?.loginForm;
