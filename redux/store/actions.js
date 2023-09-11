// actionCreator
const actionCreator = (type, payload) => {
  let action = { type };
  if (payload) action.payload = payload;
  return action;
};

// action types
const ACTION_COUNTER_DECREMENT = `counter decrement`;
const ACTION_COUNTER_INCREMENT = `counter increment`;
const ACTION_COUNTER_SET = `counter set`;

// actions
const actionCounterIncrement = actionCreator(ACTION_COUNTER_INCREMENT); // {type: ACTION_COUNTER_INCREMENT}
const actionCounterDecrement = actionCreator(ACTION_COUNTER_DECREMENT); // {type: ACTION_COUNTER_DECREMENT}
const actionCounterSet = (payload) =>
  actionCreator(ACTION_COUNTER_SET, payload); // {type: ACTION_COUNTER_SET, payload}

module.exports = {
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_SET,
  actionCounterIncrement,
  actionCounterDecrement,
  actionCounterSet,
};
