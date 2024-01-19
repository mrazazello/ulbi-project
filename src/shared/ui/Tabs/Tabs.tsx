import { ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardThemeEnum } from "../Card/Card";
import cls from "./tabs.module.scss";

export interface ITabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface IProps<T extends string> {
  className?: string;
  tabs: ITabItem<T>[];
  value: string;
  onTabClick: (tab: ITabItem<T>) => void;
}

export const Tabs = <T extends string>(props: IProps<T>) => {
  const { className, tabs, value, onTabClick } = props;

  const tabHandler = useCallback(
    (tabItem: ITabItem<T>) => {
      return () => {
        onTabClick(tabItem);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          theme={
            tab.value === value ? CardThemeEnum.NORMAL : CardThemeEnum.OUTLINE
          }
          onClick={tabHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

Tabs.displayName = "Tabs";
