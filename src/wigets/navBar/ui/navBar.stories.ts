import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { NavBar } from "./NavBar";

export default {
  title: "wigets/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => NavBar({ ...args });

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
