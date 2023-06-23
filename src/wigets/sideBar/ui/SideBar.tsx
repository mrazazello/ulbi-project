import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useState } from "react";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button/Button";

import { ArrowBarLeft, ArrowBarRight, PlayBtn } from "react-bootstrap-icons";
import cls from "./sideBar.module.scss";

interface IProps {
  className?: string;
}

export const SideBar: FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;
  // const { t } = useTranslation();

  const sideBarToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
        <AppLink to={routePath.main}>
          <PlayBtn width={24} height={24} />
          <span>Menu item 1</span>
        </AppLink>
        <AppLink to={routePath.main}>
          <PlayBtn width={24} height={24} />
          <span>Menu item 2</span>
        </AppLink>
        <AppLink to={routePath.main}>
          <PlayBtn width={24} height={24} />
          <span>Menu item 3</span>
        </AppLink>
        <AppLink to={routePath.main}>
          <PlayBtn width={24} height={24} />
          <span>Menu item 4</span>
        </AppLink>
      </div>
      <div className={cls.swithers}>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};
