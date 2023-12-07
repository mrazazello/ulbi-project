import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Text } from "../Text/Text";
import { Card } from "./Card";

export default {
  title: "shared/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text text="Тестовый текст" />,
};

export const Dark = Template.bind({});
Dark.args = {
  children: <Text text="Тестовый текст" />,
};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
