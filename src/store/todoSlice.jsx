import { createSlice } from "@reduxjs/toolkit";

const initialToDo = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialToDo,
  reducers: {},
});

export const { add, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
