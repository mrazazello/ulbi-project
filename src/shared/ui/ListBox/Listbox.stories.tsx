import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { ListBox } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    placeholder: "Test placeholder",
    options: [
      { label: "Test 1", value: "1" },
      { label: "Test 2", value: "2" },
    ],
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
