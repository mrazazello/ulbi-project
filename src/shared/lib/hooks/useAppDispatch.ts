import { AppDispatchType } from "app/providers/storeProvider/config/store";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatchType = useDispatch;
