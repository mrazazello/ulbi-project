import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Avatar } from "./Avatar";
import AvatarImg from "./avatar.png";

export default {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    src: AvatarImg,
    alt: "Avatar",
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];
