import type { Meta, StoryObj } from "@storybook/react";
import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { NavBar } from "./NavBar";

const meta = {
  title: "wigets/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
