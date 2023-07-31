import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { InputWithoutMemo as Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "Test",
    placeholder: "Test placeholder",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => Input({ ...args });

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
