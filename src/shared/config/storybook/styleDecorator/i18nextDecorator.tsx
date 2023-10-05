import { StoryFn } from "@storybook/react";
import { ReactElement, Suspense } from "react";
import "shared/config/i18n/i18ForTests";
import { Preloader } from "shared/ui/Preloader/Preloader";

export const i18nextDecorator = (Story: StoryFn): ReactElement => (
  <Suspense fallback={<Preloader />}>
    <Story />
  </Suspense>
);
