const { store } = require("./store/store");
const { actionCounterIncrement, actionCounterSet } = require("./store/actions");

console.log(store.getState());

store.dispatch(actionCounterIncrement);
console.log(store.getState());

store.dispatch(actionCounterSet);
console.log(store.getState());
