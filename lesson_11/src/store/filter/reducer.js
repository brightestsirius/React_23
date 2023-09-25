import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: `all`,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, {payload}) => {
      state.filter = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilter } = filterSlice.actions

export default filterSlice.reducer