import { FC, useCallback } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
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
    <Select
      className={classNames("", {}, [className])}
      name="country"
      placeholder="Country"
      options={countryOptions}
      value={value}
      onChange={changeCountryHandler}
      readonly={readonly}
    />
  );
};
