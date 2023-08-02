import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Preloader } from "./Preloader";

export default {
  title: "shared/Preloader",
  component: Preloader,
  // tags: ["autodocs"],
  argTypes: {},
  args: {
    text: "Test",
  },
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = (args) =>
  Preloader({ ...args });

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
