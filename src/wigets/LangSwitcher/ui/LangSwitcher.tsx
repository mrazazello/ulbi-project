import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { DropDown } from "shared/ui/DropDown";
import { IDropDownMenuItem } from "shared/ui/DropDown/DropDown";

type LangType = "ru" | "en";
interface IProps {
  className?: string;
}

const LangSwitcherComponent: FC<IProps> = (props: IProps) => {
  const { className } = props;
  const { i18n } = useTranslation();

  const changeLangToggle = (lang: LangType) => {
    i18n.changeLanguage(lang);
  };

  const menuItems: IDropDownMenuItem[] = [
    {
      label: (
        <a key={"ru"} onClick={() => changeLangToggle("ru")}>
          Русский
        </a>
      ),
      key: "ru",
    },
    {
      label: (
        <a key={"en"} onClick={() => changeLangToggle("en")}>
          English
        </a>
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

// LangSwitcher.displayName = "LangSwitcher";

export const LangSwitcher = memo(LangSwitcherComponent);
export const LangSwitcherWithoutMemo = LangSwitcherComponent;
