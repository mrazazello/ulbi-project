import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleViewEnum } from "../../model/types/article";
import cls from "./articleListItem.module.scss";

interface IProps {
  className?: string;
  view: ArticleViewEnum;
}

export const ArticleListSkeleton: FC<IProps> = (props) => {
  const { className, view } = props;

  const types = <Skeleton width={130} height={16} className={cls.types} />;
  const views = (
    <>
      <Skeleton width={40} height={16} className={cls.views} />
      <Skeleton width={16} height={16} round="50%" />
    </>
  );

  if (view === ArticleViewEnum.LIST) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} round="50%" />
            <Skeleton width={40} height={16} className={cls.username} />
            <Skeleton width={40} height={16} className={cls.date} />
          </div>
          <Skeleton width={300} height={16} className={cls.title} />
          {types}
          <Skeleton width={100} height={100} className={cls.img} />
          <Skeleton width="100%" height={16} className={cls.textBlock} />
          <Skeleton width="100%" height={16} className={cls.textBlock} />
          <Skeleton width={300} height={16} className={cls.textBlock} />
          <div className={cls.footer}>
            <Skeleton width={100} height={30} />
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  );
};
