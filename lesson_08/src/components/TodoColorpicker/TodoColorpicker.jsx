import React, { useState, useEffect } from "react";

export default function TodoColorpicker({ liftingColor }) {
  const [color, setColor] = useState(`crimson`);

  useEffect(() => {
    liftingColor(color);
  }, [color]);

  return (
    <div className="wrapper">
      <input
        type="color"
        defaultValue={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
