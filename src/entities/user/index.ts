import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";
import { userActions, userReducer } from "./model/slice/userSlice";
import { IUser, IUserSchema } from "./model/types/types";

export { userReducer, userActions, getUserAuthData, getUserInited };
export { IUser, IUserSchema };
