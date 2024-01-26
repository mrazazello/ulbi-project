import { ArticleDetail, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addComment";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { Page } from "wigets/Page/Page";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { fetchArticleRecommendations } from "../../model/services/fetchRecommendations/fetchArticleRecommendations";
import { articleDetailPageReducer } from "../../model/slice";
import { getArticleComments } from "../../model/slice/articleDetailCommentsSlice";
import { getArticleRecommendations } from "../../model/slice/articleDetailRecommendationsSlice";
import { ArticleDetailPageHeader } from "../ArticleDetailPageHeader/ArticleDetailPageHeader";
import cls from "./ArticleDetailPage.module.scss";

const reducers: ReducerListType = {
  articleDetailPage: articleDetailPageReducer,
};

const ArticleDetailPage = () => {
  const { t } = useTranslation("article");
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommentations = useSelector(getArticleRecommendations.selectAll);
  const recommentationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  }, [id]);

  const onSendHandler = useCallback(
    (comment: string) => {
      dispatch(addCommentForArticle(comment));
    },
    [dispatch]
  );

  if (!id) {
    return <h1>{t("Article not found")}</h1>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ArticleDetailPageHeader />
        <ArticleDetail id={id} />
        <h2>{t("Рекомендации")}</h2>
        <ArticleList
          articles={recommentations}
          isLoading={recommentationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />
        <h2>{t("Комментарии")}</h2>
        <AddCommentForm onSendComment={onSendHandler} />
        <CommentList isLloading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailPage;
