import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
