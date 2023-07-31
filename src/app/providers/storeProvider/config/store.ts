import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "entities/counter";
import { profileReducer } from "entities/profile";
import { userReducer } from "entities/user";
import { createReducerManager } from "./reducerManager";
import { IStateSchema } from "./stateSchema";

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    profile: profileReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: IS_DEV,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatchType = ReturnType<typeof createReduxStore>["dispatch"];
