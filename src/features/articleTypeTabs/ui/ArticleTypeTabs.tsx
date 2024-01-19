import { ArticlesTypesEnum } from "entities/Article";
import { getArticlesPageType } from "pages/articlesPage/model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "pages/articlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "pages/articlesPage/model/slice/articlePageSlice";
import { FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ITabItem, Tabs } from "shared/ui/Tabs/Tabs";
import cls from "./ArticleTypeTabs.module.scss";

interface IProps {
  className?: string;
}

export const ArticleTypeTabs: FC<IProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const type = useSelector(getArticlesPageType);

  const onChangeTab = useCallback(
    (tabItem: ITabItem<ArticlesTypesEnum>) => {
      dispatch(articlesPageActions.setType(tabItem.value));
      dispatch(articlesPageActions.setPage(1));
      dispatch(fetchArticlesList({ replace: true }));
    },
    [dispatch]
  );

  const tabs = useMemo<ITabItem<ArticlesTypesEnum>[]>(
    () => [
      {
        value: ArticlesTypesEnum.ALL,
        content: t("ALL"),
      },
      {
        value: ArticlesTypesEnum.IT,
        content: t("IT"),
      },
      {
        value: ArticlesTypesEnum.SIENCE,
        content: t("SIENCE"),
      },
    ],
    [t]
  );

  return (
    <Tabs
      tabs={tabs}
      value={type}
      onTabClick={onChangeTab}
      className={classNames(cls.tabsWrapper, {}, [className])}
    />
  );
};
