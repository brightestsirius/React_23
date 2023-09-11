const { store } = require(`./store/store`);

const {
  actionCounterIncrement,
  actionCounterDecrement,
  actionCounterSet,
} = require(`./store/actions`);

console.log(store.getState());

store.dispatch(actionCounterIncrement);
console.log(store.getState());

store.dispatch(actionCounterDecrement);
console.log(store.getState());

store.dispatch(actionCounterSet(400));
console.log(store.getState());

store.dispatch(actionCounterSet(500));
console.log(store.getState());

store.dispatch(actionCounterIncrement);
console.log(store.getState());

store.dispatch(actionCounterDecrement);
console.log(store.getState());