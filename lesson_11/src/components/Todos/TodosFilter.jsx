import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "./../../store/filter/reducer";

export default function TodosFilter() {
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const handleFilter = (e) => dispatch(setFilter(e.target.value));

  return (
    <select defaultValue={filter} onChange={handleFilter}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="progress">In progress</option>
    </select>
  );
}
