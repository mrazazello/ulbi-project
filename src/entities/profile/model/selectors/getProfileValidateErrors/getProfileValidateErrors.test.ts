import { IStateSchema } from "app/providers/storeProvider";
import { ProfileErrorsEnum } from "../../types/profile";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

const profileErrors = [
  ProfileErrorsEnum.NETWORK_ERROR,
  ProfileErrorsEnum.NO_AGE,
];

describe("getProfileValidateErrors test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateErrors: profileErrors,
      },
    };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(
      profileErrors
    );
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {},
    };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined);
  });
});
