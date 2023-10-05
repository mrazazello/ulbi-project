import { IStateSchema } from "app/providers/storeProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(true);
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {},
    };
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
