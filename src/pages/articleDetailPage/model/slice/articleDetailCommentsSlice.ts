import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/storeProvider";
import { IComment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { IArticleDetailCommentSchema } from "../types/ArticleDetailCommentSchema";

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
  (state) =>
    state.articleDetailPage?.comments || commentsAdapter.getInitialState()
);

export const articleDetailCommentsSlice = createSlice({
  name: "articleDetailComments",
  initialState: commentsAdapter.getInitialState<IArticleDetailCommentSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
          state.isLoading = false;
          state.error = undefined;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailCommentsActions } =
  articleDetailCommentsSlice;
export const { reducer: articleDetailCommentsReducer } =
  articleDetailCommentsSlice;
