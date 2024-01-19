import { getQueryParams } from "./addQueryParams";

describe("getQueryParams test", () => {
  test("with one param", () => {
    expect(getQueryParams({ param: "value" })).toBe("?param=value");
  });

  test("with two params", () => {
    expect(getQueryParams({ param: "value", param2: "value2" })).toBe(
      "?param=value&param2=value2"
    );
  });

  test("with one undefined param", () => {
    expect(getQueryParams({ param: "value", param2: undefined })).toBe(
      "?param=value"
    );
  });
});
