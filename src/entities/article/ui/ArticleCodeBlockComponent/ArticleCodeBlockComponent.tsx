import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames";
import { Code } from "shared/ui/Code/Code";
import { IArticleCodeBlock } from "../../model/types/article";
import cls from "./articlecodeblockcomponent.module.scss";

interface IProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<IProps> = memo((props: IProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code code={block.code} />
    </div>
  );
});

ArticleCodeBlockComponent.displayName = "ArticleCodeBlockComponent";
