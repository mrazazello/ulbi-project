import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import { ProfileErrorsEnum } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

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

describe("validateProfileData test", () => {
  test("success validation", () => {
    const result = validateProfileData(profileData);
    expect(result).toEqual([]);
  });

  test("error: no profile data", () => {
    const result = validateProfileData();
    expect(result).toEqual([ProfileErrorsEnum.NO_PROFILE_DATA]);
  });

  test("error: no firstName", () => {
    const result = validateProfileData({ ...profileData, firstName: "" });
    expect(result).toEqual([ProfileErrorsEnum.NO_FIRSTNAME]);
  });

  test("error: no lastName", () => {
    const result = validateProfileData({ ...profileData, lastName: "" });
    expect(result).toEqual([ProfileErrorsEnum.NO_LASTNAME]);
  });

  test("error: no age", () => {
    const result = validateProfileData({ ...profileData, age: undefined });
    expect(result).toEqual([ProfileErrorsEnum.NO_AGE]);
  });

  test("error: no currency", () => {
    const result = validateProfileData({ ...profileData, currency: undefined });
    expect(result).toEqual([ProfileErrorsEnum.NO_CURRENCY]);
  });

  test("error: no country", () => {
    const result = validateProfileData({ ...profileData, country: undefined });
    expect(result).toEqual([ProfileErrorsEnum.NO_COUNTRY]);
  });

  test("error: no city", () => {
    const result = validateProfileData({ ...profileData, city: undefined });
    expect(result).toEqual([ProfileErrorsEnum.NO_CITY]);
  });

  test("error: no username", () => {
    const result = validateProfileData({ ...profileData, username: undefined });
    expect(result).toEqual([ProfileErrorsEnum.NO_USERNAME]);
  });
});
