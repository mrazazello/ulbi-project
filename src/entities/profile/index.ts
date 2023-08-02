import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileData/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileData/getProfileIsLoading/getProfileIsLoading";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { IProfile, IProfileSchema } from "./model/types/profile";

export { IProfile, IProfileSchema };
export { profileActions, profileReducer };
export { getProfileData, getProfileError, getProfileIsLoading };
export { fetchProfileData };
