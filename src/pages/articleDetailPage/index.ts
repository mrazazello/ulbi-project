import { IArticleDetailPageSchema } from "./model/types";
import { IArticleDetailRecommendationsSchema } from "./model/types/ArticleDatailRecommendationsSchema";
import { IArticleDetailCommentSchema } from "./model/types/ArticleDetailCommentSchema";
import { ArticleDetailPageAsync } from "./ui/ArticleDetailPage.async";

export { ArticleDetailPageAsync as ArticleDetailPage };
export type {
  IArticleDetailCommentSchema,
  IArticleDetailPageSchema,
  IArticleDetailRecommendationsSchema,
};
