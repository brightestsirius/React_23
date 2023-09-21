import { configureStore } from '@reduxjs/toolkit'

import todo from './todo/reducer'

const store = configureStore({
  reducer: {todo},
})

export default store;