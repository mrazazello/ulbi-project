import { getArticleError } from "entities/article/model/selectors/getArticleError/getArticleError";
import { getArticleIsLoading } from "entities/article/model/selectors/getArticleIsLoading/getArticleIsLoading";
import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames";
import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { getArticleData } from "../../model/selectors/getArticleData/getArticleData";
import { fetchArticleById } from "../../model/service/fetchArticleById/fetchArticleById";
import { articleReducer } from "../../model/slice/articleSlice";
import cls from "./articledetail.module.scss";

interface IProps {
  className?: string;
  id: string;
}

const reducers: ReducerListType = {
  articleDetail: articleReducer,
};

export const ArticleDetail: FC<IProps> = memo((props: IProps) => {
  const { className, id } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation("article");

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  const article = useSelector(getArticleData);
  const loading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);

  let content;

  if (error) {
    content = (
      <Alert message={t("Article not found")} type={AlertTypeEnum.ERROR} />
    );
  } else if (loading) {
    content = (
      <>
        <Skeleton width={200} height={200} round="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </>
    );
  } else {
    content = JSON.stringify(article);
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetail, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});

ArticleDetail.displayName = "ArticleDetail";
