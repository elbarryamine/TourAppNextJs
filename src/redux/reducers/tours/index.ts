import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  toursOfTable: Tour[]
}
const initialState: State = {
  toursOfTable: [],
}

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    initToursTable(state: State, action: PayloadAction<State['toursOfTable']>) {
      state.toursOfTable = action.payload
    },
  },
})

export const { initToursTable } = toursSlice.actions
export default toursSlice.reducer
