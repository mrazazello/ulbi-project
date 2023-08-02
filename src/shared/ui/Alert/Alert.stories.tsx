import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Alert, AlertTypeEnum } from "./Alert";

export default {
  title: "shared/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    message: "Text of message",
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertInfo = Template.bind({});
AlertInfo.args = {
  type: AlertTypeEnum.INFO,
};

export const AlertError = Template.bind({});
AlertError.args = {
  type: AlertTypeEnum.ERROR,
};
AlertError.decorators = [themeDecorator(ThemeEnum.DARK)];
