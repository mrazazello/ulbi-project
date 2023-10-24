import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AxiosInstance } from "axios";
import { IArticleSchema } from "entities/article";
import { ICounterSchema } from "entities/counter";
import { IProfileSchema } from "entities/profile";
import { IUserSchema } from "entities/user";
import { ILoginSchema } from "features/AuthByUsername/model/types/loginSchema";
import { NavigateFunction } from "react-router-dom";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetail?: IArticleSchema;
}

export type StateSchemaKeyType = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>;
  add: (key: StateSchemaKeyType, reducer: Reducer) => void;
  remove: (key: StateSchemaKeyType) => void;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
export interface IReduxStoreWithManager extends ToolkitStore<IStateSchema> {
  reducerManager: IReducerManager;
}
