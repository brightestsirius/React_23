import React from "react";

import TodoList from "./../components/TodoList/TodoList";
import TodoStatistics from "./../components/TodoStatistics/TodoStatistics";

export default function RouteTodo() {
  return (
    <>
      <TodoStatistics />
      <TodoList />
    </>
  );
}