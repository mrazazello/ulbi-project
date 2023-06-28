import { Counter } from "entities/counter/ui/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <h1>{t("page title")}</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
