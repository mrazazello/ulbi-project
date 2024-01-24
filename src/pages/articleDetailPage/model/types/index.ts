import { IArticleDetailRecommendationsSchema } from "./ArticleDatailRecommendationsSchema";
import { IArticleDetailCommentSchema } from "./ArticleDetailCommentSchema";

export interface IArticleDetailPageSchema {
  comments: IArticleDetailCommentSchema;
  recommendations: IArticleDetailRecommendationsSchema;
}
