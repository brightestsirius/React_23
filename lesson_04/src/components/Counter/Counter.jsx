import React, { useState } from "react";
import './style.sass';

export default function Counter({ counterDefault }) {
  const [counter, setCounter] = useState(counterDefault);

  const counterDecrement = () => setCounter(counter - 1);

  const counterIncrement = () => setCounter(counter + 1);

  return (
    <div className="counter">
      <button onClick={counterDecrement}>decrement</button>
      <span>{counter}</span>
      <button onClick={counterIncrement}>increment</button>
    </div>
  );
}