import React from "react";

import { Provider } from "react-redux";
import store from "./store/store";

import List from "./components/List/List";

export default function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}