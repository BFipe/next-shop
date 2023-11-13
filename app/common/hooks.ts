import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../reduxCore/store";

//Redux
/**
 * dispatch для TS.
 *
 *
 * @example
 * const dispatch = useAppDispatch( action.example(params) );
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * selector для TS.
 *
 *
 * @example
 * const slice = useAppSelector( slice => slice.example );
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
