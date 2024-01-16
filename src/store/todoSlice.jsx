import { createSlice } from "@reduxjs/toolkit";

const initialToDo = [{ title: "Grocery", id: 0, completed: false }];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialToDo,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        title: action.payload,
        id: state.length,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      console.log(action.id);
      const todo = state.find((t) => t.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { add, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
