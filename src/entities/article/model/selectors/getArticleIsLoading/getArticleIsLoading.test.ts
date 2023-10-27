import { IStateSchema } from "app/providers/storeProvider";
import { getArticleIsLoading } from "./getArticleIsLoading";

describe("getArticleIsLoading test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetail: {
        isLoading: true,
      },
    };
    expect(getArticleIsLoading(state as IStateSchema)).toEqual(true);
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {},
    };
    expect(getArticleIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
