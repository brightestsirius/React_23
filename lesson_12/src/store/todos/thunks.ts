import { createAsyncThunk } from '@reduxjs/toolkit'

import { moduleName } from './constants'
import { id } from './../../types/todos'

import todos from './../../services/todos'

const thunks = {
    fetchTodos: createAsyncThunk(
        `${moduleName}/fetchTodos`,
        async () => await todos.get()
    ),
    fetchTodosItemDelete: createAsyncThunk(
        `${moduleName}/fetchTodosItemDelete`,
        async (id: id) => {
            await todos.delete(id);
            return id;
        }
    )
}

export default thunks;