import { EntityState } from "@reduxjs/toolkit";
import { IComment } from "entities/Comment";

export interface IArticleDetailCommentSchema extends EntityState<IComment> {
  isLoading?: boolean;
  error?: string;
}
