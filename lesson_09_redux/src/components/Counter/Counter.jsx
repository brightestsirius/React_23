import React from "react";
import "./style.sass";

import { useSelector, useDispatch } from "react-redux";

import { actionCounterDec, actionCounterInc } from "./../../store/counter/actions";

export default function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter__wrapper">
      <button onClick={() => dispatch(actionCounterDec)}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(actionCounterInc)}>+</button>
    </div>
  );
}