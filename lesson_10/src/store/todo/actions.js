// action types
const TODO_ITEM_DELETE_ACTION = `TODO_ITEM_DELETE_ACTION`;
const TODO_SET_ACTION = `TODO_SET_ACTION`;
const TODO_ITEM_CHANGE_ACTION = `TODO_ITEM_CHANGE_ACTION`;

// actions
const todoItemDeleteAction = (id) => {
  return { type: TODO_ITEM_DELETE_ACTION, payload: id };
};

const todoSetAction = (list) => {
  return {type: TODO_SET_ACTION, payload: list};
}

const todoItemChangeAction = obj => {
  return {type: TODO_ITEM_CHANGE_ACTION, payload: obj};
}

export { TODO_ITEM_DELETE_ACTION, TODO_SET_ACTION, TODO_ITEM_CHANGE_ACTION };

export { todoItemDeleteAction, todoSetAction, todoItemChangeAction };
