import { profileReducer } from "entities/profile";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader";

const reducersList: ReducerListType = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation("profile");

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div>
        <h1>{t("page title")}</h1>
        <div></div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
