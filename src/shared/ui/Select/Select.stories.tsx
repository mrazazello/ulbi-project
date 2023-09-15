import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "Test",
    placeholder: "Test placeholder",
    options: [
      { label: "russia", value: "russia" },
      { label: "georgia", value: "georgia" },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
