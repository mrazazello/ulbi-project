import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import { IProfile } from "entities/profile/model/types/profile";
import avatarImg from "shared/assets/tests/test-avatar.png";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";
import { ProfileCard } from "./ProfileCard";

const profileData: IProfile = {
  firstName: "sdadas",
  lastName: "sdasdas",
  age: 5,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Georgia,
  city: "Tbilisi",
  username: "aza test",
  avatar: avatarImg,
};

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    data: profileData,
    isLoading: false,
    error: undefined,
    readonly: true,
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(ThemeEnum.DARK)];

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};

export const HasError = Template.bind({});
HasError.args = {
  error: "Error geting profile",
};
