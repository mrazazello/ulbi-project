import { useTranslation } from "react-i18next";

const ArticlesPage = () => {
  const { t } = useTranslation("article");
  return (
    <div>
      <h1>{t("page title")}</h1>
      Artiles list
    </div>
  );
};

export default ArticlesPage;
