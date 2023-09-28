import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/store'

import thunks from '../../store/todos/thunks'

import { id } from '../../types/todos'

export default function Todos(){
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodos());
  }, [])

  const handleItemDelete = (id: id):void => {
    dispatch(thunks.fetchTodosItemDelete(id));
  }

  return todos.length ? <ul>
    {todos.map((item, index) => <li key={index}>
      <Link to={`/todo?id=${item.id}&completed=${item.completed}`}>{item.title}</Link> <button onClick={() => handleItemDelete(item.id)}>Delete</button>
    </li>)}
  </ul> : null;
}
