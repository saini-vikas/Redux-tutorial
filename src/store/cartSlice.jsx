import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const prod = state.find((p) => p.name === action.payload.name);
      prod.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const prod = state.find((p) => p.name === action.payload.name);
      prod.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      return state.filter((s) => s.name !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
