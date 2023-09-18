import React from "react";
import "./style.sass";

import { useSelector, useDispatch } from "react-redux";

import { actionCounterDec, actionCounterInc } from "./../../store/actions";

export default function Counter() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleDec = () => dispatch(actionCounterDec);
  const handleInc = () => dispatch(actionCounterInc);

  return (
    <div className="counter__wrapper">
      <button onClick={handleDec}>-</button>
      <strong>{counter}</strong>
      <button onClick={handleInc}>+</button>
    </div>
  );
}
