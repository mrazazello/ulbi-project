import { useTranslation } from "react-i18next";

const ArticleDetailPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <h1>{t("page title")}</h1>
      Artile detail page
    </div>
  );
};

export default ArticleDetailPage;
