import type { Meta, StoryObj } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { i18nextDecorator } from "shared/config/storybook/styleDecorator/i18nextDecorator";
import { LangSwitcherWithoutMemo as LangSwitcher } from "./LangSwitcher";

const meta = {
  title: "wigets/LangSwitcher",
  component: LangSwitcher,
  argTypes: {},
  decorators: [i18nextDecorator],
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [i18nextDecorator],
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(ThemeEnum.DARK), i18nextDecorator],
};
