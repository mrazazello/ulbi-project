import { Reducer } from "@reduxjs/toolkit";
import {
  IReduxStoreWithManager,
  StateSchemaKeyType,
} from "app/providers/storeProvider/config/stateSchema";
import { FC, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "./useAppDispatch";

export type ReducerListType = {
  [name in StateSchemaKeyType]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeyType, Reducer];

interface IProps {
  reducers: ReducerListType;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IProps> = (props) => {
  const { children, reducers, removeAfterUnmount = false } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as IReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
