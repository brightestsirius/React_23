// action types
const ACTION_COUNTER_DEC = `ACTION_COUNTER_DEC`;
const ACTION_COUNTER_INC = `ACTION_COUNTER_INC`;
const ACTION_COUNTER_SET = `ACTION_COUNTER_SET`;

// actions
const actionCounterDec = { type: ACTION_COUNTER_DEC };
const actionCounterInc = { type: ACTION_COUNTER_INC };
const actionCounterSet = (payload) => ({ type: ACTION_COUNTER_SET, payload });

export {
  ACTION_COUNTER_DEC,
  ACTION_COUNTER_INC,
  ACTION_COUNTER_SET,
  actionCounterDec,
  actionCounterInc,
  actionCounterSet,
};
