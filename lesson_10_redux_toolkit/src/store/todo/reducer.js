import { createSlice } from "@reduxjs/toolkit";

import { fetchTodo } from "./thunks";

const initialState = {
  todo: [],
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteItem: (state, { payload }) => {
      state.todo = state.todo.filter((item) => item.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, { payload }) => {
      state.todo = payload;
    });
  },
});

export const { deleteItem } = counterSlice.actions;

export default counterSlice.reducer;