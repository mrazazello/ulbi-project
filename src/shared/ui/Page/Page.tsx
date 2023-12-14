import { MutableRefObject, ReactNode, memo, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfinityScroll } from "shared/lib/useInfinityScroll/useInfinityScroll";
import cls from "./page.module.scss";

interface IProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: IProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const triggerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
});

Page.displayName = "Page";
