import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/storeProvider";
import { ArticleViewEnum, IArticle } from "entities/Article";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { IArticlePageSchema } from "../types/articlePageSchema";

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlePageSlice = createSlice({
  name: "articlesList",
  initialState: articlesAdapter.getInitialState<IArticlePageSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
    view: ArticleViewEnum.LIST,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewEnum>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY
      ) as ArticleViewEnum;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.isLoading = false;
          state.error = undefined;
          articlesAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions } = articlePageSlice;
export const { reducer: articlesPageReducer } = articlePageSlice;
