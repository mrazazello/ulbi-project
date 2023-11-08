import { CommentList } from "entities/Comment";
import { ArticleDetail } from "entities/article";
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
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
  articleDetailCommentsReducer,
  getArticleComments,
} from "../model/slice/articleDetailCommentsSlice";

const reducers: ReducerListType = {
  articleDetailsComments: articleDetailCommentsReducer,
};

const ArticleDetailPage = () => {
  const { t } = useTranslation("article");
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
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
      <div>
        <ArticleDetail id={id} />
        <h2>{t("Комментарии")}</h2>
        <AddCommentForm onSendComment={onSendHandler} />
        <CommentList isLloading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailPage;
