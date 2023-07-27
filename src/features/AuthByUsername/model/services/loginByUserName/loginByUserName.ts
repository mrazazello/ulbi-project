import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, userActions } from "entities/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const loginURL = "http://localhost:8000/login";

export interface ILoginProps {
  username: string;
  password: string;
}

export const loginUserByName = createAsyncThunk<
  IUser,
  ILoginProps,
  { rejectValue: string }
>("login/loginUserByName", async (authData, thunkAPI) => {
  try {
    const response = await axios.post<IUser>(loginURL, authData);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Wrong login or password");
  }
});
