// Needed to test components with translation of i18n
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "../i18n/i18ForTests";

interface IOptions {
  path?: string;
}

export const componentRender = (
  component: ReactNode,
  options: IOptions = {}
) => {
  const { path = "/" } = options;
  return render(
    <MemoryRouter initialEntries={[path]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
