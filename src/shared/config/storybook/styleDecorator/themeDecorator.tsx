import { StoryFn } from "@storybook/react";
import { ThemeEnum } from "app/providers/themeProvider";
import { ReactElement } from "react";

export const themeDecorator =
  (theme: ThemeEnum) =>
  /* eslint-disable react/display-name */
  (Story: StoryFn): ReactElement =>
    (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
