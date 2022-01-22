import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  pathname: string | null
}
const initialState: State = {
  pathname: null,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updatePathname(state: State, action: PayloadAction<State>) {
      state.pathname = action.payload.pathname
    },
  },
})

export const { updatePathname } = settingsSlice.actions
export default settingsSlice.reducer
