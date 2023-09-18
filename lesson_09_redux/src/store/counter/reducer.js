import {
  ACTION_COUNTER_DEC,
  ACTION_COUNTER_INC,
  ACTION_COUNTER_SET,
} from "./actions";

const INITIAL_STATE = {
  counter: 0,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_COUNTER_DEC:
      return { ...state, counter: state.counter - 1 };
    case ACTION_COUNTER_INC:
      return { ...state, counter: state.counter + 1 };
    case ACTION_COUNTER_SET:
      return { ...state, counter: payload };
    default:
      return state;
  }
};

export default reducer;
