// action types
const FILTER_SET_ACTION = `FILTER_SET_ACTION`;

// actions
const filterSetAction = filterValue => {
  return {type: FILTER_SET_ACTION, payload: filterValue}
}

export { FILTER_SET_ACTION };

export { filterSetAction };
