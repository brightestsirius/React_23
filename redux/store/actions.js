// action types
const ACTION_COUNTER_INCREMENT = `ACTION_COUNTER_INCREMENT`;
const ACTION_COUNTER_SET = `ACTION_COUNTER_SET`;

// actions
const actionCounterIncrement = {type: ACTION_COUNTER_INCREMENT};
const actionCounterSet = {type: ACTION_COUNTER_SET, payload: 10};

module.exports = {
    ACTION_COUNTER_INCREMENT,
    ACTION_COUNTER_SET,
    actionCounterIncrement,
    actionCounterSet
}