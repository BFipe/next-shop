import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}
const counterState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state, action: PayloadAction<number | undefined>) {
      action.payload ? (state.value += action.payload) : state.value++;
    },
    decrement(state, action: PayloadAction<number | undefined>) {
      action.payload ? (state.value -= action.payload) : state.value--;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const CounterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;
