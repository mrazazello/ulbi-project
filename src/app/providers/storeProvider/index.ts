import type {
  IReduxStoreWithManager,
  IStateSchema,
  IThunkConfig,
  IThunkExtraArg,
} from "./config/stateSchema";
import { createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
  StoreProvider,
  createReduxStore,
  IStateSchema,
  IReduxStoreWithManager,
  IThunkExtraArg,
  IThunkConfig,
};
