import React, { useContext } from "react";

import TodoContext from "../../contexts/TodoContext";

export default function TodoStatistics() {
  const { state } = useContext(TodoContext);

  return state.todo.length ? (
    <ul>
      <li>All: {state.todo.length}</li>
      <li>Completed: {state.todo.filter((item) => item.completed).length}</li>
      <li>
        In progress: {state.todo.filter((item) => !item.completed).length}
      </li>
    </ul>
  ) : null;
}
