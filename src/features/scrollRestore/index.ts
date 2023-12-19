import { getScrollPositionByPath } from "./model/selectors/getScrollPosition";
import {
  scrollRestoreActions,
  scrollRestoreReducer,
} from "./model/slice/scrollRestoreSlice";
import { IScrollRestoreSchema } from "./model/types/scrollSchema";

export { scrollRestoreReducer, scrollRestoreActions, getScrollPositionByPath };
export type { IScrollRestoreSchema };
