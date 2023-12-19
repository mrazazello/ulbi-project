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
    >
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
});

Page.displayName = "Page";
