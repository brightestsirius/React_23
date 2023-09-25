import { createSlice } from '@reduxjs/toolkit'

type TodosItem = {
  id: number;
  title: string;
  userId: number;
  completed: Boolean;
}

interface ITodos{
  todos: TodosItem[],
  sortedTodos: TodosItem[],
  isLoading: boolean
}

const initialState = {
  todos: [],
  sortedTodos: [],
  isLoading: false
}

import thunks from './thunks'

import {moduleName} from './constants'

export const todosSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    sortByCompleted: (state, {payload}) => {
      state.todos = state.todos.sort((a,b) => b.completed-a.completed);
    },
    sortByFilter: (state, {payload}) => {
      switch(payload){
        case `completed`:
          state.sortedTodos = state.todos.filter(item => item.completed);
          break;
        case `progress`:
          state.sortedTodos = state.todos.filter(item => !item.completed);
          break;
        default:
          state.sortedTodos = state.todos;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchTodos.fulfilled, (state, {payload}) => {
        state.todos = payload.slice(0,10);
        state.isLoading = false;
      })
      .addCase(thunks.fetchTodos.pending, (state, {payload}) => {
        state.isLoading = true;
      })

      .addCase(thunks.fetchTodosItemDelete.fulfilled, (state, {payload}) => {
        state.todos = state.todos.filter(item => item.id !== payload);
      })
  },
})

// Action creators are generated for each case reducer function
export const { sortByCompleted, sortByFilter } = todosSlice.actions

export default todosSlice.reducer