import { IStateSchema } from "app/providers/storeProvider";
import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import { getProfileData } from "./getProfileData";

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

describe("getProfileData test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: profileData,
      },
    };
    expect(getProfileData(state as IStateSchema)).toEqual(profileData);
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {},
    };
    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
