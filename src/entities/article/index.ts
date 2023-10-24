import { getArticleData } from "./model/selectors/getArticleData/getArticleData";
import { getArticleError } from "./model/selectors/getArticleError/getArticleError";
import { getArticleIsLoading } from "./model/selectors/getArticleIsLoading/getArticleIsLoading";
import { fetchArticleById } from "./model/service/fetchArticleById/fetchArticleById";
import { articleActions, articleReducer } from "./model/slice/articleSlice";
import { IArticle, IArticleSchema } from "./model/types/article";
import { ArticleDetail } from "./ui/ArticleDetail/ArticleDetail";

export {
  ArticleDetail,
  articleActions,
  articleReducer,
  fetchArticleById,
  getArticleIsLoading,
  getArticleError,
  getArticleData,
};
export type { IArticle, IArticleSchema };
