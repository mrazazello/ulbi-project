import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { storeDecorator } from "shared/config/storybook/styleDecorator/storeDecorator";
import { SideBar } from "./SideBar";

const initialStore = {};

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
Normal.decorators = [storeDecorator(initialStore)];

export const NormalWithAuth = Template.bind({});
NormalWithAuth.args = {};
NormalWithAuth.decorators = [storeDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  storeDecorator(initialStore),
  themeDecorator(ThemeEnum.DARK),
];
