import { IStateSchema } from "app/providers/storeProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword test", () => {
  test("selector shoud return password", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username: "",
        password: "123",
        isLoading: false,
      },
    };
    expect(getLoginPassword(state as IStateSchema)).toEqual("123");
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {},
    };
    expect(getLoginPassword(state as IStateSchema)).toEqual("");
  });
});
