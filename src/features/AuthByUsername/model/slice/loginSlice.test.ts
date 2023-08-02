import { ILoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice test", () => {
  test("test set username", () => {
    const state: DeepPartial<ILoginSchema> = {
      username: "",
    };
    expect(
      loginReducer(state as ILoginSchema, loginActions.setUserName("aza"))
    ).toEqual({
      username: "aza",
    });
  });
  test("test set password", () => {
    const state: DeepPartial<ILoginSchema> = {
      password: "",
    };
    expect(
      loginReducer(state as ILoginSchema, loginActions.setUserPassword("pass"))
    ).toEqual({
      password: "pass",
    });
  });
});
