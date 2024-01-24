import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IArticle } from "entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
  IArticle[],
  void,
  IThunkConfig<string>
>("articleDetailPage/fetchArticleRecommendations", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IArticle[]>("/articles", {
      params: {
        _expand: "user",
        _limit: "4",
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
