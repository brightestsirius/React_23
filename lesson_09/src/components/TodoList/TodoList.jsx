import React, { useContext } from "react";

import TodoContext from "../../contexts/TodoContext";

import {Link} from 'react-router-dom'

export default function TodoList() {
  const { state, handleItemDelete } = useContext(TodoContext);

  return state.todo.length ? (
    <ul>
      {state.todo.map((item, index) => (
        <li key={index}>
          {item.title}{" "}
          <Link to={String(item.id)}>Read more</Link>
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}