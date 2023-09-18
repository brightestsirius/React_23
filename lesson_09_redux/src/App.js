import React from "react";

import {Provider} from 'react-redux';

import store from './store/store'

import Counter from "./components/Counter/Counter";
import CounterData from "./components/CounterData/CounterData";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <CounterData />
    </Provider>
  );
}
