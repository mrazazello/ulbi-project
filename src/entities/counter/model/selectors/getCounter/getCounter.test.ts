import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/storeProvider";
import { getCounter } from "./getCounter";

describe("get counter state test", () => {
  test("testing state to be counter state", () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
  });
});
