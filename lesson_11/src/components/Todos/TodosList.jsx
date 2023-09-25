import React, { useEffect } from "react";
import './style.sass'

import { useSelector, useDispatch } from "react-redux";

import thunks from "./../../store/todos/thunks";
import {sortByCompleted, sortByFilter} from './../../store/todos/reducer';

import {Link} from 'react-router-dom'

export default function TodosList() {
  const todos = useSelector((state) => state.todos.todos);
  const sortedTodos = useSelector(state => state.todos.sortedTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodos());
  }, []);

  useEffect(() => {
    dispatch(sortByCompleted());
  }, [todos])

  useEffect(() => {
    dispatch(sortByFilter(filter));
  }, [filter, todos])

  const handleItemDelete = (id) => dispatch(thunks.fetchTodosItemDelete(id));

  return sortedTodos.length ? (
    !isLoading ? (
      <ul>
        {sortedTodos.map((item, index) => (
          <li key={index} className={item.completed ? `item--completed` : `item--progress`}>
            <Link to={String(item.id)}>{item.title}</Link>{" "}
            <button onClick={() => handleItemDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    ) : (
      <p>Todos is loading...</p>
    )
  ) : isLoading ? (
    <p>Todos is loading...</p>
  ) : null;
}
