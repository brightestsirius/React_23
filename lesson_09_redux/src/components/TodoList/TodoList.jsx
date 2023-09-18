import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";

import { actionTodoItemDelete, actionGetTodo } from "./../../store/todo/actions";

export default function TodoList() {
  const {todo, active} = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleItemDelete = (id) => dispatch(actionTodoItemDelete(id));

  useEffect(() => {
    dispatch(actionGetTodo());
  }, [])

  return Array.isArray(todo) && todo.length ? (
    <ul>
      {todo.map((item, index) => (
        <li key={index} style={{color: item.id===active && `crimson`}}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}