import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './../../store/store'

import { TodosItem, id } from './../../types/todos'

import thunks from '../../store/todos/thunks';

export default function Todos() {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodos());
  }, [])

  const handleItemDelete = (id: id) => {
    dispatch(thunks.fetchTodosItemDelete(id));
  }

  const handleItemCompleted = (item: TodosItem) => {
    console.log(item);
  }

  return todos.length ? <ul>
    {todos.map((item: TodosItem, index: number) => <li key={index}>{item.title} <input type="checkbox" defaultChecked={item.completed} onChange={() => handleItemCompleted(item)} /> <button onClick={() => handleItemDelete(item.id)}>Delete</button></li>)}
  </ul> : null;
}
