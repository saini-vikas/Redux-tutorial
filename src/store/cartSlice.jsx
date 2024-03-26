import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ name: "Denim", quantity: 3, price: 99.99 }];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.find((p) => p.name === action.payload.name)) {
        state.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const prod = state.find((p) => p.name === action.payload.name);
      prod.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const prod = state.find((p) => p.name === action.payload.name);
      if (prod.quantity == 1) {
        return state.filter((p) => p.name !== action.payload.name);
      } else {
        prod.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((s) => s.name !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
