import { createSlice } from '@reduxjs/toolkit'

import { TodosItem } from '../../types/todos'

import { moduleName } from './constants'

import thunks from './thunks'

interface TodosState {
    todos: TodosItem[]
}

const initialState: TodosState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: moduleName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(thunks.fetchTodos.fulfilled, (state, { payload }) => {
                state.todos = payload.slice(0, 10);
            })
            .addCase(thunks.fetchTodosItemDelete.fulfilled, (state, { payload }) => {
                state.todos = state.todos.filter(item => item.id !== payload)
            })
    }
})

export default todosSlice.reducer