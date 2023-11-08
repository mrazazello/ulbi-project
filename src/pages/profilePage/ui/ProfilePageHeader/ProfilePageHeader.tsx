import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/profile";
import { getUserAuthData } from "entities/user";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import cls from "./profilePageHeader.module.scss";

interface IProps {
  className?: string;
}

export const ProfilePageHeader: FC<IProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);
  const auth = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);
  const canEdit = auth?.id === profile?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <h1>{t("page title")}</h1>
      {canEdit && (
        <>
          {readonly ? (
            <Button
              theme={ButtonThemeEnum.PRIMARY}
              className={cls.editBtn}
              onClick={onEdit}
            >
              {t("edit")}
            </Button>
          ) : (
            <div className={cls.editBtn}>
              <Button theme={ButtonThemeEnum.SECONDARY} onClick={onCancelEdit}>
                {t("cancel")}
              </Button>
              <Button theme={ButtonThemeEnum.PRIMARY} onClick={onSave}>
                {t("save")}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
