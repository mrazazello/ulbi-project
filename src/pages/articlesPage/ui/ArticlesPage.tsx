import { ArticleList } from "entities/Article";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";
import { Page } from "wigets/Page/Page";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../model/services/initArticlesPage/initArticlesPage";
import {
  articlesPageReducer,
  getArticles,
} from "../model/slice/articlePageSlice";
import { ArticlesPageFilters } from "./ArticlesPageFilters";
import cls from "./articlesPage.module.scss";
import { useSearchParams } from "react-router-dom";

const reducers: ReducerListType = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const articles = useSelector(getArticles.selectAll);
  const pageView = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, []);

  if (error) {
    return (
      <Alert
        type={AlertTypeEnum.ERROR}
        message={t("Error getting article list")}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <h1>{t("page title")}</h1>
        <ArticlesPageFilters />
        <ArticleList
          view={pageView}
          isLoading={isLoading}
          articles={articles}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
