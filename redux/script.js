const {createStore} = require(`redux`);

// action types
const ACTION_COUNTER_INCREMENT = `ACTION_COUNTER_INCREMENT`;
const ACTION_COUNTER_DECREMENT = `ACTION_COUNTER_DECREMENT`;
const ACTION_COUNTER_SET = `ACTION_COUNTER_SET`;

// action creator
const actionCreator = (type="", payload) => {
    let action = {type};
    if(payload) action.payload = payload;
    return action;
}

// actions
const actionCounterIncrement = actionCreator(ACTION_COUNTER_INCREMENT);
const actionCounterDecrement = actionCreator(ACTION_COUNTER_DECREMENT);
const actionCounterSet = actionCreator(ACTION_COUNTER_SET, 10);

const INITIAL_STATE = {counter: 0};

const reducer = (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case ACTION_COUNTER_INCREMENT:
            return {...state, counter: state.counter+1}
        case ACTION_COUNTER_DECREMENT:
            return {...state, counter: state.counter-1}
        case ACTION_COUNTER_SET:
            return {...state, counter: payload}
        default:
            return state;
    }
}

const store = createStore(reducer, INITIAL_STATE);

console.log(store.getState());

store.dispatch(actionCounterIncrement);
console.log(store.getState());

store.dispatch(actionCounterDecrement);
console.log(store.getState());

store.dispatch(actionCounterSet);
console.log(store.getState());

store.dispatch(actionCounterIncrement);
console.log(store.getState());