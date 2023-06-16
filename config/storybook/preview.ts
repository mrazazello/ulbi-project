import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";
import { i18nDecorator } from "../../src/shared/config/storybook/styleDecorator/i18nDecorator";
import { routerDecorator } from "../../src/shared/config/storybook/styleDecorator/routerDecorator";
import { styleDecorator } from "../../src/shared/config/storybook/styleDecorator/styleDecorator";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    routerDecorator,
    styleDecorator,
    themeDecorator(ThemeEnum.LIGHT),
    i18nDecorator,
  ],
};

export default preview;
