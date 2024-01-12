import { ArticleViewEnum, ArticleViewSelector } from "entities/Article";
import { ArticleSortSelector } from "features/articleSortSelector/ui/ArticleSortSelector";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { getArticlesPageView } from "../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../model/slice/articlePageSlice";
import cls from "./articlesPageFilters.module.scss";

interface IProps {
  className?: string;
}

export const ArticlesPageFilters: FC<IProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const pageView = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleViewEnum) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector />
        <ArticleViewSelector view={pageView} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t("Поиск")} name="search" />
      </Card>
    </div>
  );
};
