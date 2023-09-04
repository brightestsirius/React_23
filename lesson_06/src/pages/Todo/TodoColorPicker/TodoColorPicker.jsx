import React, { useState, useEffect, useCallback } from "react";
import "./style.sass";

import { TODO_COLOR } from "./../../../constants/todoConstants";

import useLocalStorage from '../../../hooks/useLocalStorage';

export default function TodoColorPicker({ liftingColor }) {
  const [color, setColor] = useLocalStorage(`color`, TODO_COLOR);

  const handleChange = (e) => setColor(e.target.value);

  useEffect(() => {
    liftingColor(color);
  }, [color]);

  const colorTitle = useCallback(() => {
    return <h3>Color: {color}</h3>;
  }, [color]);

  return (
    <div className="todo__colorPicker">
      {colorTitle()}
      <label htmlFor="">
        Select color:{" "}
        <input type="color" defaultValue={color} onChange={handleChange} />
      </label>
    </div>
  );
}
