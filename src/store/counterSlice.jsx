import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    increaseByAmount: (state, action) => {
      state.count += action.payload;
    },
    decreaseByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increase, decrease, decreaseByAmount, increaseByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
