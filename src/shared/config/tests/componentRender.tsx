// Needed to test components with translation of i18n
import { render } from "@testing-library/react";
import { IStateSchema, StoreProvider } from "app/providers/storeProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "../i18n/i18ForTests";

interface IOptions {
  path?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export const componentRender = (
  component: ReactNode,
  options: IOptions = {}
) => {
  const { path = "/", initialState } = options;
  return render(
    <MemoryRouter initialEntries={[path]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
