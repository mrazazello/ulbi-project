import { IStateSchema } from "app/providers/storeProvider";
import { getProfileError } from "./getProfileError";

const profileError = "test error";

describe("getProfileError test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error: profileError,
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual(profileError);
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {},
    };
    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
