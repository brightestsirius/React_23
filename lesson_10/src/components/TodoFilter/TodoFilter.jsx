import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { filterSetAction } from "./../../store/filter/actions";

import {
  TODO_FILTER_ALL,
  TODO_FILTER_COMPLETED,
  TODO_FILTER_PROGRESS,
} from "./../../constants/todo";

export default function TodoFilter() {
  const filter = useSelector((store) => store.filter.filter);
  const dispatch = useDispatch();

  const handleFilter = (e) => dispatch(filterSetAction(e.target.value));

  return (
    <select
      style={{ margin: `10px` }}
      defaultValue={filter}
      onChange={handleFilter}
    >
      <option value={TODO_FILTER_ALL}>All</option>
      <option value={TODO_FILTER_COMPLETED}>Completed</option>
      <option value={TODO_FILTER_PROGRESS}>In progress</option>
    </select>
  );
}