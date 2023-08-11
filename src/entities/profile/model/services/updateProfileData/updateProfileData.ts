import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { IProfile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<string>
>("profile/updateProfileData", async (_params, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileForm(getState());
  try {
    const response = await extra.api.put<IProfile>("/profile", formData);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("Error geting profile");
  }
});
