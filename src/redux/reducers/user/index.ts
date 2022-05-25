import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { User } from 'types/user'

interface State {
  user: User | null
}
const initialState: State = {
  user: null,
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state: State, action: PayloadAction<User>) {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export const getUser = (state: RootState) => state.auth.user
export default userSlice.reducer
