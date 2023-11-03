import { classNames } from "./classNames";

describe("classNames", () => {
  test("className", () => {
    expect(classNames("mainClass", {}, [])).toBe("mainClass");
  });
  test("className and addons", () => {
    expect(classNames("mainClass", {}, ["class1", "class2"])).toBe(
      "mainClass class1 class2"
    );
  });
  test("className modes and addons", () => {
    expect(
      classNames("mainClass", { mode1: true, mode2: true }, [
        "class1",
        "class2",
      ])
    ).toBe("mainClass mode1 mode2 class1 class2");
  });
  test("className modes and addons 2", () => {
    expect(
      classNames("mainClass", { mode1: true, mode2: false }, [
        "class1",
        "class2",
      ])
    ).toBe("mainClass mode1 class1 class2");
  });
});
