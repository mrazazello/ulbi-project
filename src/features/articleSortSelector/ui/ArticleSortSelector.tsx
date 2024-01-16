import { ArticleSortFieldEnum } from "entities/Article";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { SortOrderType } from "shared/types";
import { Select, SelectOption } from "shared/ui/Select/Select";

interface IProps {
  className?: string;
  order: SortOrderType;
  sort: ArticleSortFieldEnum;
  onChangeOrder: (newOrder: SortOrderType) => void;
  onChangeSort: (newSort: ArticleSortFieldEnum) => void;
}

export const ArticleSortSelector: FC<IProps> = (props) => {
  const { className, order, sort, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrderType>[]>(
    () => [
      {
        value: "asc",
        label: t("возрастанию"),
      },
      {
        value: "desc",
        label: t("убыванию"),
      },
    ],
    [t]
  );

  const sortOptions = useMemo<SelectOption<ArticleSortFieldEnum>[]>(
    () => [
      {
        value: ArticleSortFieldEnum.CREATED,
        label: t("дате"),
      },
      {
        value: ArticleSortFieldEnum.TITLE,
        label: t("заголовку"),
      },
      {
        value: ArticleSortFieldEnum.VIEWS,
        label: t("просмотрам"),
      },
    ],
    [t]
  );

  return (
    <div className={classNames("", {}, [className])}>
      <Select
        placeholder={t("сортировать по")}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
      <Select
        placeholder={t("сортировать по")}
        options={sortOptions}
        value={sort}
        onChange={onChangeSort}
      />
    </div>
  );
};
