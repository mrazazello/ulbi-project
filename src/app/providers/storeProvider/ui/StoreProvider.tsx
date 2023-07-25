import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { FC } from "react";
import { Provider } from "react-redux";
import { IStateSchema } from "../config/stateSchema";
import { createReduxStore } from "../config/store";

interface IProps {
  className?: string;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: FC<IProps> = (props) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
