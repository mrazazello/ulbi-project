import type { Meta, StoryObj } from "@storybook/react";

import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";
import { ThemeEnum } from "app/providers/themeProvider";

import { SideBar } from "./SideBar";

const meta = {
  title: "wigets/Sidebar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Text",
  },
  // decorators: [themeDecorator(ThemeEnum.LIGHT)],
};

export const dark: Story = {
  args: {
    children: "Text",
  },
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
