import { StoryFn } from "@storybook/react";
import "app/styles/index.scss";
import { ReactElement } from "react";

export const styleDecorator = (Story: StoryFn): ReactElement => <Story />;
