import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { IProfile } from "../../types/profile";

export interface IGetProfileProps {
  id: string;
}

export const fetchProfileData = createAsyncThunk<
  IProfile,
  IGetProfileProps,
  IThunkConfig<string>
>("profile/fetchProfileData", async (params, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<IProfile>(`/profile?id=${params.id}`);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    // dispatch(profileActions.setProfileData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("Error geting profile");
  }
});
