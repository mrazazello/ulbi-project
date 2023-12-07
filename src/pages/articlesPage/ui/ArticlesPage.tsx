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
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../model/slice/articlePageSlice";

const reducers: ReducerListType = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  }, []);

  const onChangeView = useCallback(
    (view: ArticleViewEnum) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <h1>{t("page title")}</h1>
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticleList view={view} isLoading={isLoading} articles={articles} />
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
