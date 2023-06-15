import type { Meta, StoryObj } from "@storybook/react";
import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Button, ButtonThemeEnum } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: ButtonThemeEnum.PRIMARY,
    children: "Text",
  },
};

export const Secondary: Story = {
  args: {
    theme: ButtonThemeEnum.SECONDARY,
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    theme: ButtonThemeEnum.CLEAR,
    children: "Text",
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: ButtonThemeEnum.PRIMARY,
    children: "Text",
  },
  decorators: [themeDecorator(ThemeEnum.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    theme: ButtonThemeEnum.SECONDARY,
    children: "Text",
  },
  decorators: [themeDecorator(ThemeEnum.DARK)],
};

export const ClearDark: Story = {
  args: {
    theme: ButtonThemeEnum.CLEAR,
    children: "Text",
  },
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
