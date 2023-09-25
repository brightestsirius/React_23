import React from "react";

import TodosList from "./../components/Todos/TodosList";
import TodosFilter from './../components/Todos/TodosFilter'

export default function DashboardRoute() {
  return (
    <div>
      <h3>Dashboard Route</h3>
      <TodosFilter />
      <TodosList />
    </div>
  );
}
