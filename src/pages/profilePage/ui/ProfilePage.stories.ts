import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { IStateSchema } from "app/providers/storeProvider";
import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import { IProfile } from "entities/profile";
import avatarImg from "shared/assets/tests/test-avatar.png";
import { storeDecorator } from "shared/config/storybook/styleDecorator/storeDecorator";
import ProfilePage from "./ProfilePage";

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

const initialStore: DeepPartial<IStateSchema> = {
  profile: {
    isLoading: false,
    error: undefined,
    data: profileData,
    form: profileData,
  },
};

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => ProfilePage();

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator(initialStore)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  storeDecorator(initialStore),
  themeDecorator(ThemeEnum.DARK),
];
