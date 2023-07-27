import axios from "axios";
import { userActions } from "entities/user";
import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk";
import { loginUserByName } from "./loginByUserName";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, { shallow: false });

describe("LoginByUserName async Thunk test", () => {
  test("success login", async () => {
    const userData = { username: "123", id: "1" };
    mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userData }));
    const thunk = new TestAsyncThunk(loginUserByName);
    const result = await thunk.callThunk({ username: "aza", password: "test" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userData)
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userData);
  });

  test("error  login", async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginUserByName);
    const result = await thunk.callThunk({ username: "aza", password: "test" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Wrong login or password");
  });

  // let disptach: Dispatch;
  // let getState: () => IStateSchema;

  // beforeEach(() => {
  //   disptach = jest.fn();
  //   getState = jest.fn();
  // });

  // test("successful thunk", async () => {
  //   const userData = { username: "123", id: "1" };
  //   mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userData }));
  //   const action = loginUserByName({ username: "aza", password: "test" });
  //   const result = await action(disptach, getState, undefined);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe("fulfilled");
  //   expect(disptach).toHaveBeenCalledWith(userActions.setAuthData(userData));
  //   expect(disptach).toHaveBeenCalledTimes(3);
  //   expect(result.payload).toEqual(userData);
  // });

  // test("error  thunk", async () => {
  //   mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }));
  //   const action = loginUserByName({ username: "aza", password: "test" });
  //   const result = await action(disptach, getState, undefined);
  //   console.log("result: ", result);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(disptach).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe("rejected");
  //   expect(result.payload).toBe("Wrong login or password");
  // });
});
