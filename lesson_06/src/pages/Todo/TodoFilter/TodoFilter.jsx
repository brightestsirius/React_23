import React, {useState, useEffect} from "react";
import "./style.sass";

import {
  FILTER_TODO_ALL,
  FILTER_TODO_COMPLETED,
  FILTER_TODO_PROGRESS,
} from "../../../constants/todoConstants";

export default function TodoFilter({liftingFilter}) {
  const [filter, setFilter] = useState(FILTER_TODO_ALL);

  const handleFilter = e => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <div className="todo__filter">
      <label htmlFor="">
        Filter todos:{" "}
        <select defaultValue={filter} onChange={handleFilter}>
          <option value={FILTER_TODO_ALL}>all</option>
          <option value={FILTER_TODO_COMPLETED}>completed</option>
          <option value={FILTER_TODO_PROGRESS}>progress</option>
        </select>
      </label>
    </div>
  );
}
