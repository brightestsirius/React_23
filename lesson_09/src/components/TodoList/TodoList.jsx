import React, { useContext } from "react";

import { Link } from "react-router-dom";

import todoContext from "../../contexts/todoContext";

export default function TodoList() {
  let { state, handleItemDelete } = useContext(todoContext);

  return state.todo.length ? (
    <ul>
      {state.todo.map((item, index) => (
        <li key={index}>
          {item.title} <Link to={String(item.id)}>Read more</Link>
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
