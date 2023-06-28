import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/storeProvider";
import { getCounterValue } from "./getCounterValue";

describe("get counter state test", () => {
  test("shoud return counter value", () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as IStateSchema)).toEqual(10);
  });
});
