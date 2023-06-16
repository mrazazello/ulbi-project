import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { DropDown, IDropDownMenuItem } from "./DropDown";

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

export default {
  title: "shared/DropDown",
  component: DropDown,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Click me",
    menuItems,
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) =>
  DropDown({ ...args });

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
