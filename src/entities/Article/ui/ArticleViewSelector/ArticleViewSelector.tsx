import { ArticleViewEnum } from "entities/Article/model/types/article";
import { FC } from "react";
import ListIcon from "shared/assets/icons/list.svg";
import TiledIcon from "shared/assets/icons/tiled.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import cls from "./articleViewSelector.module.scss";

interface IProps {
  className?: string;
  view: ArticleViewEnum;
  onViewClick?: (view: ArticleViewEnum) => void;
}

const viewTypes = [
  {
    view: ArticleViewEnum.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleViewEnum.THUMB,
    icon: TiledIcon,
  },
];

export const ArticleViewSelector: FC<IProps> = (props) => {
  const { className, onViewClick, view } = props;

  const onClick = (newView: ArticleViewEnum) => {
    return () => onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((item) => (
        <Button
          onClick={onClick(item.view)}
          theme={ButtonThemeEnum.CLEAR}
          key={item.view}
        >
          <Icon
            Svg={item.icon}
            className={classNames("", { [cls.selected]: item.view === view })}
          />
        </Button>
      ))}
    </div>
  );
};
