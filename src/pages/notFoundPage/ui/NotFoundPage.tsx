import { FC } from "react";
import { useTranslation } from "react-i18next";

const NotFoundPage: FC = () => {
  const { t } = useTranslation("notFound");

  return (
    <div>
      <h1>{t("page title")}</h1>
      {t("page not found")}
    </div>
  );
};

export default NotFoundPage;
