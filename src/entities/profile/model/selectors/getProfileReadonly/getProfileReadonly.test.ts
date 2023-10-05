import { IStateSchema } from "app/providers/storeProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as IStateSchema)).toEqual(true);
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {},
    };
    expect(getProfileReadonly(state as IStateSchema)).toEqual(undefined);
  });
});
