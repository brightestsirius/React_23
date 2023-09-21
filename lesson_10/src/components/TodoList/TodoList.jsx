import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  todoSetThunk,
  todoItemDeleteThunk,
  todoItemCompletedThunk,
} from "./../../store/todo/thunks";

import {
  TODO_FILTER_COMPLETED,
  TODO_FILTER_PROGRESS,
} from "./../../constants/todo";

export default function TodoList() {
  const todo = useSelector((state) => state.todo.todo);
  const filter = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  const handleItemDelete = (e, id) => {
    e.stopPropagation();
    dispatch(todoItemDeleteThunk(id));
  };

  const handleItemCompleted = (item) => dispatch(todoItemCompletedThunk(item));

  useEffect(() => {
    dispatch(todoSetThunk());
  }, []);

  const filteredTodo = useMemo(
    () =>
      todo.filter((item) => {
        switch (filter) {
          case TODO_FILTER_COMPLETED:
            return item.completed;
          case TODO_FILTER_PROGRESS:
            return !item.completed;
          default:
            return item;
        }
      }),
    [filter, todo]
  );

  return filteredTodo.length ? (
    <ul>
      {filteredTodo.map((item, index) => (
        <li
          key={index}
          style={{ color: item.completed ? `green` : `red` }}
          onClick={() => handleItemCompleted(item)}
        >
          {item.title}{" "}
          <button onClick={(e) => handleItemDelete(e, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
