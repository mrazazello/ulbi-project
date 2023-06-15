import type { Meta, StoryObj } from "@storybook/react";
import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { AppLink } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
  // decorators: [routerDecorator],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    to: "/",
    children: "test",
  },
  // decorators: [themeDecorator(ThemeEnum.DARK)],
};

export const Dark: Story = {
  args: {
    to: "/",
    children: "test",
  },
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
