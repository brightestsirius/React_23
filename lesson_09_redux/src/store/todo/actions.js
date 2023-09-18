import { getTodo, deleteTodoItem } from "./../../services/todoService";

// action types
const ACTION_SET_TODO = `ACTION_SET_TODO`;
const ACTION_TODO_ITEM_DELETE = `ACTION_TODO_ITEM_DELETE`;

// actions
const actionTodoItemDelete = (id) => {
  return async (dispatch) => {
    let deletedItem = await deleteTodoItem(id);
    console.log(deletedItem);
    return dispatch({ type: ACTION_TODO_ITEM_DELETE, payload: id });
  };
};

// thunk
const actionGetTodo = () => {
  return async (dispatch) => {
    let todo = await getTodo();
    return dispatch({ type: ACTION_SET_TODO, payload: todo.slice(0, 10) });
  };
};

export {
  ACTION_SET_TODO,
  ACTION_TODO_ITEM_DELETE,
  actionTodoItemDelete,
  actionGetTodo,
};
