import React from "react";
import { Provider } from "react-redux";

import Counter from "./components/Counter/Counter";
import CounterData from "./components/CounterData/CounterData";
import CounterForm from "./components/CounterForm/CounterForm";
import TodoList from "./components/TodoList/TodoList";

import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <CounterForm />
      <CounterData />
      <hr></hr>
      <TodoList />
    </Provider>
  );
}
