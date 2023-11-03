import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames/classNames";
import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";

import { getArticleData } from "../../model/selectors/getArticleData/getArticleData";
import { getArticleError } from "../../model/selectors/getArticleError/getArticleError";
import { getArticleIsLoading } from "../../model/selectors/getArticleIsLoading/getArticleIsLoading";
import { fetchArticleById } from "../../model/service/fetchArticleById/fetchArticleById";
import { articleReducer } from "../../model/slice/articleSlice";
import { ArticleBlock, ArticleBlockTypeEnum } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./articledetail.module.scss";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";

interface IProps {
  className?: string;
  id: string;
}

const reducers: ReducerListType = {
  articleDetail: articleReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockTypeEnum.CODE:
      return (
        <ArticleCodeBlockComponent
          block={block}
          key={block.id}
          className={cls.block}
        />
      );
    case ArticleBlockTypeEnum.TEXT:
      return (
        <ArticleTextBlockComponent
          block={block}
          key={block.id}
          className={cls.block}
        />
      );
    case ArticleBlockTypeEnum.IMAGE:
      return (
        <ArticleImageBlockComponent
          block={block}
          key={block.id}
          className={cls.block}
        />
      );
    default:
      return null;
  }
};

export const ArticleDetail: FC<IProps> = memo((props: IProps) => {
  const { className, id } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation("article");

  useInitialEffect(() => {
    if (PROJECT !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [id]);

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
  } else if (article) {
    content = (
      <>
        <h1>{article.title}</h1>
        <Text text={article.subtitle} />
        <Avatar src={article.img} alt="avatar" />
        <Text text={article.views.toString()} />
        <Text text={article.createdAt} />
        {/* "type": ["IT"], */}
        {article.blocks.map(renderBlock)}
      </>
    );
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
