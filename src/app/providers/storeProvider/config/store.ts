import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "entities/counter";
import { IStateSchema } from "./stateSchema";

export function createReduxStore(initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
    devTools: IS_DEV,
  });
}
