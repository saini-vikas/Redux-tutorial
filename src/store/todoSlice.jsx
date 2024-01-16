import { createSlice } from "@reduxjs/toolkit";

const initialToDo = [];

const todoSlice = createSlice({
  name: "todo",
  initialToDo,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
  toggleTodo: (state, action) => {
    state.find(action.payload.id)[0].active = false;
  },
});

export const { add, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
