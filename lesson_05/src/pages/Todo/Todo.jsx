import React, { useState } from "react";

import Container from "@mui/material/Container";

import TodoForm from "../TodoForm/TodoForm";
import TodoColorPicker from "../TodoColorPicker/TodoColorPicker";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoList from "../TodoList/TodoList";

import ThemeContext from '../../context/ThemeContext';

import { TODO_COLOR } from "../../contstants/todoConstants";

import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Todo() {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState({});

  const [color, setColor] = useLocalStorage(`color`, TODO_COLOR);

  return (
    <ThemeContext.Provider value={{color, setColor}}>
    <Container maxWidth="sm" sx={{mx:'auto', my: 3}}>
      <TodoForm liftingNewTodo={setNewTodo} />
      <TodoColorPicker />
      <TodoFilter liftingFilter={setFilter} />
      <TodoList newTodo={newTodo} filter={filter} />
    </Container>
    </ThemeContext.Provider>
  );
}
