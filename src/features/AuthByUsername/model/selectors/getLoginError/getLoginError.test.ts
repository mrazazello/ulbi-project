import { IStateSchema } from "app/providers/storeProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError test", () => {
  test("selector shoud return error", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: "my error",
      },
    };
    expect(getLoginError(state as IStateSchema)).toEqual("my error");
  });
  test("empty selector shoud return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {},
    };
    expect(getLoginError(state as IStateSchema)).toEqual(undefined);
  });
});
