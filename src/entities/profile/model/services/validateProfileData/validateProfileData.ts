import { IProfile, ProfileErrorsEnum } from "../../types/profile";

export const validateProfileData = (data?: IProfile) => {
  if (!data) {
    return [ProfileErrorsEnum.NO_PROFILE_DATA];
  }

  const { firstName, lastName, age } = data;
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

  return errors;
};
