import type { Meta, StoryObj } from "@storybook/react";
import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { DropDown, IDropDownMenuItem } from "./DropDown";

const meta = {
  title: "shared/Dropdown",
  component: DropDown,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems: IDropDownMenuItem[] = [
  {
    label: "First item",
    key: "1",
  },
  {
    label: "Second item",
    key: "2",
  },
];

export const Light: Story = {
  args: {
    menuItems,
    children: "Click me",
  },
};

export const Dark: Story = {
  args: {
    menuItems,
    children: "Click me",
  },
  decorators: [themeDecorator(ThemeEnum.DARK)],
};
