import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 2,
    name: "Jacket",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 3,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 4,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
];

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducers;
