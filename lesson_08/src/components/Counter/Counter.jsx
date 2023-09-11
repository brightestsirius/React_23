import React, { useReducer, useState } from "react";
import "./style.sass";

export default function Counter() {
  const [counterInput, setCounterInput] = useState();

  const INITIAL_STATE = { counter: 100, color: `crimson` };

  // action types
  const ACTION_COUNTER_DECREMENT = `counter decrement`;
  const ACTION_COUNTER_INCREMENT = `counter increment`;
  const ACTION_COUNTER_SET = `counter set`;

  const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
      case ACTION_COUNTER_DECREMENT:
        return { ...state, counter: state.counter - 1 };
      case ACTION_COUNTER_INCREMENT:
        return { ...state, counter: state.counter + 1 };
      case ACTION_COUNTER_SET:
        return { ...state, counter: payload};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleDecrement = () => dispatch({ type: ACTION_COUNTER_DECREMENT });

  const handleIncrement = () => dispatch({ type: ACTION_COUNTER_INCREMENT });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION_COUNTER_SET, payload: counterInput });
  };

  return (
    <div className="counter" style={{color: state.color}}>
      <button onClick={handleDecrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={handleIncrement}>+</button>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          defaultValue={counterInput}
          onChange={(e) => setCounterInput(+e.target.value)}
        />
      </form>
    </div>
  );
}
