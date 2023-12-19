import { CountryEnum } from "entities/country";
import { CurrencyEnum } from "entities/currency";
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from "entities/profile";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";
import { Page } from "wigets/Page/Page";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducersList: ReducerListType = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [id]);

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const readonly = useSelector(getProfileReadonly);

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ firstName: value }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ lastName: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ age: Number(value) }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ city: value }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ username: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value: CurrencyEnum) => {
      dispatch(profileActions.updateProfileData({ currency: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value: CountryEnum) => {
      dispatch(profileActions.updateProfileData({ country: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <Page>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((item) => (
            <Alert key={item} message={item} type={AlertTypeEnum.ERROR} />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
