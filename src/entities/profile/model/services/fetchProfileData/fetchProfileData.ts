import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  string,
  IThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<IProfile>(`/profiles/${profileId}`);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("Error geting profile");
  }
});
