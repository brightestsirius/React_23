import todo from "./../../services/todo";

import {
  todoSetAction,
  todoItemDeleteAction,
  todoItemChangeAction,
} from "./actions";

const todoSetThunk = () => {
  return async (dispatch) => {
    let response = await todo.get();
    dispatch(todoSetAction(response.slice(0, 10)));
  };
};

const todoItemDeleteThunk = (id) => {
  return async (dispatch) => {
    await todo.delete(id);
    dispatch(todoItemDeleteAction(id));
  };
};

const todoItemCompletedThunk = (item) => {
  return async (dispatch) => {
    let response = await todo.patch(item.id, {completed: !item.completed});
    dispatch(todoItemChangeAction(response));
  };
};

export { todoSetThunk, todoItemDeleteThunk, todoItemCompletedThunk };