import React, { useState, useEffect } from "react";

export default function Color({liftColor}) {
  const [color, setColor] = useState(`#8BC34A`);

  const changeColor = e => {
    setColor(e.target.value)
  }

  useEffect(() => {
    liftColor(color);
  }, [color])

  return (
    <label htmlFor="color">
      <input
        id="color"
        type="color"
        defaultValue={color}
        onChange={changeColor}
      />
    </label>
  );
}
