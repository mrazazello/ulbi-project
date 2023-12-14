import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  IThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
