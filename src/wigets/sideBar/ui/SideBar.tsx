import { LangSwitcher } from "features/LangSwitcher";
import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./sideBar.module.scss";

interface IProps {
  className?: string;
}

export const SideBar: FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;

  const sideBarToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={sideBarToggle} className={cls.button}>
        toggle
      </Button>
      <div className={cls.swithers}>
        <LangSwitcher className={cls.button} />
      </div>
    </div>
  );
};
