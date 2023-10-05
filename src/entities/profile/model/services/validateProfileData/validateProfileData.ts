import { IProfile, ProfileErrorsEnum } from "../../types/profile";

export const validateProfileData = (data?: IProfile) => {
  if (!data) {
    return [ProfileErrorsEnum.NO_PROFILE_DATA];
  }

  const { firstName, lastName, age, currency, city, country, username } = data;
  const errors = [];

  if (firstName === "") {
    errors.push(ProfileErrorsEnum.NO_FIRSTNAME);
  }

  if (lastName === "") {
    errors.push(ProfileErrorsEnum.NO_LASTNAME);
  }

  if (!age || !Number(age)) {
    errors.push(ProfileErrorsEnum.NO_AGE);
  }

  if (!currency) {
    errors.push(ProfileErrorsEnum.NO_CURRENCY);
  }

  if (!country) {
    errors.push(ProfileErrorsEnum.NO_COUNTRY);
  }

  if (!city) {
    errors.push(ProfileErrorsEnum.NO_CITY);
  }

  if (!username) {
    errors.push(ProfileErrorsEnum.NO_USERNAME);
  }

  return errors;
};
