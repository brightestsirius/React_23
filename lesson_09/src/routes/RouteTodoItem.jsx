import React from 'react'

import {useNavigate} from 'react-router-dom'

import TodoItem from './../components/TodoItem/TodoItem'

export default function RouteTodoItem() {
  const navigation = useNavigate();

  return (
    <>
      <TodoItem />
      <hr></hr>
      <button onClick={() => navigation(`/todo`)}>Return to Todo List</button>
    </>
  )
}
