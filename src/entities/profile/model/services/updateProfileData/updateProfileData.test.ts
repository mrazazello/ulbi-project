import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk";
import { IProfile, ProfileErrorsEnum } from "../../types/profile";
import { updateProfileData } from "./updateProfileData";

jest.mock("axios");

const profileData: IProfile = {
  firstName: "Test Name",
  lastName: "test LastName",
  age: 5,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Georgia,
  city: "Tbilisi",
  username: "aza-test",
  avatar: "test image",
  id: "1",
};

describe("updateProfileData async Thunk test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileData },
    });
    thunk.api.put.mockResolvedValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(profileData);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileData },
    });
    thunk.api.put.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ProfileErrorsEnum.NETWORK_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...profileData, lastName: "" } },
    });
    thunk.api.put.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ProfileErrorsEnum.NO_LASTNAME]);
  });
});
