import { createAsyncThunk } from "@reduxjs/toolkit";

import todos from "./../../services/todos";

import { moduleName } from "./constants";

const thunks = {
  fetchTodos: createAsyncThunk(
    `${moduleName}/fetchTodos`,
    async () => await todos.get()
  ),
  fetchTodosItemDelete: createAsyncThunk(
    `${moduleName}/fetchTodosItemDelete`,
    async (id) => {
      await todos.delete(id);
      return id;
    }
  ),
};

export default thunks;
