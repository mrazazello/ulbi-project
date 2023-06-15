import { StoryFn } from "@storybook/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export const routerDecorator = (Story: StoryFn): ReactElement => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
