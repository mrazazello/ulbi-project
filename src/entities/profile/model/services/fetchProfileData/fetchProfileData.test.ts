import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

jest.mock("axios");

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

describe("fetchProfileData async Thunk test", () => {
  test("success login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockResolvedValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(profileData);
  });

  test("error  login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Error geting profile");
  });
});
