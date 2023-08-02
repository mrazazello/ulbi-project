import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { storeDecorator } from "shared/config/storybook/styleDecorator/storeDecorator";
import { LoginFormWithoutMemo as LoginForm } from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onSuccess: () => null,
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

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

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  storeDecorator({
    loginForm: {
      username: "aza",
      password: "111",
      isLoading: false,
      error: "Test error",
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  storeDecorator({
    loginForm: { isLoading: true, username: "", password: "" },
  }),
];
