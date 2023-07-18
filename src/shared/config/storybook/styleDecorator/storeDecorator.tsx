import { StoryFn } from "@storybook/react";
import { ReactElement } from "react";

import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema, StoreProvider } from "app/providers/storeProvider";
import "app/styles/index.scss";

export const storeDecorator =
  (state: DeepPartial<IStateSchema>) =>
  /* eslint-disable react/display-name */
  (Story: StoryFn): ReactElement =>
    (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
