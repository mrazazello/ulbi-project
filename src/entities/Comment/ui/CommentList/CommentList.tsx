import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { IComment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./commentlist.module.scss";

interface IProps {
  className?: string;
  comments: IComment[];
  isLloading?: boolean;
}

export const CommentList: FC<IProps> = (props) => {
  const { className, comments, isLloading } = props;
  const { t } = useTranslation();

  if (isLloading) {
    return (
      <>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments.length
        ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLloading}
              className={cls.comment}
            />
          ))
        : t("Нет ни одного комментария")}
    </div>
  );
};
