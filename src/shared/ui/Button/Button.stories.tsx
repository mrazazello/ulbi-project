import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { ButtonWithoutMemo as Button, ButtonThemeEnum } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Text",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: ButtonThemeEnum.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: ButtonThemeEnum.SECONDARY,
};

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonThemeEnum.CLEAR,
};

export const Disabled = Template.bind({});
Clear.args = {
  theme: ButtonThemeEnum.PRIMARY,
  disabled: true,
};

export const DisabledDark = Template.bind({});
Clear.args = {
  theme: ButtonThemeEnum.PRIMARY,
  disabled: true,
};
DisabledDark.decorators = [themeDecorator(ThemeEnum.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: ButtonThemeEnum.PRIMARY,
};
PrimaryDark.decorators = [themeDecorator(ThemeEnum.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  theme: ButtonThemeEnum.SECONDARY,
};
SecondaryDark.decorators = [themeDecorator(ThemeEnum.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  theme: ButtonThemeEnum.SECONDARY,
};
ClearDark.decorators = [themeDecorator(ThemeEnum.DARK)];
