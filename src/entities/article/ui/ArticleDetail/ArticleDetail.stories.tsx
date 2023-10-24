import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { ArticleDetail } from "./ArticleDetail";

export default {
  title: "shared/ArticleDetail",
  component: ArticleDetail,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ArticleDetail>;

const Template: ComponentStory<typeof ArticleDetail> = (args) => (
  <ArticleDetail {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
