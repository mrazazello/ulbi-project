import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { IArticleImageBlock } from "../../model/types/article";
import cls from "./articleimageblockcomponent.module.scss";

interface IProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<IProps> = memo((props: IProps) => {
  const { className, block } = props;

  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      <img src={block.src} alt="" className={cls.img} />
      {block.title && <Text text={block.title} align={TextAlign.LEFT} />}
    </div>
  );
});

ArticleImageBlockComponent.displayName = "ArticleImageBlockComponent";
