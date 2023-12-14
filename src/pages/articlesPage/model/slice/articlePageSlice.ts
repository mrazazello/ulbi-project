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
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewEnum>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY
      ) as ArticleViewEnum;
      state.view = view;
      state.limit = view === ArticleViewEnum.LIST ? 4 : 9;
      state._inited = true;
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
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
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
