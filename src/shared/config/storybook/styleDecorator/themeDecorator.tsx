import { StoryFn } from "@storybook/react";
import { ThemeEnum, ThemeProvaider } from "app/providers/themeProvider";
import { ReactElement } from "react";

import "app/styles/index.scss";

export const themeDecorator =
  (theme: ThemeEnum) =>
  /* eslint-disable react/display-name */
  (Story: StoryFn): ReactElement =>
    (
      <ThemeProvaider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvaider>
    );
