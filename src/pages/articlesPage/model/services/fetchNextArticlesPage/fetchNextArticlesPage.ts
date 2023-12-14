import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  IThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const isLoading = getArticlesPageIsLoading(getState());
  const page = getArticlesPageNum(getState());
  const hasMore = getArticlesPageHasMore(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList({ page: page + 1 }));
  }
});
