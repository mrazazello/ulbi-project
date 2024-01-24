import { combineReducers } from "@reduxjs/toolkit";
import { IArticleDetailPageSchema } from "../types";
import { articleDetailCommentsReducer } from "./articleDetailCommentsSlice";
import { articleDetailRecommendationsReducer } from "./articleDetailRecommendationsSlice";

export const articleDetailPageReducer =
  combineReducers<IArticleDetailPageSchema>({
    recommendations: articleDetailRecommendationsReducer,
    comments: articleDetailCommentsReducer,
  });
