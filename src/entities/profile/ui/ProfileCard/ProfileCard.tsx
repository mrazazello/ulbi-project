import { FC } from "react";

import { classNames } from "shared/lib/classNames";
import { Alert, AlertTypeEnum } from "shared/ui/Alert/Alert";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Preloader } from "shared/ui/Preloader/Preloader";

import { IProfile } from "../../model/types/profile";

import { CountryEnum, CountrySelect } from "entities/country";
import { CurrencyEnum, CurrencySelect } from "entities/currency";
import cls from "./profileCard.module.scss";

interface IProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: CurrencyEnum) => void;
  onChangeCountry?: (value: CountryEnum) => void;
}

export const ProfileCard: FC<IProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly = false,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const mods = {
    [cls.editMode]: !readonly,
  };

  if (error) {
    return <Alert message={error} type={AlertTypeEnum.ERROR} />;
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      {isLoading ? (
        <Preloader text="loading profile" />
      ) : (
        <>
          <div className={classNames(cls.form)}>
            {data?.avatar && <Avatar src={data?.avatar} alt="avatar" />}
            <Input
              placeholder="First Name"
              name="firstName"
              value={data?.firstName}
              readonly={readonly}
              onChange={onChangeFirstName}
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              value={data?.lastName}
              readonly={readonly}
              onChange={onChangeLastName}
            />
            <Input
              placeholder="Age"
              name="age"
              value={data?.age}
              readonly={readonly}
              onChange={onChangeAge}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <Input
              placeholder="City"
              name="city"
              value={data?.city}
              readonly={readonly}
              onChange={onChangeCity}
            />
            <Input
              placeholder="Username"
              name="username"
              value={data?.username}
              readonly={readonly}
              onChange={onChangeUsername}
            />
            <Input
              placeholder="Avatar"
              name="avatar"
              value={data?.avatar}
              readonly={readonly}
              onChange={onChangeAvatar}
            />
          </div>
        </>
      )}
    </div>
  );
};
