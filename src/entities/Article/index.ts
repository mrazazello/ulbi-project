import { getArticleData } from "./model/selectors/getArticleData/getArticleData";
import { getArticleError } from "./model/selectors/getArticleError/getArticleError";
import { getArticleIsLoading } from "./model/selectors/getArticleIsLoading/getArticleIsLoading";
import { fetchArticleById } from "./model/service/fetchArticleById/fetchArticleById";
import { articleActions, articleReducer } from "./model/slice/articleSlice";
import {
  ArticleViewEnum,
  IArticle,
  IArticleSchema,
} from "./model/types/article";
import { ArticleDetail } from "./ui/ArticleDetail/ArticleDetail";
import { ArticleList } from "./ui/ArticleList/ArticleList";
import { ArticleViewSelector } from "./ui/ArticleViewSelector/ArticleViewSelector";

export {
  ArticleDetail,
  articleActions,
  articleReducer,
  fetchArticleById,
  getArticleIsLoading,
  getArticleError,
  getArticleData,
  ArticleList,
  ArticleViewEnum,
  ArticleViewSelector,
};
export type { IArticle, IArticleSchema };
