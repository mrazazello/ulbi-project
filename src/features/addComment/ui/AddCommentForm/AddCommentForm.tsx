import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { getAddCommentFormData } from "../../model/selectors/getAddCommentFormData/getAddCommentFormData";
import {
  addCommentsFormActions,
  addCommentsFormReducer,
} from "../../model/slice/addCommentFormSlice";
import cls from "./addcommentform.module.scss";

interface IProps {
  className?: string;
  onSendComment: (comment: string) => void;
}

const reducers: ReducerListType = {
  addCommentForm: addCommentsFormReducer,
};

const AddCommentForm: FC<IProps> = (props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const commentText = useSelector(getAddCommentFormData);

  const onChangeHandler = useCallback(
    (value: string) => {
      dispatch(addCommentsFormActions.updateText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onChangeHandler("");
    onSendComment(commentText || "");
  }, [onChangeHandler, onSendComment, commentText]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          width="100%"
          placeholder={t("add new comment")}
          value={commentText}
          name="text"
          onChange={onChangeHandler}
        />
        <Button theme={ButtonThemeEnum.PRIMARY} onClick={onSendHandler}>
          {t("Submit")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
