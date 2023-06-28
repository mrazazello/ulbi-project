import type { ICounterSchema } from "./model/counter";
import { counterActions, counterReducer } from "./model/slice/counterSlice";
import { Counter } from "./ui/Counter";

export { counterReducer, counterActions, Counter, ICounterSchema };
