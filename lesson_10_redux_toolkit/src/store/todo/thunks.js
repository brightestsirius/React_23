import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
    response = await request.json();

  return response.slice(0, 5);
});

export { fetchTodo };