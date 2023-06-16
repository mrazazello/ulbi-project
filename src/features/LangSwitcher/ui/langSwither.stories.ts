import type { Meta, StoryObj } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { LangSwitcher } from "./LangSwitcher";

const meta = {
  title: "features/LangSwitcher",
  component: LangSwitcher,
  argTypes: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
