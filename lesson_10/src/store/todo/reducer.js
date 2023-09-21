import {
  TODO_ITEM_DELETE_ACTION,
  TODO_SET_ACTION,
  TODO_ITEM_CHANGE_ACTION
} from "./actions";

const initialState = {
  todo: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_SET_ACTION:
      return { ...state, todo: payload };
    case TODO_ITEM_DELETE_ACTION:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload),
      };
    case TODO_ITEM_CHANGE_ACTION:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === payload.id) item = payload;
          return item;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
