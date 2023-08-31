import React, {useState} from 'react'

import TodoForm from './TodoForm/TodoForm'
import TodoFilter from './TodoFilter/TodoFilter'
import TodoList from './TodoList/TodoList'

export default function Todo() {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState();

  return (
    <>
      <TodoForm liftingNewTodo={setNewTodo} />
      <TodoFilter liftingFilter={setFilter} />
      <TodoList newTodo={newTodo} filter={filter} />
    </>
  )
}
