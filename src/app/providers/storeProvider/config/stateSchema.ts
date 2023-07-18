import { ICounterSchema } from "entities/counter";
import { IUserSchema } from "entities/user";
import { ILoginSchema } from "features/AuthByUsername/model/types/loginSchema";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  loginForm?: ILoginSchema;
}
