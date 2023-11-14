"use client";

import { useAppDispatch, useAppSelector } from "../common/hooks";
import { CounterActions } from "../reduxCore/features/counter/CounterSlice";

export default function SimpleCounter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((store) => store.counter);

  return (
    <button onClick={() => dispatch(CounterActions.increment())}>
      {count.value}
    </button>
  );
}