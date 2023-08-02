import { IStateSchema } from "app/providers/storeProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading test", () => {
  test("selector shoud return error is true", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
  });
  test("empty selector shoud return false", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {},
    };
    expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
  });
});
