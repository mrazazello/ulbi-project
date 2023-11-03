import { IComment } from "entities/Comment/model/types/comment";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";
import cls from "./commentcard.module.scss";

interface IProps {
  className?: string;
  comment: IComment;
  isLoading?: boolean;
}

export const CommentCard: FC<IProps> = (props) => {
  const { comment, className, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} round="50%" />
          <Skeleton width={300} height={10} className={cls.username} />
        </div>
        <Skeleton height={10} className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && (
          <Avatar size={30} alt="user" src={comment.user.avatar} />
        )}
        <Text text={comment.user.username} className={cls.username} />
      </div>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
};
