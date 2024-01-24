import { Reducer } from "@reduxjs/toolkit";
import {
  IReduxStoreWithManager,
  IStateSchema,
  StateSchemaKeyType,
} from "app/providers/storeProvider/config/stateSchema";
import { FC, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";

export type ReducerListType = {
  [name in StateSchemaKeyType]?: Reducer<NonNullable<IStateSchema[name]>>;
};

interface IProps {
  reducers: ReducerListType;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as IReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeyType];
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKeyType, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeyType);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
