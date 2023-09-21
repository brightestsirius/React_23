import { todoSetAction, todoItemDeleteAction, todoItemChangeAction } from "./actions";

import todo from './../../services/todo';

const todoSetThunk = () => {
  return async function (dispatch) {
    let response = await todo.get(); // [200]
    dispatch(todoSetAction(response.slice(0,5)));
  };
};

const todoItemDeleteThunk = (id) => {
  return async function (dispatch) {
    try {
      await todo.delete(id);
      dispatch(todoItemDeleteAction(id));
    } catch (err) {
      console.log(err);
    }
  };
};

const todoItemCompletedThunk = item => {
  return function(dispatch){
    (async () => {
      let response = await todo.patch(item.id, {completed: !item.completed});

      dispatch(todoItemChangeAction(response));
    })()
  }
}

export { todoSetThunk, todoItemDeleteThunk, todoItemCompletedThunk };