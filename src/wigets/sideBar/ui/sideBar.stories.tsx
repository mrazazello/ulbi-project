import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { SideBar } from "./SideBar";

export default {
  title: "wigets/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => SideBar({ ...args });

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
