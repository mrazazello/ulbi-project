import { useState } from "react";
import classes from "./counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3>{counter}</h3>
      <button className={classes.btn} onClick={() => setCounter(counter + 1)}>
        add
      </button>
    </>
  );
};

export default Counter;
