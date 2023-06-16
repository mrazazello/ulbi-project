import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { AppLink } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/",
    children: "test",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => AppLink({ ...args });

export const LinkLight = Template.bind({});
LinkLight.args = {};

export const LinkDark = Template.bind({});
LinkDark.args = {};
LinkDark.decorators = [themeDecorator(ThemeEnum.DARK)];
