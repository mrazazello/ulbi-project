import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

import { ArrowBarLeft, ArrowBarRight } from "react-bootstrap-icons";
import { ThemeSwitcher } from "wigets/ThemeSwitcher";
import { SideBarItem } from "./SideBarItem";
import cls from "./sideBar.module.scss";
import { useSelector } from "react-redux";
import { getSidebarItemSelector } from "../model/selectors/getSidebarItems";

interface IProps {
  className?: string;
}

export const SideBar = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;

  const sideBarToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const sideBarMenu = useSelector(getSidebarItemSelector);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={sideBarToggle}
        className={cls.centered}
      >
        {collapsed ? <ArrowBarLeft /> : <ArrowBarRight />}
      </Button>
      <div className={classNames(cls.sideMenu, { [cls.collapsed]: collapsed })}>
        {sideBarMenu.map((item) => (
          <SideBarItem key={item.url} item={item} />
        ))}
      </div>
      <div className={cls.swithers}>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};
