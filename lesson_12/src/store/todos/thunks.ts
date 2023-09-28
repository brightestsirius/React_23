import { createAsyncThunk } from '@reduxjs/toolkit'

import { moduleName } from './constants'
import { idType } from '../../constants/todos'

import todos from '../../services/todos'

const thunks = {
    fetchTodos: createAsyncThunk(
        `${moduleName}/fetchTodos`,
        async () => await todos.get()
    ),
    fetchTodosItemDelete: createAsyncThunk(
        `${moduleName}/fetchTodosItemDelete`,
        async (id: idType) => {
            await todos.get(id);
            return id;
        }
    )
}

export default thunks