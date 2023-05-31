import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./langSwitcher.module.scss";

interface IProps {
  className?: string;
}

export const LangSwitcher: FC<IProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const changeLangToggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button
      onClick={changeLangToggle}
      className={classNames(cls.langSwitcher, {}, [className])}
    >
      {t("change lang")}
    </Button>
  );
};
