import { configureStore } from '@reduxjs/toolkit'

import todo from "./todo/reducer";
import filter from "./filter/reducer";

const store = configureStore({
    reducer: {todo, filter},
  })

export default store;