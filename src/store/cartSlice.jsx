import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Jacket",
    price: 149.99,
  },
  {
    name: "Cargo",
    price: 49.99,
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {
      return state.filter((s) => s.name !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
