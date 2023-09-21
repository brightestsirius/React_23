import React from "react";

import { useSelector, useDispatch } from "react-redux";

import "./style.sass";

import {
  TODO_FILTER_ALL,
  TODO_FILTER_COMPLETED,
  TODO_FILTER_PROGRESS,
} from "./../../constants/todo";

import { filterSetAction } from "./../../store/filter/actions";

export default function TodoFilter() {
  const filter = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  const handleFilter = (e) => dispatch(filterSetAction(e.target.value));

  return (
    <select defaultValue={filter} onChange={handleFilter}>
      <option value={TODO_FILTER_ALL}>all</option>
      <option value={TODO_FILTER_COMPLETED}>completed</option>
      <option value={TODO_FILTER_PROGRESS}>progress</option>
    </select>
  );
}
