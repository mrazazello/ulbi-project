import { FC, memo } from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { INavBarItem } from "../model/NavBarItems";

interface IProps {
  item: INavBarItem;
}

export const NavBarItem: FC<IProps> = memo((props: IProps) => {
  const { item } = props;

  return (
    <AppLink to={item.url}>
      <item.Icon width={24} height={24} />
      {item.text}
    </AppLink>
  );
});

NavBarItem.displayName = "NavBarItem";
