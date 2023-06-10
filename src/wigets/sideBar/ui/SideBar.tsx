import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

import { ArrowBarLeft, ArrowBarRight } from "react-bootstrap-icons";
import cls from "./sideBar.module.scss";
import { useTranslation } from "react-i18next";

interface IProps {
  className?: string;
}

export const SideBar: FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;
  const { t } = useTranslation();

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
        className="invertedColor"
      >
        {t("toggle sidebar")}
        {collapsed ? <ArrowBarLeft /> : <ArrowBarRight />}
      </Button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};
