import { FC, HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import eyeIcon from "shared/assets/icons/eye.svg";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { useHover } from "shared/lib/hooks/useHover";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import {
  ArticleBlockTypeEnum,
  ArticleViewEnum,
  IArticle,
  IArticleTextBlock,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./articleListItem.module.scss";

interface IProps {
  className?: string;
  article: IArticle;
  view: ArticleViewEnum;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<IProps> = (props) => {
  const { className, article, view, target } = props;
  const [, bindHover] = useHover();
  const { t } = useTranslation();

  const types = <Text text={article.type.join(", ")} className={cls.types} />;
  const views = (
    <>
      <Text text={article.views.toString()} className={cls.views} />
      <Icon Svg={eyeIcon} />
    </>
  );

  if (view === ArticleViewEnum.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockTypeEnum.TEXT
    ) as IArticleTextBlock;
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text text={article.title} className={cls.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              to={routePath.articles_detail + article.id}
              target={target}
            >
              <Button theme={ButtonThemeEnum.SECONDARY}>
                {t("читать далее")}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      {...bindHover}
    >
      <AppLink to={routePath.articles_detail + article.id} target={target}>
        <Card>
          <div className={cls.imageWrapper}>
            <img src={article.img} className={cls.img} alt={article.title} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </AppLink>
    </div>
  );
};
