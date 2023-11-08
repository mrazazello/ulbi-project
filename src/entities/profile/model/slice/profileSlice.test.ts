import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { IProfileSchema, ProfileErrorsEnum } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

const profileData = {
  firstName: "Test Name",
  lastName: "test LastName",
  age: 5,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Georgia,
  city: "Tbilisi",
  username: "aza-test",
  avatar: "test image",
};

describe("profileSlice test", () => {
  test("setReadonly", () => {
    const state: DeepPartial<IProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as IProfileSchema, profileActions.setReadonly(true))
    ).toEqual({
      readonly: true,
    });
  });

  test("updateProfileData", () => {
    const state: DeepPartial<IProfileSchema> = {
      form: undefined,
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfileData(profileData)
      )
    ).toEqual({
      form: profileData,
    });
  });

  test("cancelEditProfile", () => {
    const state: DeepPartial<IProfileSchema> = {
      data: profileData,
      form: { ...profileData, firstName: "" },
      readonly: false,
      validateErrors: [ProfileErrorsEnum.NO_PROFILE_DATA],
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.cancelEditProfile()
      )
    ).toEqual({
      data: profileData,
      form: profileData,
      readonly: true,
      validateErrors: undefined,
    });
  });

  test("fetchProfileData service pending", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      error: "some error",
    };
    expect(
      profileReducer(state as IProfileSchema, fetchProfileData.pending)
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test("fetchProfileData service fulfilled", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
      error: "some error",
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        fetchProfileData.fulfilled(profileData, "1", "")
      )
    ).toEqual({
      isLoading: false,
      data: profileData,
      form: profileData,
      error: undefined,
    });
  });
});
