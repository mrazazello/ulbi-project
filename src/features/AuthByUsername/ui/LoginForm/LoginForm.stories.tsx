import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { storeDecorator } from "shared/config/storybook/styleDecorator/storeDecorator";
import { LoginForm } from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) =>
  LoginForm({ ...args });

const initialStore = {
  loginForm: {
    username: "aza",
    password: "111",
    isLoading: false,
  },
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator(initialStore)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  themeDecorator(ThemeEnum.DARK),
  storeDecorator(initialStore),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [storeDecorator({ loginForm: { isLoading: true } })];