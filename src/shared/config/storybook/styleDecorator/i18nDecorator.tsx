import { StoryFn } from "@storybook/react";
import { ReactElement } from "react";
// import "shared/config/i18n/i18n";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18ForTests";

export const i18nDecorator = (Story: StoryFn): ReactElement => (
  <I18nextProvider i18n={i18nForTests}>
    <Story />
  </I18nextProvider>
);
