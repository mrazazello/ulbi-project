import {
  ArticleSortFieldEnum,
  ArticleViewEnum,
  ArticleViewSelector,
} from "entities/Article";
import { ArticleSortSelector } from "features/articleSortSelector";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { SortOrderType } from "shared/types";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
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
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);

  const onChangeView = useCallback(
    (newView: ArticleViewEnum) => {
      dispatch(articlesPageActions.setView(newView));
    },
    [dispatch]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrderType) => {
      dispatch(articlesPageActions.setOrder(newOrder));
    },
    [dispatch]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortFieldEnum) => {
      dispatch(articlesPageActions.setSort(newSort));
    },
    [dispatch]
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={pageView} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t("Поиск")}
          name="search"
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
    </div>
  );
};
