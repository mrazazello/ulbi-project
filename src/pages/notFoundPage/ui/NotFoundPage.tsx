import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "wigets/Page/Page";

const NotFoundPage: FC = () => {
  const { t } = useTranslation("notFound");

  return (
    <Page>
      <h1>{t("page title")}</h1>
      {t("page not found")}
    </Page>
  );
};

export default NotFoundPage;
