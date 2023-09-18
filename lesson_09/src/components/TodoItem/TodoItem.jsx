import React, { useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import TodoContext from "./../../contexts/TodoContext";

export default function TodoItem() {
  const navigation = useNavigate();

  const { id } = useParams();
  const {
    state: { todo },
    handleItemDelete
  } = useContext(TodoContext);
  let todoItem = todo.find((item) => item.id === +id);

  const handleDelete = id => {
    handleItemDelete(id);
    navigation(`/todo`);
  }

  return todoItem ? (
    <div>
      <ul>
        {Object.keys(todoItem).map((key, index) => (
          <li key={index}>
            {key}: {String(todoItem[key])}
          </li>
        ))}
      </ul>
      <button onClick={() => handleDelete(todoItem.id)}>Delete item</button>
    </div>
  ) : null;
}
