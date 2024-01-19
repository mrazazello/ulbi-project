import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { ArticlesTypesEnum, IArticle } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlesPageSelectors";

interface IFetchArticlesProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  IFetchArticlesProps,
  IThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const page = getArticlesPageNum(getState());
  const limit = getArticlesPageLimit(getState());
  const order = getArticlesPageOrder(getState());
  const sort = getArticlesPageSort(getState());
  const search = getArticlesPageSearch(getState());
  const type = getArticlesPageType(getState());

  console.log("type: ", type);

  try {
    addQueryParams({
      order,
      sort,
      search,
      type,
    });

    const response = await extra.api.get<IArticle[]>("/articles", {
      params: {
        _expand: "user",
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticlesTypesEnum.ALL ? undefined : type,
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
