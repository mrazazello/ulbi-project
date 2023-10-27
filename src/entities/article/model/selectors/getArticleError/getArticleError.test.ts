import { IStateSchema } from "app/providers/storeProvider";
import { getArticleError } from "./getArticleError";

const articleError = "test error";

describe("getArticleError test", () => {
  test("selector shoud return data", () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetail: {
        error: articleError,
      },
    };
    expect(getArticleError(state as IStateSchema)).toEqual(articleError);
  });
  test("empty selector shoud return empty string", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {},
    };
    expect(getArticleError(state as IStateSchema)).toEqual(undefined);
  });
});
