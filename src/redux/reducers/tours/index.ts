import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tour } from '@shared/types/tours'

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
    deleteTour(state: State, action: PayloadAction<{ id: string }>) {
      state.toursOfTable = state.toursOfTable.filter((tour: Tour) => tour.id !== action.payload.id)
    },
  },
})

export const { initToursTable, deleteTour } = toursSlice.actions
export default toursSlice.reducer
