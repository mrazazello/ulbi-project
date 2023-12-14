import {
  ArticleList,
  ArticleViewEnum,
  ArticleViewSelector,
} from "entities/Article";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { Alert } from "shared/ui/Alert/Alert";
import { Page } from "shared/ui/Page/Page";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../model/slice/articlePageSlice";
import { AlertTypeEnum } from "shared/ui/Alert/Alert";

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

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }, []);

  const onChangeView = useCallback(
    (view: ArticleViewEnum) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  if (error) {
    return (
      <Alert
        type={AlertTypeEnum.ERROR}
        message={t("Error getting article list")}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart}>
        <h1>{t("page title")}</h1>
        <ArticleViewSelector view={pageView} onViewClick={onChangeView} />
        <ArticleList
          view={pageView}
          isLoading={isLoading}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
