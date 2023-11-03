import { IComment } from "entities/Comment/model/types/comment";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
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
