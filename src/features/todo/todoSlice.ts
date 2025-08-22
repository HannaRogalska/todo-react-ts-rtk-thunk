import { createSlice } from "@reduxjs/toolkit";
import type { Todos } from "../../types/todoTypes";

const initialState: Todos = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
    reducers: {
      addTodo: (state, action) => {
        const newTodo = {
          id: Date.now(),
          title: action.payload,
          isCompleted: false,
        };
        state.todos.push(newTodo);
      }
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer