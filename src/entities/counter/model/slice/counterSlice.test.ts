import { ICounterSchema } from "../counter";
import { counterActions, counterReducer } from "./counterSlice";

describe("Counter Slice test", () => {
  test("should be increment cointer +1", () => {
    const state: ICounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });
  test("should be decrement cointer -1", () => {
    const state: ICounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
  test("with inistial state decrement +1", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
