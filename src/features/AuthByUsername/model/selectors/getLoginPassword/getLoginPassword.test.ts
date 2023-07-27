import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/storeProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword test", () => {
  test("selector shoud return password", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        password: "123",
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
