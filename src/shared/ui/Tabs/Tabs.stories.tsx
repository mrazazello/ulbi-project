import { ComponentStory, Meta } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Tabs } from "./Tabs";

export default {
  title: "shared/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    tabs: [
      {
        value: "1",
        content: "Tab 1",
      },
      {
        value: "2",
        content: "Tab 2",
      },
    ],
    value: "2",
    onTabClick: { action: "clicked" },
  },
} as Meta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
