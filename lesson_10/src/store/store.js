import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

import todo from "./todo/reducer";
import filter from "./filter/reducer";

const rootReducer = combineReducers({ todo, filter });

const store = createStore(rootReducer, applyMiddleware(reduxLogger, reduxThunk));

export default store;