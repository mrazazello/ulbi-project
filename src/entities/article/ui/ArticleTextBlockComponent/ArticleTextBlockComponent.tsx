import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames";
import { IArticleTextBlock } from "../../model/types/article";
import cls from "./articletextblockcomponent.module.scss";

interface IProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<IProps> = memo((props: IProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {block.title && <h2>{block.title}</h2>}
      {block.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
});

ArticleTextBlockComponent.displayName = "ArticleTextBlockComponent";
