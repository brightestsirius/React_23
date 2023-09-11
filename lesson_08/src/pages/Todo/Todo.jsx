import React, { useState } from "react";
import "./style.sass"

import TodoList from "../../components/TodoList/TodoList";
import TodoFilter from "../../components/TodoFilter/TodoFilter";
import TodoColorPicker from "../../components/TodoColorPicker/TodoColorPicker";

import ListFilterContext from "../../contexts/ListFilterContext";
import ListColorContext from "../../contexts/ListColorContext"

export default function Todo() {
  const [filter, setFilter] = useState("all");
  const [color, setColor] = useState("#000");

  return (
    <ListColorContext.Provider value={{color, setColor}}>
      <TodoColorPicker />

      <ListFilterContext.Provider value={{filter, setFilter}}>
        <TodoFilter />
        <TodoList />
      </ListFilterContext.Provider>

    </ListColorContext.Provider>
  );
}
