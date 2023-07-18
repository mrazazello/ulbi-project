import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { loginReducer } from "features/AuthByUsername";
import { IStateSchema } from "./stateSchema";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
    devTools: IS_DEV,
  });
}
