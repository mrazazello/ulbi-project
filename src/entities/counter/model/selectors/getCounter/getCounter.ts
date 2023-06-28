import { IStateSchema } from "app/providers/storeProvider";

export const getCounter = (state: IStateSchema) => state.counter;
