import React, { useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import todoContext from "../../contexts/todoContext";

export default function TodoItem() {
  const navigation = useNavigate();

  const { todoId } = useParams();
  const {
    state: { todo },
    handleItemDelete,
  } = useContext(todoContext);

  const item = todo.find((item) => item.id === +todoId);

  const handleDelete = (id) => {
    handleItemDelete(id);
    navigation(`/todo`);
  };

  return item ? (
    <>
      <ul>
        {Object.keys(item).map((key, index) => (
          <li key={index}>
            {key}: {String(item[key])}
          </li>
        ))}
      </ul>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </>
  ) : null;
}
