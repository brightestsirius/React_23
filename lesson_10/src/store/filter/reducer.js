import {
  FILTER_SET_ACTION
} from "./actions";

import {TODO_FILTER_ALL} from './../../constants/todo'

const initialState = {
  filter: TODO_FILTER_ALL
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_SET_ACTION:
      return {...state, filter: payload}
    default:
      return state;
  }
};

export default reducer;
