import { StoryFn } from "@storybook/react";
import { ReactElement, Suspense } from "react";
import { Preloader } from "shared/ui/Preloader/Preloader";
import "../../i18n/i18ForTests";

export const i18nextDecorator = (Story: StoryFn): ReactElement => (
  <Suspense fallback={<Preloader />}>
    <Story />
  </Suspense>
);
