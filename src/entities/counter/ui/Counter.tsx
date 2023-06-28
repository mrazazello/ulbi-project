import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter: FC = () => {
  const counter = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div>
      <Button
        theme={ButtonThemeEnum.PRIMARY}
        onClick={incrementHandler}
        data-testid="incremen-btn"
      >
        {counter}
      </Button>
    </div>
  );
};
