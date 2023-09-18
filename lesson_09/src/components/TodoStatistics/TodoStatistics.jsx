import React, { useContext } from "react";

import todoContext from "./../../contexts/todoContext";

export default function TodoStatistics() {
  const { state:{todo} } = useContext(todoContext);

  return (
    <ul>
      <li>All: {todo.length}</li>
      <li>Completed: {todo.filter((item) => item.completed).length}</li>
      <li>In progress: {todo.filter((item) => !item.completed).length}</li>
    </ul>
  );
}
