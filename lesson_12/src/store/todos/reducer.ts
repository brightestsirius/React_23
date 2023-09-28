import { createSlice } from '@reduxjs/toolkit'

import { TodosItem } from './../../constants/todos'

import { moduleName } from './constants'

import thunks from './thunks'

// Define a type for the slice state
interface TodosState {
    todos: TodosItem[]
}

// Define the initial state using that type
const initialState: TodosState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: moduleName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(thunks.fetchTodos.fulfilled, (state: TodosState, { payload }) => {
                state.todos = payload.slice(0, 10)
            })
            .addCase(thunks.fetchTodosItemDelete.fulfilled, (state: TodosState, { payload }) => {
                state.todos = state.todos.filter(item => item.id !== payload)
            })
    }
})

export default todosSlice.reducer