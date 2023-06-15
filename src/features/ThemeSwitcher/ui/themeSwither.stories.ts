import type { Meta, StoryObj } from "@storybook/react";
import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
