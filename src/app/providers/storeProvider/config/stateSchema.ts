import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AxiosInstance } from "axios";
import { IArticleSchema } from "entities/Article";
import { ICounterSchema } from "entities/counter";
import { IProfileSchema } from "entities/profile";
import { IUserSchema } from "entities/user";
import { ILoginSchema } from "features/AuthByUsername";
import { IAddCommentFormSchema } from "features/addComment";
import { IScrollRestoreSchema } from "features/scrollRestore";
import { IArticleDetailPageSchema } from "pages/articleDetailPage";
import { IArticlePageSchema } from "pages/articlesPage";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  scrollPosition: IScrollRestoreSchema;

  // async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetail?: IArticleSchema;
  articleDetailPage?: IArticleDetailPageSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlePageSchema;
}

export type StateSchemaKeyType = keyof IStateSchema;

export type MountedReducersType = OptionalRecord<StateSchemaKeyType, boolean>;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>;
  add: (key: StateSchemaKeyType, reducer: Reducer) => void;
  remove: (key: StateSchemaKeyType) => void;
  getMountedReducers: () => MountedReducersType;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
export interface IReduxStoreWithManager extends ToolkitStore<IStateSchema> {
  reducerManager: IReducerManager;
}
