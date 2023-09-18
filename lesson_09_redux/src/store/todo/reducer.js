import { ACTION_SET_TODO, ACTION_TODO_ITEM_DELETE } from "./actions";

const INITIAL_STATE = {
  todo: [],
  active: 3,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_SET_TODO:
      return { ...state, todo: payload };
    case ACTION_TODO_ITEM_DELETE:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default reducer;