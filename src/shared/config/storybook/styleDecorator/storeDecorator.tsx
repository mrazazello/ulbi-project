import { StoryFn } from "@storybook/react";
import { ReactElement } from "react";

import { IStateSchema, StoreProvider } from "app/providers/storeProvider";
import "app/styles/index.scss";
import { articleReducer } from "entities/Article";
import { profileReducer } from "entities/profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { addCommentsFormReducer } from "features/addComment/model/slice/addCommentFormSlice";
import { articleDetailPageReducer } from "pages/articleDetailPage/model/slice";
import { ReducerListType } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducerListType = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetail: articleReducer,
  addCommentForm: addCommentsFormReducer,
  articleDetailPage: articleDetailPageReducer,
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
