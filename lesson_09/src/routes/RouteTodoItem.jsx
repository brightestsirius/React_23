import React from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./../components/TodoItem/TodoItem";

export default function RouteTodoItem() {
  const navigation = useNavigate();

  const handleClick = () => navigation(`/todo`);

  return (
    <>
      <TodoItem />
      <button onClick={handleClick}>Back to Todo</button>
    </>
  );
}
