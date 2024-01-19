import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleViewEnum, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./articleList.module.scss";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface IProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
}

const getSkeletons = (view: ArticleViewEnum) => {
  return new Array(view === ArticleViewEnum.THUMB ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListSkeleton view={view} key={index} className={cls.card} />
    ));
};

export const ArticleList: FC<IProps> = (props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleViewEnum.THUMB,
  } = props;
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text text={t("Статьи не найдены")} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map((el) => (
            <ArticleListItem
              key={el.id}
              article={el}
              view={view}
              className={cls.card}
            />
          ))
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
