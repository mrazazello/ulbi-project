import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/storeProvider";
import { IArticle } from "entities/Article";
import { fetchArticleRecommendations } from "../services/fetchRecommendations/fetchArticleRecommendations";
import { IArticleDetailRecommendationsSchema } from "../types/ArticleDatailRecommendationsSchema";

const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<IStateSchema>(
    (state) =>
      state.articleDetailPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  );

export const articleDetailRecommendationsSlice = createSlice({
  name: "articleDetailRecommendationsSlice",
  initialState:
    recommendationsAdapter.getInitialState<IArticleDetailRecommendationsSchema>(
      {
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleRecommendations.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.isLoading = false;
          state.error = undefined;
          recommendationsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailRecommendationsActions } =
  articleDetailRecommendationsSlice;
export const { reducer: articleDetailRecommendationsReducer } =
  articleDetailRecommendationsSlice;
