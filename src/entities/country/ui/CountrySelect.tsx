import { FC, useCallback } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { CountryEnum } from "../model/types/country";

interface IProps {
  className?: string;
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  readonly?: boolean;
}

const countryOptions = [
  { label: CountryEnum.Georgia, value: CountryEnum.Georgia },
  { label: CountryEnum.Russia, value: CountryEnum.Russia },
];

export const CountrySelect: FC<IProps> = (props) => {
  const { className, value, onChange, readonly } = props;

  const changeCountryHandler = useCallback(
    (country: string) => {
      onChange?.(country as CountryEnum);
    },
    [onChange]
  );

  return (
    <ListBox
      className={classNames("", {}, [className])}
      placeholder="Country"
      options={countryOptions}
      value={value}
      onChange={changeCountryHandler}
      readonly={readonly}
      direction="down"
    />
  );
};
