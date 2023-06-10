// Needed to test components with translation of i18n
import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "../config/i18n/i18ForTests";

export const renderWithTranslation = (Component: ReactNode) => {
  return render(
    <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>
  );
};
