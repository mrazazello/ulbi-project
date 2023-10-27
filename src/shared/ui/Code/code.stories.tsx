import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Code } from "./Code";

export default {
  title: "shared/Code",
  component: Code,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    code: "<p>asdsadas</p> \n<p>asdsadas</p> \n<div>asdsadas</div>",
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
