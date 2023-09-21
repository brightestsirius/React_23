import React from "react";

import { Provider } from "react-redux";
import store from "./store/store";

import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";

export default function App() {
  return (
    <Provider store={store}>
      <TodoFilter />
      <TodoList />
    </Provider>
  );
}