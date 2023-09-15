import { FC, useCallback } from "react";

import { classNames } from "shared/lib/classNames";
import { Select } from "shared/ui/Select/Select";

import { CurrencyEnum } from "../../model/types/currency";

interface IProps {
  className?: string;
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  readonly?: boolean;
}

const currentcyOptions = [
  { label: CurrencyEnum.RUB, value: CurrencyEnum.RUB },
  { label: CurrencyEnum.EUR, value: CurrencyEnum.EUR },
  { label: CurrencyEnum.USD, value: CurrencyEnum.USD },
];

export const CurrencySelect: FC<IProps> = (props) => {
  const { className, value, onChange, readonly } = props;

  const changeCurrencyHandler = useCallback(
    (currency: string) => {
      onChange?.(currency as CurrencyEnum);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames("", {}, [className])}
      name="currency"
      placeholder="Currency"
      options={currentcyOptions}
      value={value}
      onChange={changeCurrencyHandler}
      readonly={readonly}
    />
  );
};
