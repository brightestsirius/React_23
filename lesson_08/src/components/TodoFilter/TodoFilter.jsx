import React, { useState, useEffect } from "react";

export default function TodoFilter({ liftingFilter }) {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <div className="wrapper">
      <select defaultValue={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="non-completed">non-completed</option>
      </select>
    </div>
  );
}
