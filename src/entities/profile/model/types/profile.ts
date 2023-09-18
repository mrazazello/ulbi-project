import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";

export interface IProfile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  validateErrors?: ProfileErrorsEnum[];
  readonly: boolean;
}

export enum ProfileErrorsEnum {
  NO_PROFILE_DATA = "no profile data",
  NO_FIRSTNAME = "no first name",
  NO_LASTNAME = "no last name",
  NO_AGE = "no age",
  NETWORK_ERROR = "network error",
}
