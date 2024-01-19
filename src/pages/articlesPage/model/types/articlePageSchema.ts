import { EntityState } from "@reduxjs/toolkit";
import {
  ArticleSortFieldEnum,
  ArticleViewEnum,
  ArticlesTypesEnum,
  IArticle,
} from "entities/Article";
import { SortOrderType } from "shared/types";

export interface IArticlePageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  view: ArticleViewEnum;
  page: number;
  limit: number;
  hasMore: boolean;

  order: SortOrderType;
  sort: ArticleSortFieldEnum;
  search: string;
  type: ArticlesTypesEnum;

  _inited?: boolean;
}
