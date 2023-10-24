import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IArticle } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string,
  IThunkConfig<string>
>("articles/fetchArticleById", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("Error geting profile");
  }
});
