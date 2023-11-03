import { IUser } from "entities/user";

export interface IComment {
  id: string;
  text: string;
  user: IUser;
}
