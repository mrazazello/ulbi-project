import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Input } from "shared/ui/Input/Input";
import { FormField } from "./FormField";

export default {
  title: "wigets/FormField",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: <Input name="test" />,
    required: true,
    title: "Element",
  },
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) =>
  FormField({ ...args });

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
