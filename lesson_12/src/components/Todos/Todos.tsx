import React, { ChangeEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './../../store/store'

import thunks from '../../store/todos/thunks';

import { idType, TodosItem } from './../../constants/todos'

export default function Todos() {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodos());
  }, [])

  const handleItemDelete = (id: idType) => {
    dispatch(thunks.fetchTodosItemDelete(id));
  }

  const handleItemCompleted = (event: ChangeEvent, item: TodosItem) => {
    console.log(event);
    console.log(item);
  }

  return todos.length ? <ul>
    {todos.map((item, index) => <li key={index}>{item.title} <input type="checkbox" onChange={(event) => handleItemCompleted(event, item)} /> <button onClick={() => handleItemDelete(item.id)}>Delete</button></li>)}
  </ul> : null;
}