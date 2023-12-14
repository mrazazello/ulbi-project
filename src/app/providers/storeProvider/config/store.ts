import {
  CombinedState,
  Reducer,
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";

import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { api } from "shared/api/api";
import { createReducerManager } from "./reducerManager";
import { IStateSchema, IThunkExtraArg } from "./stateSchema";

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    // profile: profileReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: IThunkExtraArg = {
    api: api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
    preloadedState: initialState,
    devTools: IS_DEV,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatchType = ReturnType<typeof createReduxStore>["dispatch"];
