import { StoryFn } from "@storybook/react";
import { ReactElement } from "react";

import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { IStateSchema, StoreProvider } from "app/providers/storeProvider";
import "app/styles/index.scss";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer,
};

export const storeDecorator =
  (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  ) =>
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
