import { IStateSchema } from "app/providers/storeProvider";
import {
  getScrollPositionByPath,
  scrollRestoreActions,
} from "features/scrollRestore";
import { MutableRefObject, ReactNode, memo, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useInfinityScroll } from "shared/lib/useInfinityScroll/useInfinityScroll";
import { useThrottle } from "shared/lib/useThrottle/useThrottle";
import cls from "./page.module.scss";

interface IProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = "PAGEID";

export const Page = memo((props: IProps) => {
  const { className, children, onScrollEnd } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const wrapperRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const triggerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const scrollPosition = useSelector((state: IStateSchema) =>
    getScrollPositionByPath(state, pathname)
  );

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
    // wrapperRef.current.scrollTo({ top: scrollPosition });
  }, []);

  const scrollHandler = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
    // console.log("e:", e);
    // console.log("scrollTop: ", e.currentTarget.scrollTop);
    dispatch(
      scrollRestoreActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={scrollHandler}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? (
        <div ref={triggerRef} className={cls.trigger}></div>
      ) : null}
    </section>
  );
});

Page.displayName = "Page";
