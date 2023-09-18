import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { actionCounterSet } from "./../../store/counter/actions";

export default function CounterForm() {
  const [counterValue, setCounterValue] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionCounterSet(counterValue));
  };

  return (
    <form align="center" onSubmit={handleSubmit}>
      <input type="number" onChange={(e) => setCounterValue(+e.target.value)} />
    </form>
  );
}
