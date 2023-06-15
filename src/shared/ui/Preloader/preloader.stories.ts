import type { Meta, StoryObj } from "@storybook/react";
import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Preloader } from "./Preloader";

const meta = {
  title: "shared/Preloader",
  component: Preloader,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Preloader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    text: "Loading something",
  },
};

export const Dark: Story = {
  args: {
    text: "Loading something",
  },
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
