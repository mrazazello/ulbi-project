import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <h1>{t("page title")}</h1>
      <Button>test</Button>
    </div>
  );
};

export default MainPage;
