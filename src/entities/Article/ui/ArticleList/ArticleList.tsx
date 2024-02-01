import { FC, HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { PAGE_ID } from "wigets/Page/Page";
import { ArticleViewEnum, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./articleList.module.scss";

interface IProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleViewEnum) => {
  return new Array(view === ArticleViewEnum.THUMB ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListSkeleton view={view} key={index} className={cls.card} />
    ));
};

export const ArticleList: FC<IProps> = (props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleViewEnum.THUMB,
    target,
  } = props;
  const { t } = useTranslation();

  const isBig = view === ArticleViewEnum.LIST;
  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = ({ key, style, index }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          key={`str${i}`}
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
        />
      );
    }

    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text text={t("Статьи не найдены")} />
      </div>
    );
  }

  return (
    <WindowScroller
      onScroll={() => console.log("on scroll")}
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        registerChild,
        scrollTop,
        onChildScroll,
        isScrolling,
      }) => (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          ref={registerChild}
        >
          <List
            width={width ? width - 52 : 700}
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isBig ? 520 : 320}
            rowRenderer={rowRenderer}
            autoHeight
            onScroll={onChildScroll}
            scrollTop={scrollTop}
            isScrolling={isScrolling}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
};
