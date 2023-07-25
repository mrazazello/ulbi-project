import type {
  IReduxStoreWithManager,
  IStateSchema,
} from "./config/stateSchema";
import { createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
  StoreProvider,
  createReduxStore,
  IStateSchema,
  IReduxStoreWithManager,
};
