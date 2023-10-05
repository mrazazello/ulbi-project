import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IUser, userActions } from "entities/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface ILoginProps {
  username: string;
  password: string;
}

export const loginUserByName = createAsyncThunk<
  IUser,
  ILoginProps,
  IThunkConfig<string>
>("login/loginUserByName", async (authData, thunkAPI) => {
  const { dispatch, extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.post<IUser>("/login", authData);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    return rejectWithValue("Wrong login or password");
  }
});
