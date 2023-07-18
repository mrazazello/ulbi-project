import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { storeDecorator } from "shared/config/storybook/styleDecorator/storeDecorator";
import { NavBar } from "./NavBar";

export default {
  title: "wigets/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => NavBar({ ...args });

const initialStore = {};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator(initialStore)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  storeDecorator(initialStore),
  themeDecorator(ThemeEnum.DARK),
];

export const Authorised = Template.bind({});
Authorised.args = {};
Authorised.decorators = [
  storeDecorator({ user: { authData: { id: "1", username: "aza" } } }),
];
