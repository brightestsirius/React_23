import axios from 'axios';
const API = `https://jsonplaceholder.typicode.com/todos`;

import { id, TodosItem } from '../types/todos'

const todos = {
    get: (id?: id) => axios(id ? API + `/${id}` : API).then(({ data }) => data),
    delete: (id: id) => axios.delete(API + `/${id}`).then(({ data }) => data),
    patch: (id: id, payload: TodosItem) => axios.patch(API + `/${id}`, payload).then(({ data }) => data),
    post: (payload: TodosItem) => axios.post(API, payload).then(({ data }) => data)
}

export default todos;