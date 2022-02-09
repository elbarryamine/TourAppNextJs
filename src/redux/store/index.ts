import { configureStore } from '@reduxjs/toolkit'
import tourReducer from 'redux/reducers/tours'
import settingsReducer from 'redux/reducers/settings'

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    tours: tourReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
