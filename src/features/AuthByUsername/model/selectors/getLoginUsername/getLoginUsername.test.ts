import { IStateSchema } from "app/providers/storeProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsermane test", () => {
  test("selector shoud return password", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username: "admin",
      },
    };
    expect(getLoginUsername(state as IStateSchema)).toEqual("admin");
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {},
    };
    expect(getLoginUsername(state as IStateSchema)).toEqual("");
  });
});
