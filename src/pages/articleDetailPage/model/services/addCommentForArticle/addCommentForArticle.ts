import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IComment } from "entities/Comment";
import { getArticleData } from "entities/article";
import { getUserAuthData } from "entities/user";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  IComment,
  string,
  IThunkConfig<string>
>("articleDetailPage/addCommentForArticle", async (comment, thunkAPI) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

  const userData = getUserAuthData(getState());
  const article = getArticleData(getState());

  if (!userData || !comment || !article) {
    return rejectWithValue("no data");
  }

  const commentData = {
    text: comment,
    articleId: article.id,
    userId: userData.id,
  };

  try {
    const response = await extra.api.post<IComment>("/comments", commentData);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    dispatch(fetchCommentsByArticleId(article.id));
    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
