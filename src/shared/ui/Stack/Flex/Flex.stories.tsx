import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Flex } from "./Flex";

export default {
  title: "shared/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: (
      <>
        <span>Text1</span>
        <span>Text2</span>
        <span>Text3</span>
      </>
    ),
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  justify: "between",
  align: "start",
  direction: "row",
};

export const Dark = Template.bind({});
Dark.args = {
  justify: "between",
  align: "start",
  direction: "row",
};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
