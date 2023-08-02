import {
  fetchProfileData,
  getProfileData,
  getProfileIsLoading,
} from "entities/profile";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames";
import { useAppDispatch } from "shared/lib/useAppDispatch";
import { Preloader } from "shared/ui/Preloader/Preloader";
import cls from "./profileCard.module.scss";

interface IProps {
  className?: string;
}

export const ProfileCard: FC<IProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData({ id: "1" }));
  }, [dispatch]);

  const profile = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      {isLoading ? <Preloader /> : <>profile: {JSON.stringify(profile)}</>}
    </div>
  );
};
