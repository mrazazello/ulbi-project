import { useTranslation } from "react-i18next";
import {
  Button,
  ButtonSizeEnum,
  ButtonThemeEnum,
} from "shared/ui/Button/Button";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <div className="centeredContainer">
      <h1>{t("page title")}</h1>
      <div>
        <Button theme={ButtonThemeEnum.CLEAR}>Button (clear)</Button>
        <Button theme={ButtonThemeEnum.TRANSPARENT}>
          Button (transparent)
        </Button>
        <Button theme={ButtonThemeEnum.NORMAL} size={ButtonSizeEnum.SMALL}>
          Button (small)
        </Button>
        <Button theme={ButtonThemeEnum.NORMAL}>Button (normal)</Button>
        <Button theme={ButtonThemeEnum.NORMAL} size={ButtonSizeEnum.BIG}>
          Button (big)
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
