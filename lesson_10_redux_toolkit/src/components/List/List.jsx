import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { deleteItem } from "./../../store/todo/reducer";

import { fetchTodo } from "./../../store/todo/thunks";

export default function List() {
  const todo = useSelector((state) => state.todo.todo);

  const dispatch = useDispatch();

  const handleItemDelete = (id) => dispatch(deleteItem(id));

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return todo.length ? (
    <ul>
      {todo.map((item, index) => (
        <li key={index}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
