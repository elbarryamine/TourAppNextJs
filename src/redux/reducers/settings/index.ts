import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {}
const initialState: State = {}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    init(state: State, action: PayloadAction<State>) {
      return { ...state, ...action.payload }
    },
  },
})

export const { init } = settingsSlice.actions
export default settingsSlice.reducer
