import React, {useState} from 'react'

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';



import TodoForm from './TodoForm/TodoForm'
import TodoFilter from './TodoFilter/TodoFilter'
import TodoColorPicker from './TodoColorPicker/TodoColorPicker'
import TodoStatistics from './TodoStatistics/TodoStatistics'
import TodoList from './TodoList/TodoList'

export default function Todo() {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState();
  const [color, setColor] = useState();
  const [list, setList] = useState();

  return (
    <Container maxWidth="sm" sx={{my: 2}}>
      <Paper elevation={3} sx={{p: 2}}>
        <TodoForm liftingNewTodo={setNewTodo} />
        <TodoFilter liftingFilter={setFilter} />
        <TodoStatistics list={list} />
        <TodoColorPicker liftingColor={setColor} />
        <TodoList newTodo={newTodo} filter={filter} color={color} liftingList={setList} />
      </Paper>
    </Container>
  )
}
