import { StoryFn } from "@storybook/react";
import "app/styles/index.scss";
import { ReactElement } from "react";
import "shared/config/i18n/i18n";

export const i18nextDecorator = (Story: StoryFn): ReactElement => <Story />;
