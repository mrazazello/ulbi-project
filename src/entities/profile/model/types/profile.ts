import { CuntryEnum, CurrencyEnum } from "shared/const/common";

export interface IProfile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CuntryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
