import { ArticleDetail } from "entities/article";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ArticleDetailPage = () => {
  const { t } = useTranslation("article");
  const { id } = useParams();

  if (!id) {
    return <h1>{t("Article not found")}</h1>;
  }

  return (
    <div>
      <h1>Article title</h1>
      <ArticleDetail id={id} />
    </div>
  );
};

export default ArticleDetailPage;
