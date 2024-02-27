import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./flex.module.scss";

type FlexJustify = "start" | "center" | "end" | "between";
type FlexAlign = "start" | "center" | "end";
type FlexDirection = "row" | "column";
type FlexGap = "4" | "8" | "16" | "32";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface IFlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

const justufyClasses: Record<FlexJustify, string> = {
  start: cls.justufyStart,
  center: cls.justufyCenter,
  end: cls.justifyEnd,
  between: cls.justifySpaceBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  column: cls.directionColumn,
  row: cls.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export const Flex: FC<IFlexProps> = (props) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    direction = "column",
    gap = "8",
    max = false,
  } = props;

  return (
    <div
      className={classNames(
        cls.Flex,
        {
          [cls.max]: max,
        },
        [
          className,
          justufyClasses[justify],
          alignClasses[align],
          directionClasses[direction],
          gapClasses[gap],
        ]
      )}
    >
      {children}
    </div>
  );
};
