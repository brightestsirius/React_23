import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";

import {todoSetThunk, todoItemDeleteThunk, todoItemCompletedThunk} from './../../store/todo/thunks';

import { TODO_FILTER_COMPLETED, TODO_FILTER_PROGRESS } from './../../constants/todo'

export default function TodoList() {
  const dispatch = useDispatch();

  let todo = useSelector((store) => store.todo.todo);
  let filter = useSelector((store) => store.filter.filter);

  const handleItemDelete = (event, id) => {
    event.stopPropagation();
    dispatch(todoItemDeleteThunk(id));;
  }

  const handleItemCompleted = item => dispatch(todoItemCompletedThunk(item));

  useEffect(() => {
    dispatch(todoSetThunk());
  }, [])

  const filteredTodo = todo.filter(item => {
    switch(filter){
      case TODO_FILTER_COMPLETED:
        return item.completed;
      case TODO_FILTER_PROGRESS:
        return !item.completed;
      default:
        return item;
    }
  })

  return filteredTodo.length ? (
    <ul>
      {filteredTodo.map((item, index) => (
        <li key={index} style={{color: item.completed ? `green` : `red`}} onClick={() => handleItemCompleted(item)}>
          {item.title}{" "}
          <button onClick={(event) => handleItemDelete(event, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
