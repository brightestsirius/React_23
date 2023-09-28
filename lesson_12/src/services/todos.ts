import axios from 'axios';
const API = `https://jsonplaceholder.typicode.com/todos`;

import { idType, TodosItem } from './../constants/todos'

const todos = {
    get: (id?: idType) => axios(id ? API + `/${id}` : API).then(({ data }) => data),
    delete: (id?: idType) => axios.delete(API + `/${id}`).then(({ data }) => data),
    patch: (id?: idType, payload?: TodosItem) => axios.patch(API + `/${id}`, payload).then(({ data }) => data),
    post: (payload?: TodosItem) => axios.post(API, payload).then(({ data }) => data)
}

export default todos;