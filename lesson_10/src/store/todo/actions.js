// action types
const TODO_ITEM_DELETE_ACTION = `TODO_ITEM_DELETE_ACTION`;
const TODO_ITEM_CHANGE_ACTION = `TODO_ITEM_CHANGE_ACTION`;
const TODO_SET_ACTION = `TODO_SET_ACTION`;

// actions
const todoItemDeleteAction = (payload) => ({
  type: TODO_ITEM_DELETE_ACTION,
  payload,
});

const todoSetAction = (payload) => ({ type: TODO_SET_ACTION, payload });

const todoItemChangeAction = (payload) => ({
  type: TODO_ITEM_CHANGE_ACTION,
  payload,
});

export { TODO_ITEM_DELETE_ACTION, TODO_SET_ACTION, TODO_ITEM_CHANGE_ACTION };
export { todoItemDeleteAction, todoSetAction, todoItemChangeAction };
