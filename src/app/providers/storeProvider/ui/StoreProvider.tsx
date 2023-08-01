import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { FC } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReduxStore } from "..";
import { IStateSchema } from "../config/stateSchema";

interface IProps {
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: FC<IProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
