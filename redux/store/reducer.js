const INITIAL_STATE = {
  counter: 0,
};

const { ACTION_COUNTER_INCREMENT, ACTION_COUNTER_SET } = require("./actions");

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ACTION_COUNTER_SET:
      return { ...state, counter: payload };
    default:
      return state;
  }
};

module.exports = {
  reducer,
};
