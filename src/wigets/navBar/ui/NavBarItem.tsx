import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { INavBarItem } from "../model/NavBarItems";

interface IProps {
  item: INavBarItem;
}

export const NavBarItem: FC<IProps> = memo((props: IProps) => {
  const { item } = props;
  const { t } = useTranslation();

  return (
    <AppLink to={item.url}>
      <item.Icon width={24} height={24} />
      {t(item.text)}
    </AppLink>
  );
});

NavBarItem.displayName = "NavBarItem";
