import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { DropDown } from "shared/ui/DropDown";
import { IDropDownMenuItem } from "shared/ui/DropDown/DropDown";

interface IProps {
  className?: string;
}

export const LangSwitcher: FC<IProps> = (props) => {
  const { className } = props;
  const { i18n } = useTranslation();

  const changeLangToggle = () => {
    console.log("is it fired!");
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const menuItems: IDropDownMenuItem[] = [
    {
      label: (
        <div key={"ru"} onClick={changeLangToggle}>
          Русский
        </div>
      ),
      key: "ru",
    },
    {
      label: (
        <div key={"en"} onClick={changeLangToggle}>
          English
        </div>
      ),
      key: "en",
    },
  ];

  return (
    <div className={classNames("", {}, [className])}>
      <DropDown menuItems={menuItems}>
        <Button>{i18n.language}</Button>
      </DropDown>
    </div>
  );
};
