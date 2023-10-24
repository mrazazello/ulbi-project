import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { [FTName] } from "./[FTName]";

export default {
  title: "shared/[FTName]",
  component: [FTName],
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
