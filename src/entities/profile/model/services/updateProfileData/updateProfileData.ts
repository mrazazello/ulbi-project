import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/storeProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { IProfile, ProfileErrorsEnum } from "../../types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<ProfileErrorsEnum[]>
>("profile/updateProfileData", async (_params, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileForm(getState());
  const err = validateProfileData(formData);

  if (err.length) {
    return rejectWithValue(err);
  }

  try {
    const response = await extra.api.put<IProfile>("/profile", formData);

    if (!response.data) {
      throw new Error("Thunk error");
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ProfileErrorsEnum.NETWORK_ERROR]);
  }
});
