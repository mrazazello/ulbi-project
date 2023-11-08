import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IComment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  string | undefined,
  IThunkConfig<string>
>("articles/fetchCommentsByArticleId", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  if (!articleId) {
    return rejectWithValue("Id is not provided");
  }
  try {
    const response = await extra.api.get<IComment[]>("/comments", {
      params: {
        articleId,
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("Error geting profile");
  }
});
