import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IArticle } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface IFetchArticlesList {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  IFetchArticlesList,
  IThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const { page = 1 } = props;
  const limit = getArticlesPageLimit(getState());

  try {
    const response = await extra.api.get<IArticle[]>("/articles", {
      params: {
        _expand: "user",
        _page: page,
        _limit: limit,
      },
    });

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
