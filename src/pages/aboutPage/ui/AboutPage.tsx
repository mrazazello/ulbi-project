import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <div className="centeredContainer">
      <h1>{t("page title")}</h1>
      <div>centered content</div>
    </div>
  );
};

export default AboutPage;
