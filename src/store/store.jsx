import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./../store/todoSlice";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
