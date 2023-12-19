import { Counter } from "entities/counter/ui/Counter";
import { useTranslation } from "react-i18next";
import { Page } from "wigets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <Page>
      <h1>{t("page title")}</h1>
      <Counter />
    </Page>
  );
};

export default MainPage;
