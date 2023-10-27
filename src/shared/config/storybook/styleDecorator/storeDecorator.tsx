import { StoryFn } from "@storybook/react";
import { ReactElement } from "react";

import { IStateSchema, StoreProvider } from "app/providers/storeProvider";
import "app/styles/index.scss";
import { articleReducer } from "entities/article";
import { profileReducer } from "entities/profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducerListType } from "shared/lib/DynamicModuleLoader";

const defaultAsyncReducers: ReducerListType = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetail: articleReducer,
};

export const storeDecorator =
  (state: DeepPartial<IStateSchema>, asyncReducers?: ReducerListType) =>
  /* eslint-disable react/display-name */
  (Story: StoryFn): ReactElement =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
