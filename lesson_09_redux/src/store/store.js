import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk'

import todo from "./todo/reducer";
import counter from "./counter/reducer";

const rootReducer = combineReducers({ todo, counter });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancer(applyMiddleware(reduxLogger, reduxThunk)));

// const store = createStore(rootReducer, applyMiddleware(reduxLogger));
// export default store;