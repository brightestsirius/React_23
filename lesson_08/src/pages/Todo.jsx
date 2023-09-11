import React, { useState } from "react";

import TodoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import TodoColorpicker from "../components/TodoColorpicker/TodoColorpicker";

export default function Todo() {
  const [filter, setFilter] = useState();
  const [color, setColor] = useState();

  return (
    <div>
      <TodoColorpicker liftingColor={setColor} />
      <TodoFilter liftingFilter={setFilter} />
      <TodoList filter={filter} color={color} />
    </div>
  );
}
