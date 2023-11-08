import { StoryFn } from "@storybook/react";
import { ReactElement } from "react";

import { IStateSchema, StoreProvider } from "app/providers/storeProvider";
import "app/styles/index.scss";
import { articleReducer } from "entities/article";
import { profileReducer } from "entities/profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { addCommentsFormReducer } from "features/addComment/model/slice/addCommentFormSlice";
import { articleDetailCommentsReducer } from "pages/articleDetailPage/model/slice/articleDetailCommentsSlice";
import { ReducerListType } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducerListType = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetail: articleReducer,
  addCommentForm: addCommentsFormReducer,
  articleDetailsComments: articleDetailCommentsReducer,
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
