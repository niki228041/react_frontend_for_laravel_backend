import { TypedUseSelectorHook } from "react-redux";
import { rootReducer } from "../store";
import { useSelector } from "react-redux";

type rootState = ReturnType<typeof rootReducer>;
export const useTypedSelector : TypedUseSelectorHook<rootState> = useSelector;