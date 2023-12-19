import { createSelector } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/storeProvider";

export const getScrollPosition = (state: IStateSchema) =>
  state.scrollPosition.scroll ?? 0;

export const getScrollPositionByPath = createSelector(
  getScrollPosition,
  (_state: IStateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
