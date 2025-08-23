import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodoApi } from "./todoApi";
import type { Todo } from "../../types/todoTypes";

interface StateTodos {
  todos: Todo[];
  loading: string;
  error: string | null;
}
const initialState: StateTodos = {
  todos: [],
  loading: "idle",
  error: null,
};

export const fetchData = createAsyncThunk(
  "todo/fetchData",
  async () => {
    return await fetchTodoApi();
  }
)

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = "failed";
        state.error = "Failed to fetch todos"
      });
  }
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
